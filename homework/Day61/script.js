function isTeenager(age, hasPermission) {
    hasPermission = (hasPermission === 'true');
    
    if ((age >= 13 && age < 18) && !hasPermission) {
        return false;
    } else if (age === 18 && hasPermission) {
        return true;
    } else {
        return false;
    }
}

function checkTeenager() {
    const age = parseInt(document.getElementById('age').value);
    const hasPermission = document.getElementById('hasPermission').value;
    
    const result = isTeenager(age, hasPermission);
    document.getElementById('result').innerText = `Result: ${result}`;
}