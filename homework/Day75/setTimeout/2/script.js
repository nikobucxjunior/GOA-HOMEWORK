function countdown(number) {
    if (number > 0) {
        setTimeout(function() {
            console.log(number);
            countdown(number - 1);
        }, 1000);
    }
}

countdown(5);