/* 
 * Version vanilla javascript
 * Ici les instructions javascript ne seront pas transformées par Babel=>pas de JSX
 * Pas d'import de React ni de ReactDOM
 */
var my_div = document.getElementById('root');

function button (props) {
  return '<button type="submit">' + props.label + '</button>';
}

my_div.innerHTML ='\
  <form target="_blank" action="https://startpage.com/do/dsearch">\
    <div>Search</div>\
    <input name="q" className="input" />' + 
    button({ label: "Search" }) + 
  '</form>';

