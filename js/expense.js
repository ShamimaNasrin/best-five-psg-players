// Add player to the list part
let playerArray = [];

function displayPlayer(selectedPlayer) {

    const olContainer = document.getElementById('selected-five-ol');
    olContainer.innerHTML = '';

    for (let i = 0; i < selectedPlayer.length; i++) {

        const pName = playerArray[i];
        const li = document.createElement('li');

        li.innerHTML = `
         ${pName}
         `;
        olContainer.appendChild(li);

        const childNumberOfOl = olContainer.children.length;
        console.log(childNumberOfOl.length);
    }

}

function addSelectedPlayer(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;

    let playerArrlenght = playerArray.length;

    if (playerArrlenght < 5) {
        playerArray.push(playerName);
        element.disabled = true;

        displayPlayer(playerArray);
    }
    else {
        alert('You cant select more then 5 players');
        return;
    }

}

// Calculation part 

//calculate player expenses

document.getElementById('calculate-btn').addEventListener('click', function () {

    let playersNumber = document.getElementById('selected-five-ol').children.length;

    const perPlayerCost = getInputFieldValueById('player-cost-field');

    if (typeof playersNumber === 'number' && playersNumber > 0 && typeof perPlayerCost === 'number' && perPlayerCost > 0) {
        const playerExpense = (playersNumber * perPlayerCost);

        let totalExpense = setTextElementValueById('total-player-cost', playerExpense);
    }
    else {
        alert('please select players or input valid number');
        return;
    }

})

//calculate total cost
document.getElementById('calculate-total-btn').addEventListener('click', function () {

    const managerCost = getInputFieldValueById('manager-cost-field');

    const coachCost = getInputFieldValueById('coach-cost-field');

    const playerExpense = getTextElementValueById('total-player-cost');

    if (typeof managerCost === 'number' && managerCost > 0 && typeof coachCost === 'number' && coachCost > 0 && typeof playerExpense === 'number' && playerExpense > 0) {
        const total = (managerCost + coachCost + playerExpense);

        let totalCost = setTextElementValueById('total-cost', total);
    }
    else {
        alert('please select players or input valid number');
        return;
    }

})



