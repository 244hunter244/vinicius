const heart = document.getElementById('heart');
const colors = ['#e91e63', '#9c27b0', '#f44336', '#ff4081'];
let colorIndex = 0;

heart.addEventListener('click', () => {
    // Muda a cor do coração aleatoriamente
    colorIndex = (colorIndex + 1) % colors.length;
    heart.style.backgroundColor = colors[colorIndex];
    
    // Altera a cor das partes arredondadas também
    const style = document.createElement('style');
    style.innerHTML = `
        .heart::before, .heart::after { 
            background-color: ${colors[colorIndex]} !important; 
        }
    `;
    document.head.appendChild(style);

    // Pequena mensagem de alerta
    alert("Cada batida desse coração é por você! ✨");
});