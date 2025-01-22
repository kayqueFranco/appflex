/**
 * APP - Flex
 * @Author Kayque Franco
 */

// declaração de variaveis 
let etanol, gasolina 

function calcular() {
    //entrada de dados 
    etanol= frmFlex.inputEtanol.value
    gasolina= frmFlex.inputGasolina.value
    //console.log(etanol)
    //console.log(gasolina)
    if(etanol <=0.7 * gasolina) {
        document.getElementById('status').src = "img/etanol.png"
    }
    else {
        document.getElementById('status').serc = "img/gasolina.png"
    }
    return false
}