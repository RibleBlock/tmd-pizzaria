
const bars = document.querySelectorAll('.slides input[type=radio]');
let i = 1;

setInterval(() => {
    bars[i].checked = true;
    i++;
    if(i === bars.length) i = 0;
}, 4000);
