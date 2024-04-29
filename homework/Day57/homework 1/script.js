document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('styleForm');
    const styledDiv = document.getElementById('styledDiv');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get user input values
        const color = document.getElementById('divColor').value;
        const width = document.getElementById('divWidth').value + 'px';
        const height = document.getElementById('divHeight').value + 'px';

        // Apply styles to the div
        styledDiv.style.backgroundColor = color;
        styledDiv.style.width = width;
        styledDiv.style.height = height;
    });
});