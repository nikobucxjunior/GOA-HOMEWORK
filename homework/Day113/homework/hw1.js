function searchFiles(folder, searchText) {
    const results = { foundIn: [] };

    if (fs.existsSync(folder)) {
        const subFolders = fs.readdirSync(folder);

        subFolders.forEach(subFolder => {
            const subFolderPath = path.join(folder, subFolder);
            if (fs.lstatSync(subFolderPath).isDirectory()) {
                const files = fs.readdirSync(subFolderPath);
                files.forEach(file => {
                    const filePath = path.join(subFolderPath, file);
                    const content = fs.readFileSync(filePath, 'utf8');
                    if (content.includes(searchText)) {
                        results.foundIn.push(filePath);
                    }
                });
            }
        });
    }

    return results;
}