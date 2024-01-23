// Selecionando Elementos
let htmlElemnts = (tag) => {
    return document.querySelector(tag);
};

let input = htmlElemnts('textarea');
let criptoBtn = htmlElemnts('#criptografar-btn');
let descriptoBtn = htmlElemnts('#descriptografar-btn');
let sectionMsg = htmlElemnts('.messages');

// Ciptografar
