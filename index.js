 // Remove the <main> element with the ID of "main"
const mainElement = document.getElementById('main');
mainElement.remove();
const newHeader = document.createElement('h1');


newHeader.id = 'victory';
newHeader.innerHTML = 'Drake is the champion';
document.body.appendChild(newHeader);
