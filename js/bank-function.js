    

// function inputValue (inputId) {
//     const inputFrield = document.getElementById(inputId);
//     const inputText = parseFloat(inputFrield.value);
//     inputFrield.value = ''
//     return inputText;
// }
//     // function display
//     function displayAmount(id,amount){
//         const display = document.getElementById(id);
//         const displayInnetText = parseFloat(display.innerText);
//         return display.innerText = displayInnetText + amount
//     } 
    
//     function totalUpdate (amount,isAdd){
//         const totalDisplay = document.getElementById('total-display');
//         const totalDisplayPrevius = totalDisplay.innerText;
//         const totalDisplayAmountPre = parseFloat(totalDisplayPrevius)
//         if(isAdd == true ){
//             return totalDisplay.innerText =totalDisplayAmountPre + amount;
//         }
//         else{
//         return  totalDisplay.innerText =  totalDisplayAmountPre - amount;
//         }
//     }
    
    
// document.getElementById('btn-deposit').addEventListener('click',function(){
    
//     const depositInput = document.getElementById('input-deposit')
//     const depositInputText = depositInput.value;
//     const depositInputNumber = parseFloat(depositInputText);
    
//     //deposit display
//     const depositDisplay = document.getElementById('deposit-display')
//     const depositDisplayAmountPrevius = parseFloat(depositDisplay.innerText);
//     depositDisplay.innerText = depositInputNumber + depositDisplayAmountPrevius

    
//     //total balance update
//     const totalDisplay = document.getElementById('total-display')
//     const totalDisplayPrevius = totalDisplay.innerText;
//     const totalDisplayPreviusAmount  = parseFloat(totalDisplayPrevius)
//     totalDisplay.innerText = totalDisplayPreviusAmount + depositInputNumber;


    
//     depositInput.value = ''
//     const color = confirm('change color ')
//     if(color){
//         document.body.style.backgroundColor='blue'
//     }
// })


// // withdraw 
// document.getElementById('btn-withdraw').addEventListener('click',function(){
//     const inputWithdraw = document.getElementById('input-withdraw')
//     const inputWithdrawAmount = parseFloat(inputWithdraw.value)
    
    
//     // withdraw display
//     const withdrawDisplay = document.getElementById('withdraw-display')
//     const withdrawDisplayText = withdrawDisplay.innerText; 
//     const withdrawDisplayPrevius = parseFloat(withdrawDisplayText);
//     withdrawDisplay.innerText = withdrawDisplayPrevius + inputWithdrawAmount;
    
    
//     // total update
//     const totalDisplay = document.getElementById('total-display');
//     const totalDisplayText = totalDisplay.innerText;
//     const totalDisplayPrevius = parseFloat(totalDisplayText);
//     totalDisplay.innerText = totalDisplayPrevius - inputWithdrawAmount;
    
//     inputWithdraw.value = ''
// })


function focusInput (focusId){
    document.getElementById(focusId).addEventListener('focus',function(){
        document.body.style.backgroundColor = 'orange'
    })
    document.getElementById(focusId).addEventListener('blur',function(){
        document.body.style.backgroundColor = 'maroon'
    })
}
focusInput('input-withdraw')
focusInput('input-deposit')



//  functional program 
function inputValue (id){
    const inputFrield = document.getElementById(id)
    const inputText = inputFrield.value ;
    const inputAmount = parseFloat(inputText)
    // cleat input 
    inputFrield.value = ''
    
    return inputAmount;
    
    
    
    
}
// desplay show 
function displayShow (id,amount){
     const display = document.getElementById(id)
     const displayText = display.innerText;
     const displayPrevius = parseFloat(displayText);
     return display.innerText = amount + displayPrevius ;
}
// total balance 
function totalUpdate (id,amount,isAdd){
    const totalDisplay = document.getElementById(id)
    const totalDisplayText = totalDisplay.innerText;
    const totalDisplayPrevius = parseFloat(totalDisplayText);
    
    if(isAdd == true) {
        totalDisplay.innerText = totalDisplayPrevius + amount ;
    }
    else {
        totalDisplay.innerText = totalDisplayPrevius - amount
    }
}
// deposit 
document.getElementById('btn-deposit').addEventListener('click',function(){
     const depositAmount = inputValue('input-deposit');
     if(depositAmount > 0){
        displayShow('deposit-display',depositAmount)
        totalUpdate('total-display',depositAmount,true)
    }
    else{
        alert('wrong input ')
    }
})

// withdraw 
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //total balance
    const totalBalance = document.getElementById('total-display')
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = totalBalanceText;
    
    
    const withdrawAmount = inputValue('input-withdraw')
    if(withdrawAmount > 0  &&  totalBalanceAmount>=withdrawAmount){
        displayShow('withdraw-display',withdrawAmount);
        totalUpdate('total-display',withdrawAmount,false)
    }
    else{
        alert('sorry worong input')
    }
})