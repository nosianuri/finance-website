function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);

    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear the deposit input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    const newDepositTotal = previousTotal + amount;
    totalElement.innerText = newDepositTotal;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    
    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    } 

});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    if(newWithdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what your balance in your account');
    }

    
});



// Calculate Income & Expense

function inputValue(inputId){
    let getInputField = document.getElementById(inputId).value;
    let getInputAmount = parseFloat(getInputField);
    return getInputAmount;
    }
    document.getElementById('calculate-btn').addEventListener('click', function(){
        const addTuition = inputValue('add-tuition');
        const addRent = inputValue('add-rent');
        const addOthers = inputValue('add-others');
        const addIncome = inputValue('add-income');
    
        // const addTuition = document.getElementById('add-tuition').value;
        // const addRent = document.getElementById('add-rent').value;
        // const addOthers = document.getElementById('add-others').value;
        // const addIncome = document.getElementById('add-income').value;
    
        const totalAdd = parseFloat(addTuition) + parseFloat(addRent) + parseFloat(addOthers);
        const totalExpenditure = document.getElementById('total-expenditure');
        totalExpenditure.innerText = totalAdd;
        console.log(totalAdd);
        // const addIncome = document.getElementById('add-income').value;
        // const balance = document.getElementById('remnant-balance').innerText;
        const balance = addIncome - totalAdd;
        const remnantBalance = document.getElementById('remnant-balance');
        remnantBalance.innertext = balance;
        console.log(balance);
        // Input field Error
        if(addTuition < 0 || addRent < 0 || addOthers < 0){
            document.getElementById('negative-error').style.display = 'block'
        }
        else if (isNaN(addTuition < 0 || addRent < 0 || addOthers < 0)){
            document.getElementById('nan-error').style.display = 'block'
        }
        else{
            document.getElementById('total-expenditure').innerText = totalAdd;
            document.getElementById('remnant-balance').innerText = balance;
            document.getElementById('nan-error').style.display = 'none'
        }
    });
        // save money and remaining balance
        function saveInputMoney(saveInputId){
            let getInputField = document.getElementById(saveInputId).value;
            let getInputAmount = parseFloat(getInputField);
            return getInputAmount;
            }
    
    document.getElementById('save-btn').addEventListener('click', function(){
        const addTuition = saveInputMoney('add-tuition');
        const addRent = saveInputMoney('add-rent');
        const addOthers = saveInputMoney('add-others');
        const addIncome = saveInputMoney('add-income');
        const saveInput = saveInputMoney('add-percentage');
        const savingAmount = document.getElementById('saving-amount');
        const saveAmount = (saveInput * addIncome) / 100;
        savingAmount.innerText = saveAmount;
        // const balance = document.getElementById('remnant-balance').innerText;
        
        // const addTuition = document.getElementById('add-tuition').value;
        // const addRent = document.getElementById('add-rent').value;
        // const addOthers = document.getElementById('add-others').value;
        // const addIncome = document.getElementById('add-income').value;
    
        const totalAdd = parseFloat(addTuition) + parseFloat(addRent) + parseFloat(addOthers);
        const totalExpenditure = document.getElementById('total-expenditure');
        totalExpenditure.innerText = totalAdd;
        console.log(totalAdd);
        // addIncome = document.getElementById('add-income').value;
        // const balance = document.getElementById('remnant-balance').innerText;
        const balance = addIncome - totalAdd;
        const remnantBalance = document.getElementById('remnant-balance');
        remnantBalance.innertext = balance;
        
        const remainingBalance = balance - saveAmount;
    
    
        // save money Error handle
        if(saveInput < 0){
            document.getElementById('saveBtn- negative-error').style.display = 'block'
    
        }
        else if (isNaN(saveInput)){
            document.getElementById('saveBtn-nan-error').style.display = 'block'
        }
        else{
            document.getElementById('saving-amount').innertext = saveAmount;
            document.getElementById('remaining-balance').innerText = remainingBalance;
            document.getElementById('saveBtn-nan-error').style.display = 'none'
            document.getElementById('saveBtn-negative-error').style.display = 'none'
    
        }
        // remaining balance error
        if(balance < saveAmount){
            document.getElementById('saveBtn-balance-error').style.display = 'block'
        }
        else{
            document.getElementById('saveBtn-balance-error').style.display = 'none'
        }
    });
        