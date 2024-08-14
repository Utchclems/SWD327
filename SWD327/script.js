const parts = [...document.querySelectorAll('#hour,#minute,#seconds')]
setInterval(() => {
 new Date().toTimeString().split(' ')[0].split(':').forEach( (part, i) => parts[i].textContent = part)
}, 1000)
