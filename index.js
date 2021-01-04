'use strict';
let min , max ,ND , NF, i,j;
min = 1;
max = parseFloat(window.prompt('introduire le nombre de faces'));
let res;
function getRandomInteger(min,max)
 {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
res = getRandomInteger(min,max);
ND = parseFloat(window.prompt('introduire le nombre de Dé'));
var tabValeurs = [ND];
var tabFaces = [NF];
NF = max;
function lancerDesNombre(ND,NF){
    document.write('<table> <thead> <tr> <th colspan=',ND,'> Vous avez choisis de jouer avec ',ND,' Dé(s) de ',NF, ' Face(s) Chacune); </th> </tr> </thead> <tbody> <tr>')
      for (i = 1; i <= ND; i++){
        tabValeurs.push(getRandomInteger(min,max));
        document.write('<td><img src="dice',tabValeurs[i],'.png" alt=""><h2>',tabValeurs[i],'</h2><h3> Dé N°: ',i,'</h3></td>')
      }
    document.write('</tr> </tbody> </table>')
}
lancerDesNombre(ND,NF);