const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date();
console.log (currentYear);
yearSpan.innerText = currentYear.getFullYear();