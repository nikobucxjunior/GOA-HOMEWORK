function logOperation(action) {
    const timestamp = new Date().toISOString();
    const logEntry = `${action} at ${timestamp}\n`;
    fs.appendFileSync('log.txt', logEntry, 'utf8');
}