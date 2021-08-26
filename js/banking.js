function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}
function getDepositWithdrawValue(value, amount) {
    const totalElement = document.getElementById(value);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;

}
function currentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function totalBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    const previousBalanceTotal = currentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + newAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - newAmount;
    }

}








// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);


    // update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);

    // const newDepositTotal = previousDepositAmount + newDepositAmount;
    // depositTotal.innerText = newDepositTotal;



    // update account balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        getDepositWithdrawValue('deposit-total', newDepositAmount);
        totalBalance(newDepositAmount, true);

    }
    else {
        alert("Please Enter a Valid number   !!!Error");
    }

    // clear the deposit input field
    // depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);


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
    // const previousBalanceTotal = totalBalance('balance-total');
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // balanceTotal.innerText = newBalanceTotal;
    const currBalance = currentBalance();
    const newWithdrawAmount = getInputValue('withdraw-input');
    if (newWithdrawAmount > 0 && currBalance > newWithdrawAmount) {
        getDepositWithdrawValue('withdraw-total', newWithdrawAmount);
        totalBalance(newWithdrawAmount, false);
    }
    else {
        alert("Please Enter a Valid number   !!!Error");
    }

    // clear withdraw input
    // withdrawInput.value = '';
})