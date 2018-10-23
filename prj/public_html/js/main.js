/*
 * c1
 *
class App extends React.Component {
    render() {
        return (<h1>Hello world!!</h1>);
    }
};
ReactDOM.render(<App />, document.getElementById('root'));
*/

var rootElt = document.getElementById('root');

/*
 * c2
 */
// Component Hello (Virtual DOM REACT vs DOM element)

function Hello(x) {
    return <h1>Hello, {x.what}</h1>;
}
var reactElt = <Hello what = "world!!"/>;
var reactElt2 = Hello({what: "world!"});

// Compare reactElt and reactElt2:
console.log("reactElt: ", reactElt);
console.log("reactElt2: ", reactElt2);


ReactDOM.render(reactElt, rootElt);

////////////////////////////////////////////////////////////////////////////////
/* version sans JSX:
 function Hello (x) {
 const chd =     "Hello"  + x.what;
 
 return React.createElement(
 "h1",
 null,
 chd
 );
 }
 
 ReactDOM.render(React.createElement(Hello, { what: "world!" }), rootElt);
*/
 ///////////////////////////////////////////////////////////////////////////////