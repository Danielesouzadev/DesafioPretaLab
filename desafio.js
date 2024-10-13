/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze
 de um país nas Olimpíadas e calcule o total de medalhas. 
Quando escrever 'sair', o programa deverá encerrar 
e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/



alert ("Bem-vindo ao Ranking de Medalhas das Olimpíadas\n\n É necessário informar a quantidade de medalhas para todos os países.\n Caso o país não tenha medalhas por favor digite '0'  ")

function calcularMedalhasPais (){
    let paises = [];
    let medalhasOuro =[];
    let medalhasPrata = [];
    let medalhasBronze = [];
    let totalDeMedalhas = [];

    var rankingMedalhas = [];


    while (true){
        let pais = prompt ("Digite o nome do País (ou 'sair' para terminar):");
        if (pais != "" ){
            if (pais.toLowerCase() === "sair") {
                break;
                }

            paises.push(pais);

        } 
        else {
            alert("É necessário digitar um País.")
            break;

        }
          
        let medalhaOuro = parseInt(prompt(`Quantas medalhas de ouro teve o(a) ${pais}?`));
        let medalhaPrata = parseInt(prompt(`Quantas medalhas de prata teve o(a) ${pais}?`));
        let medalhaBronze = parseInt(prompt(`Quantas medalhas de bronze teve o(a) ${pais}?`));
        
        
        if (!isNaN(medalhaOuro && medalhaPrata && medalhaBronze)){
            medalhasOuro.push(medalhaOuro);
            medalhasPrata.push(medalhaPrata);
            medalhasBronze.push(medalhaBronze);
        }
        else {
            alert("Você deixou o quadro de medalhas em branco.\n O ranking será finalizado.")
            break
        }
    }

    if (paises.length > 0) {
        for (let i = 0; i < paises.length; i++){
            let total = medalhasOuro[i] + medalhasPrata[i] + medalhasBronze[i]
            totalDeMedalhas.push(total);
            rankingMedalhas[i] = {"pais":paises[i],"total":totalDeMedalhas[i]};

        }

        rankingMedalhas.sort(((a, b) => b.total - a.total)) // Não conhecia a função .sort, pesquisei no google a função para ordenar o ranking.

        let rankingMensagem = '';
        rankingMedalhas.forEach ((item) => {                     // Não conhecia a função .forEach, pesquisei no google a função para listar o ranking no alert.
            rankingMensagem += `#${item.pais}: ${item.total} medalhas\n`;

        });

       alert("#Ranking de medalhas:\n" + rankingMensagem);

    }

}

calcularMedalhasPais ();

