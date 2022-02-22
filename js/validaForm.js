
const form = document.querySelector('#form');
form.addEventListener('submit', e => {
    e.preventDefault();
    handleSubmit();
});


function criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerText = '-' + msg;
    div.classList.add('div-error');
    campo.insertAdjacentElement('afterend', div);
    campo.focus();    
}

function verificaSenha() {
    const senha = form.querySelector('.senha');
    const senhausuario = form.querySelector('.senhausuario');
    let isValid = true;

    if(senha.value.length < 8) {
        criaErro(senha, 'O campo senha deveter 8 ou mais letras');
        isValid = false;
    }
    
    if(senha.value.match(/[a-zA-Z0-9]+/g)) {
        criaErro(senha, 'Digite apeba');
        isValid = false;
    }

    if(senha.value !== senhausuario.value) {
        criaErro(senha, 'As senhas devem ser iguais');
        criaErro(senhausuario, 'As senhas devem ser iguais');
        isValid = false;
    }
    return isValid;
}

function validaCpf(campo) {
    const cpf = new ValidaCPF(campo.value);
    if(!cpf.validar()) {
        criaErro(campo, 'CPF inválido');
        return false;
    }
    return true;
}
 
function validaTel(campo) {  // ARRUMAR
    let ddd = campo.value;
    
    if(ddd.length !== 11) {
        criaErro(campo, 'Digite seu telefone com DDD');
        return false;
    }

    ddd = Number(campo.value);

    if(typeof ddd === 'NaN') {
        criaErro(campo, 'Digite apenas números');
        return false;  
    }
    return true;
}

function handleSubmit() {
    verificaCampos();
    verificaSenha();

    if(verificaCampos() && verificaSenha()) {
        alert('Formulario Enviado');
    }
}

function verificaCampos() {
    let isValid = true;
    
    for(let err of form.querySelectorAll('.div-error')) {
        err.remove();   
    }

    for(let campo of form.querySelectorAll('.validar')) {
        console.log(campo.placeholder);
        
        if(!campo.value && !campo.classList.contains('cpfUsuario')) {
            criaErro(campo, `O campo ${campo.placeholder} está vázio.`);
            isValid = false;
        }
        
        // CPF
        if(campo.classList.contains('cpfUsuario')) {
            if(!validaCpf(campo)) isValid = false;
        }
        
        if(campo.classList.contains('telefone')) {
            if(!validaTel(campo)) isValid = false;
            }
    }
    return isValid;
}

// (() => {
// })();
