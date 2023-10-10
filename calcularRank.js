let victoryBalance = calculateRank(54,2)

let rank = setRank(victoryBalance)



function calculateRank(victory, defeat){
    return victory - defeat

}

function setRank(victoryBalance){
    
    if (victoryBalance >= 101){
        return "Imortal"
    } else if (victoryBalance >= 91){
        return "Lendário"
    } else if (victoryBalance >= 81){
        return "Diamante"
    } else if (victoryBalance >= 51){
        return "Ouro"
    } else if (victoryBalance >= 21){
        return "Prata"
    } else if (victoryBalance >= 11){
        return "Bronze"
    } else {
        return "Ferro"
    }
}

console.log("O herói tem saldo de " + victoryBalance + " vitórias e está no nível de " + rank)