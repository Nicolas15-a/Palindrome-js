


//Logic Nico
let palindromo="anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero"

function checkpalindromo(palindromo){
    let arrayPal=palindromo.split(""); //split is for separete in little parts
    let reversePal=arrayPal.reverse();//reverse is for reverse orden of elements
    
    return palindromo==reversePal.join("");
}
const viewpalindrome = (string) => {
    let size = 3;
    let view = [];
  
    for (let i = 0; i < string.length; i++) {
      let catn = string.substr(i, string.length);
  

      while ( catn>3 ){
        let SubsString = catn.substr(0, j);
  
        if (revPalindrome(SubsString)) {
          if (SubsString.length > length) {
            result.push(SubsString);
          }
        }
      }

      for (let y = catn.length; y >= 0; y--) {
        let SubsString = catn.substr(0, y);
  
        if (revPalindrome(SubsString)) {
          if (SubsString.length > size) {
            view.push(SubsString);
          }
        }
      }
    }
    return view;
  };