const fs = require('fs');
const path = require('path');

function createFolders() {
    for (let i = 1; i <= 10; i++) {
        const folderName = `folder${i}`;
        const classworkPath = path.join(folderName, 'classwork');
        const homeworkPath = path.join(folderName, 'homework');

        fs.mkdirSync(folderName, { recursive: true });
        fs.mkdirSync(classworkPath, { recursive: true });
        fs.mkdirSync(homeworkPath, { recursive: true });

        fs.writeFileSync(path.join(classworkPath, 'classwork.js'), 'console.log("goa best");');
        fs.writeFileSync(path.join(homeworkPath, 'homework.js'), 'console.log("goa best");');

        logOperation(`Created folder ${folderName} with classwork and homework`);
    }
}