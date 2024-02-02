// Selecionando Elementos
let htmlElemnts = (tag) => {
    return document.querySelector(tag);
};

let input = htmlElemnts('textarea');
let criptoBtn = htmlElemnts('#criptografar-btn');
let descriptoBtn = htmlElemnts('#descriptografar-btn');
let sectionMsg = htmlElemnts('#messages');

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
        sectionMsgBtn.classList.add('copy');
        sectionMsgBtn.classList.add('active');
        
        //Appending elementos
        sectionMsg.appendChild(sectionMsgH2); 
        sectionMsg.appendChild(sectionMsgBtn);

        // Limpando input
        input.value = '';

        if (sectionMsgBtn) {
            sectionMsgBtn.addEventListener("click", async ()=> {
                try {
                    let copyText = document.querySelector('h2.active');
                    await navigator.clipboard.writeText(copyText.textContent);
                } catch (err) {
                    console.error("Ocorreu um erro:", err);
                };
            });
        };
    } else {
        sectionMsg.classList.remove('active');
        sectionMsg.classList.add('inactive');
    };
});

// Descriptografar
descriptoBtn.addEventListener('click', (event) => {
    decryptInput = decrypt();
    clearingElements()
    if (input.value !== ''){
        // Criando elementos
        let sectionMsgH2 = document.createElement('h2');
        sectionMsgH2.textContent = decryptInput;
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
        
        if (sectionMsgBtn) {
            sectionMsgBtn.addEventListener("click", async ()=> {
                try {
                    let copyText = document.querySelector('h2.active');
                    await navigator.clipboard.writeText(copyText.textContent);
                } catch (err) {
                    console.error("Ocorreu um erro:", err);
                };
            });
        };
    } else {
        sectionMsg.classList.remove('active');
        sectionMsg.classList.add('inactive');
    };
});

// Funções
let encrypt = () => {
    const originalInput = input.value;

    return originalInput.replace(/e/g, 'enter')
                        .replace(/i/g, 'imes')
                        .replace(/o/g, 'ober')
                        .replace(/u/g, 'ufat')
                        .replace(/a/g, 'ai');
};

let decrypt = () => {
    const originalInput = input.value;

    return originalInput.replace(/ai/g, 'a')
                        .replace(/enter/g, 'e')
                        .replace(/imes/g, 'i')
                        .replace(/ober/g, 'o')
                        .replace(/ufat/g, 'u');
};

function clearingElements() {
    sectionMsg.querySelectorAll('.active').forEach(element => element.remove());
};