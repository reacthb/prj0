/* 
 * Version vanilla javascript
 * Ici les instructions javascript ne seront pas transformées par Babel=>pas de JSX
 * Pas d'import de React ni de ReactDOM
 */
function Hello(x) {
    return "<h1>Hello, " + x.what + "</h1>";
}
var my_div = document.getElementById('root');
my_div.innerHTML = Hello({what: "world!"});



