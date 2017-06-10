'use strict'

var wyplata = 5000;
var premia= 2500;
var calkowitaWyplata;


calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

/*typ-łancuch zaków-string*/

var wyplataStr= 5000;
var premiaStr= "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr= wyplataStr + ' "dodajemy" '+ premiaStr;

console.log(calkowitaWyplataStr);

/*przy dodawaniu typów gdy jeden elemnt bedzie stringiem, to js zamieni wszytskie inne na stringi*/

/*przy dodawaniu typy liczbowe się zsumują, a typy string wyświetlą obok siebie bez spacji,doda nie liczbe a ciąg znaków*/


//metody dla zmiennych string//

var imieStudenta = " Michał";
console.log(imieStudenta.indexOf('c'));
console.log(imieStudenta);
console.log(imieStudenta.trim());

//komputer zawsze liczy od 0!!!!//


//typ logiczny- boolean//

var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog == true){
    console.log("Jest Smog");
}
else {
    console.log("nie ma smoga :)");
}


























