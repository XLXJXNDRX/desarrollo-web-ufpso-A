const form = document.getElementById('entrada');
const input = document.getElementById('botonAgregar');
const todoList = document.getElementById('lista');
const countDisplay = document.getElementById('contador ');

let contador = 0;
function updateCounter(amount) {
    contador += amount;
    countDisplay.textContent = contador;
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const taskText = input.value.trim();
    if (taskText === "") return;

    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Eliminar</button>
    `;

    
    todoList.appendChild(li);
    updateCounter(1);

    
    input.value = "";
    input.focus();
});

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const itemToRemove = e.target.parentElement;
        itemToRemove.remove();
        updateCounter(-1);
    }
});