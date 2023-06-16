function getValue(id) {
    const input = document.getElementById(id).value;
    return parseFloat(input);
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
    if (income < 0 || foodValue < 0 || rentValue < 0 || clothesValue < 0) {
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
        const expenseValue = foodValue + rentValue + clothesValue;
        const expensesValueString = '' + expenseValue;
        totalExpense.innerText = expensesValueString;

        //Balance
        const balance = document.getElementById('balance');
        const totalBalance = income - expenseValue;
        const totalBalanceString = '' + totalBalance;

        balance.innerText = totalBalanceString;

        if (income < expenseValue) {
            showErrorMessage("Expense is more than income. So You can't save!");
            document.getElementById('savingArea').style.display = 'none';

        }

        //Save
        document.getElementById('saveButton').addEventListener('click', function () {
            console.log('clicked');
            const save = document.getElementById('inputSave');
            const savePercent = getValue('inputSave');



            const savingAmount = document.getElementById('saving-amount');

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

                savingAmount.innerText = saveAmountString;

                //Remaining
                const remain = document.getElementById('remaining-balance');
                const remainValue = remain.innerText;

                const remainingBalance = totalBalance - savedAmount;
                const remainingBalanceString = '' + remainingBalance;

                remain.innerText = remainingBalanceString;
            }
        })
    }




})