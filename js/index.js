document.getElementById('btn-submite').addEventListener('click',function(){
    const inputEmail=document.getElementById('input-email')
    const inputEmailText=inputEmail.value;
    const inputPassword = document.getElementById('input-password')
    const inputPasswordText = inputPassword.value;
    
    if(inputEmailText == 'abcd@gmail.com' && inputPasswordText == '1234'){
        window.location.href='banking.html'
    }
    else{
        alert('not match')
    }
})


function bank(){
    window.location.href='banking.html';
}