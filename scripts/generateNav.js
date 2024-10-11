import path from 'node:path';
import fs from 'node:fs';
import matter from 'gray-matter';

const srcDir = path.resolve('src');
const navOutputFilePath = path.resolve('.vitepress/generatedNav.ts');
const sidebarOutputFilePath = path.resolve('.vitepress/generatedSidebar.ts');

function getFiles(dir, fileList = {}) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, fileList);
        } else if (filePath.endsWith('.md')) {
            const folder = path.relative(srcDir, path.dirname(filePath));
            if (!fileList[folder]) {
                fileList[folder] = [];
            }
            fileList[folder].push(filePath);
        }
    });
    return fileList;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTitleFromFrontmatter(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data} = matter(fileContent);
    return data.title || capitalizeFirstLetter(path.basename(filePath, '.md'));
}

function getLastUpdatedFromFrontmatter(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data} = matter(fileContent);
    return data.lastUpdated ? new Date(data.lastUpdated) : new Date(0);
}

function generateNav() {
    const files = getFiles(srcDir);
    return Object.keys(files).map(folder => {
        const items = files[folder].map(file => {
            const relativePath = path.relative(srcDir, file);
            const link = `/${relativePath.replace(/\\/g, '/').replace(/\.md$/, '')}`;
            const text = getTitleFromFrontmatter(file);
            const lastUpdated = getLastUpdatedFromFrontmatter(file);
            if (text === 'Index') return undefined;
            return {text, link, lastUpdated};
        }).sort((a, b) => b.lastUpdated - a.lastUpdated); // Sort by lastUpdated

        return {
            text: capitalizeFirstLetter(folder),
            activeMatch: `^/${folder}/`,
            items: items.filter(Boolean).map(({text, link}) => ({text, link}))
        };
    });
}

const nav = generateNav();
const navContent = `import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = ${JSON.stringify(nav.map(item => {
    if (item.text) {
        return {text: item.text, link: `/${item.text.toLowerCase()}/`};
    } else {
        return {text: 'Úteis', items: item.items};
    }
}), null, 2)};
`;

const sidebarContent = `import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = ${JSON.stringify(nav.reduce((acc, item) => {
    const base = `/${item.text.toLowerCase()}/`;
    acc[base] = [{
        text: item.text,
        items: item.items
    }];
    return acc;
}, {}), null, 2)};
`;

fs.writeFileSync(navOutputFilePath, navContent, 'utf-8');
fs.writeFileSync(sidebarOutputFilePath, sidebarContent, 'utf-8');
