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
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
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
    // get the amount deposited
    // const depositInput = document.getElementById('deposit-input');

    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }


    // get current deposit

    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText)
    // const newDepositTotal = previousDepositAmount + newDepositAmount;
    // depositTotal.innerText = newDepositTotal;
    

    // update account balance

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    

});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    if(newWithdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what your balance in your account');
    }

    // set withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);
    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;
    

    // update balance

    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // balanceTotal.innerText = newBalanceTotal;
    

    // clear withdraw input
    // withdrawInput.value = '';
})