//long method using components with inheritace (mustenire)
class Welcome extends React.component{
    render() {
        return ( 
            <h1>
                { 
                    this.params.sayHello 
                    ? <div>Hello, { this.params.name } !</div>
                    : <div>Good bye!</div>
                }
                <div> { new Date().toISOString() } </div>
                <a href={ params.uri } className="me">Learn more about react</a>
            </h1>
        )
    }
}

const App = function() {
    return (
        <Welcome sayHello={true} uri='http://reactjs.org/' name="Shrvan"/>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root') 
)



// const Welcome = function(params) {  short  methos using components
//     return ( 
//         <h1>
//             { 
//             params.sayHello 
//                 ? <div>Hello, { params.name } !</div>
//                 : <div>Good bye!</div>
//             }
//             <div> { new Date().toISOString() } </div>
//             <a href={ params.uri } className="me">Learn more about react</a>
//         </h1>
//     )
// } 

// ReactDOM.render(
//     <Welcome sayHello={true} uri='http://reactjs.org/' name="Shrvan"/>,
//     document.getElementById('root') 
// )