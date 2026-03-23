document.getElementById('cardForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupération des valeurs
    const name = document.getElementById('streamerName').value;
    const age = document.getElementById('age').value;
    const game = document.getElementById('gameTheme').value;
    const character = document.getElementById('character').value;
    const slogan = document.getElementById('slogan').value;

    // Construction du prompt pour Gemini
    const prompt = `Génère une image de carte d'anniversaire style carte postale de streaming.
Thème visuel : ${game}.
Personnage principal : ${character} (style anime/manga moderne).
Inscriptions : 
- "JOYEUX ANNIVERSAIRE ${name} !"
- "${age} ANS"
- "${slogan}"
Détails : Inclure un logo Twitch, un compteur de "SUBS", des éléments flottants du jeu (materia, vaisseaux), et un gâteau avec une fraise. 
Mise en page : Une version complète à gauche et une version 'pochoir vide' à droite pour personnalisation ultérieure.`;

    // Affichage dans la zone de texte
    document.getElementById('finalPrompt').value = prompt;
    
    // Animation visuelle du pochoir
    const stencil = document.getElementById('stencil');
    stencil.style.borderColor = "#9146ff";
    stencil.innerHTML = `<div style="text-align:center">✨ Prompt Prêt pour ${character} !</div>`;
});

function copyPrompt() {
    const copyText = document.getElementById("finalPrompt");
    copyText.select();
    document.execCommand("copy");
    alert("Prompt copié ! Colle-le dans Gemini.");
}
