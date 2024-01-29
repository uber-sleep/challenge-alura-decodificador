// Selecionando Elementos
let htmlElemnts = (tag) => {
    return document.querySelector(tag);
};

let input = htmlElemnts('textarea');
let criptoBtn = htmlElemnts('#criptografar-btn');
let descriptoBtn = htmlElemnts('#descriptografar-btn');
let sectionMsg = htmlElemnts('#messages');

// validityCheck();

// Ciptografar
criptoBtn.addEventListener('click', (event) => {
    let encryptedInput = encrypt();
    clearingElements()
    if (input.value !== ''){
    // Criando elementos
    let sectionMsgH2 = document.createElement('h2');
    sectionMsgH2.textContent = encryptedInput;
    let sectionMsgBtn = document.createElement('button');
    sectionMsgBtn.innerHTML = 'Copiar';

    // Configurando classes
    sectionMsg.classList.remove('inactive');
    sectionMsg.classList.add('active');
    sectionMsgH2.classList.add('active');
    sectionMsgBtn.classList.add('active')
    
    //Appending elementos
    sectionMsg.appendChild(sectionMsgH2); 
    sectionMsg.appendChild(sectionMsgBtn);

    // Limpando input
    input.value = '';
    } else {
    sectionMsg.classList.remove('active');
    sectionMsg.classList.add('inactive');
    };

});

// Encriptando
let encrypt = () => {
    const originalInput = input.value;
    let inputResult = '';

    for( let i = 0; i < originalInput.length; i++) {
        let char = input.value[i];

        switch (char) {
            case 'a':
                inputResult += 'ai';
                break;
            case 'e':
                inputResult += 'enter';
                break;
            case 'i':
                inputResult += 'imes';
                break;
            case 'o':
                inputResult += 'ober';
                break;
            case 'u':
                inputResult += 'ufat';
                break;
            default:
                inputResult += char; 
                break;
        };
    };
    return inputResult;
};

// Clearing elemnts
function clearingElements() {
    sectionMsg.querySelectorAll('.active').forEach(element => element.remove());
};