let btnStart = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    
    inputExpensesItems = document.querySelectorAll('.expenses-item'),
    expensesItemBtn = document.querySelector('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),
    optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    inputChooseSum = document.querySelector('.choose-sum'),
    inputChoosePercent = document.querySelector('.choose-percent'),
    inputYearValue = document.querySelector('.year-value'),
    inputMonthValue = document.querySelector('.month-value'),
    inputDayValue = document.querySelector('.day-value');

let money,time;

btnStart.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    inputYearValue.value = new Date(Date.parse(time)).getFullYear();
    inputMonthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    inputDayValue.value = new Date(Date.parse(time)).getDate();
    expensesItemBtn.disabled = false;
optionalExpensesBtn.disabled = false;
countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;

    for(let i = 0; i < inputExpensesItems.length; i++){
        let a = inputExpensesItems[i].value,
            b = inputExpensesItems[++i].value;
        if ((typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        }else {
          i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalexpensesItems.length; i++){
        let opt = optionalexpensesItems[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function(){
    if (appData.budget != undefined){

    appData.moneyPerDay = (appData.budget /30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

     if(appData.moneyPerDay < 100){
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000){
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка";
    }    
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

inputChooseSum.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +inputChooseSum.value,
            percent = +inputChoosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.monthIncome.toFixed(1);
    }
});

inputChoosePercent.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +inputChooseSum.value,
            percent = +inputChoosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.monthIncome.toFixed(1);
    }
});

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};


