let saldoVitorias
let nivelH = nivelHeroi()
console.log("Calculadora de partidas ranked")
console.log(" ")
function nivelHeroi(vitorias, derrotas){
vitorias = 27
derrotas = 4
saldoVitorias = vitorias - derrotas
	if (saldoVitorias <= 10){
    nivel = 'Ferro'
	}
    else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = 'Bronze'
    }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = 'Prata'
    }
    else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = 'Ouro'
    }
    else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = 'Diamante'
    }
    else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    nivel = 'Lendário'
    }
    else if (saldoVitorias >= 101){
    nivel = 'Imortal'
    }
}
console.log('O Herói tem de saldo: ' + saldoVitorias + ', está no nível de ' + nivel)