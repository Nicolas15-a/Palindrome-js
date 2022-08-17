


//Logic Nico
let palindromo="anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";

function checkpalindromo(palindromo){
    let arrayPal=palindromo.split(""); //split is for separete in little parts
    let reversePal=arrayPal.reverse();//reverse is for reverse orden of elements
    
    return palindromo==reversePal.join("");
}
const viewpalindrome = (palindromo) => {
    let size = 3;
    let view = [];
  
    for (let i = 0; i < palindromo.length; i++) {
      let catn = palindromo.substr(i, palindromo.length);
    
      for (let y = catn.length; y >= 0; y--) {
        let palinFound = catn.substr(0, y);
  
        if (checkpalindromo(palinFound)) {
          if (palinFound.length > size) {
            view.push(palinFound);
          }
        }
      }
    }
    return view;
  };
  console.log(viewpalindrome(palindromo))