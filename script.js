// Get the input ID
const input = document.getElementById('letter-input');
// Use input event
input.addEventListener('input', (event) => {
    input.value = input.value.replace(/[^a-zA-Z]/gi, '');
});