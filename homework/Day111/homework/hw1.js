function deleteFolders(start, end) {
    for (let i = start; i <= end; i++) {
        const folderName = `folder${i}`;
        if (fs.existsSync(folderName)) {
            fs.rmSync(folderName, { recursive: true, force: true });
            logOperation(`Deleted folder ${folderName}`);
        } else {
            logOperation(`Folder ${folderName} does not exist`);
        }
    }
}