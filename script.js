const messages = [
"Te amo demasiado amor de mi vida",
"Contigo soy la persona mas feliz del mundo",
"Eres lo mejor que me ha pasado en toda mi vida",
"Eres mejor de lo que he soñado",
"Soy muy afortunado de tenerete",
"Eres mi persona favorita en el mundo",
"Tu sonrisa ilumina mis días",
"Cada momento contigo es mágico",
"Estoy completamente enamorado de ti",
"Eres la mujer de mi vida y de mis sueños",
"Eres perfecta",
"Me encantas demasiado",
"Se que te voy a amar toda mi vida",
"Cada día que pasa me da razones pa querer pasar mi vida contigo",
"Eres la mujer más preciosa que existe",
"Estoy puto enamorado de ti",
"Me gustas demasiado mi niña",
"Soy 100% tuyo",
"Me quiero casar contigo",
"Estamos hechos el uno para el otro",
];

function createTextBubble() {
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80+10;
    const top = Math.random() * 80+10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(()=> {
        const rect = bubble.getBoundingClientRect();

        if (rect.right>window.innerWidth) {
            const newLeft=window.innerWidth-rect.width-10;
            bubble.style.left = `$(newLeft)px`;
        }

        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerHeight - rect.height - 10;
            bubble.style.top = `$(newTop)px`;
        }

        if (rect.left < 0){
            bubble.style.left = "10px";
        }

        if (rect.top < 0){
            bubble.stay.top ="10px";
        }
}, 10);

setTimeout(() => {
    bubble.remove();
}, 8000);
}

setInterval(createTextBubble, 500);