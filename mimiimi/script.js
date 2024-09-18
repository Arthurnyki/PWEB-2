document.getElementById('addRowBtn').addEventListener('click', () => {
    const table = document.getElementById('infoTable');
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = 'João';
    cell2.textContent = '25';
});

document.getElementById('updateContentBtn').addEventListener('click', () => {
    const h2 = document.querySelector('#content h2');
    h2.textContent = 'Conteúdo Atualizado';


    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Este é um novo parágrafo adicionado após a atualização.';
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(newParagraph);
});

const myLink = document.getElementById('myLink');
myLink.addEventListener('mouseover', () => {
    myLink.style.color = 'red';
});
myLink.addEventListener('mouseout', () => {
    myLink.style.color = 'blue'; 
});

document.getElementById('addDivBtn').addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.id = 'newDiv';
    newDiv.textContent = 'Este É Um Novo Bloco De Conteúdo.';
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(newDiv);
});

document.getElementById('removeParagraphBtn').addEventListener('click', () => {
    const paragraph = document.querySelector('#content p');
    if (paragraph) {
        paragraph.remove();
    } else {
        alert('Parágrafo já foi removido.');
    }
});


