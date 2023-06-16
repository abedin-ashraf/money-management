function getValue(id) {
    const input = document.getElementById(id).value;
    return parseFloat(input);
}
function previousString(id) {
    const total = document.getElementById(id);
    const totaleValueString = total.innerText;
    return totaleValueString;
}

function showErrorMessage(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = message;
    error.style.display = 'block';
}

document.getElementById('calculate').addEventListener('click', function () {
    const income = getValue('inputIncome');
    const foodValue = getValue('inputFood');
    const rentValue = getValue('inputRent');
    const clothesValue = getValue('inputClothes');

    const error = document.getElementById('error');

    //Error Message
    if (income < 1 || foodValue > income || rentValue > income || clothesValue > income) {
        showErrorMessage("Please Insert Positive Number");

    }
    else if (isNaN(income) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue)) {
        showErrorMessage("Please Insert Number");

    }

    else {
        //Hide Error Message
        error.style.display = 'none';

        //Total Expenses
        const totalExpense = document.getElementById('total-expenses');
        const totalExpenseValue = totalExpense.innerText;
        const expenseValue = foodValue + rentValue + clothesValue;
        const expensesValueString = '' + expenseValue;
        totalExpense.innerText = totalExpenseValue + expensesValueString;

        //Balance
        const balance = document.getElementById('balance');
        const balanceValue = balance.innerText;
        const totalBalance = income - expenseValue;
        const totalBalanceString = '' + totalBalance;

        balance.innerText = balanceValue + totalBalanceString;

        //Save
        document.getElementById('saveButton').addEventListener('click', function () {
            console.log('clicked');
            const save = document.getElementById('inputSave');
            const savePercent = getValue('inputSave');



            const savingAmount = document.getElementById('saving-amount');
            const savingValue = savingAmount.innerText;

            const savedAmount = income * (savePercent / 100);

            //ShowErrorMessage
            if (savePercent < 0 || isNaN(savePercent)) {
                showErrorMessage('Please correct Percentage Value');
            }
            else if (savedAmount > totalBalance) {
                showErrorMessage("Saving Amount can't be more than Balance");
            }

            else {
                //Hide Error Message
                error.style.display = 'none';

                const saveAmountString = '' + savedAmount;

                savingAmount.innerText = savingValue + saveAmountString;

                //Remaining
                const remain = document.getElementById('remaining-balance');
                const remainValue = remain.innerText;

                const remainingBalance = totalBalance - savedAmount;
                const remainingBalanceString = '' + remainingBalance;

                remain.innerText = remainValue + remainingBalanceString;
            }
        })
    }




})