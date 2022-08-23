
document.getElementById('calculate').addEventListener('click', function(){
    const playerPrice= document.getElementById('playerPrice1');
    const playerPriceString= playerPrice.value;
    const newPlayerPrice= parseFloat(playerPriceString);

    playerPrice.value= '';

    const previousTotalPlayerPriceElement= document.getElementById('totalPlayerPrice1');


    const totalPlayerPrice= newPlayerPrice * 5;
    previousTotalPlayerPriceElement.innerText= totalPlayerPrice;
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