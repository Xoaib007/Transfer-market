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
        alert('You cant choose more than 5 player');
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


