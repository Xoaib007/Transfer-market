
document.getElementById('calculate').addEventListener('click', function(){

    const addedPlayer= player.length;

    const playerBudgetElement= document.getElementById('playerPrice1');
    const playerBudgetString= playerBudgetElement.value;
    const playerBudgetInput= parseFloat(playerBudgetString);

    const totalPlayerPrice= document.getElementById('totalPlayerPrice1');

    const playerTotalExpenses= addedPlayer * playerBudgetInput;
    totalPlayerPrice.innerText= playerTotalExpenses;

})

document.getElementById('totalCost1').addEventListener('click', function(){
    const managerCostElement= document.getElementById('managerCost');
    const managerCostString= managerCostElement.value;
    const managerCost= parseFloat(managerCostString);

    managerCostElement.value='';

    const coachCostElement= document.getElementById('coachCost');
    const coachCostString= coachCostElement.value;
    const coachCost= parseFloat(coachCostString);

    coachCostElement.value='';

    const totalCostElement= document.getElementById('totalCost');

    const playerCostElement= document.getElementById('totalPlayerPrice1');
    const playerCostString= playerCostElement.innerText;
    const playerCost= parseFloat(playerCostString)


    const totalExpense= playerCost + managerCost + coachCost;
    totalCostElement.innerText= totalExpense;

})