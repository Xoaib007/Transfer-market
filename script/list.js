const player=[];
function playerList(element){

    element.disabled = true;
    
    const playerName= element.parentNode.parentNode.children[0].innerText;
    const totalPlayer= document.getElementById('totalPlayer');
    const addedPlayer= player.length;
    if(player.length<5){
        player.push(playerName);
        displayplayerList(player);
    }
    else{
        alert('error');
        return;
    }
    
}

function displayplayerList(playerList){
    const addedList= document.getElementById('players');
    addedList.innerHTML= '';
    for(let i=0; i<playerList.length ; i++){
        const added= player[i];
        const tr= document.createElement('tr');
        tr.innerHTML= ` <th scope="row">${i+1}</th>
        <td>${added}</td>`
        addedList.append(tr);
    }
}

// document.getElementById('calculate').addEventListener('click', function(){

//     const addedPlayer= player.length;

//     const playerBudgetElement= document.getElementById('playerPrice1');
//     const playerBudgetString= playerBudgetElement.value;
//     const playerBudgetInput= parseFloat(playerBudgetString);

//     const totalPlayerPrice= document.getElementById('totalPlayerPrice1');

//     const playerTotalExpenses= addedPlayer * playerBudgetInput;
//     totalPlayerPrice.innerText= playerTotalExpenses;

// })

