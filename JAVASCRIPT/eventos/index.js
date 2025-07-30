function register(ev) {
    console.log(ev);
    const sectionElement = ev.currentTarget.parentNode;
    const username =  sectionElement.children.username.value;
    const password =  sectionElement.children.password.value;
    const passwordConfirmation =  sectionElement.children.passwordConfirmation.value;

    if (password === passwordConfirmation){
        alert('Usuário' + username + ' registrado!');
    }else{
        alert('As senhas não conferen!');
    }
}

const btn = document.getElementById('register-button');

btn.addEventListener('click', register);

function removeListener(){
    btn.removeEventListener('click', register);
    alert("Event removed");
}

btn.addEventListener('mouseover', function(ev){
    console.log(ev.currentTarget);
})

// Um mesmo "método" pode receber varios eventos