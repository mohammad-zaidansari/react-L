import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const ReactElement =  {     React does't know what are types like type, props, children. 
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit Google"
// }

//Right Syntax to write react Element
const AreactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to Visit gooGle'
)


function MyApp() {
    return(
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (<a href="https://google.com" target="_blank">Visit Google </a>

)
    

ReactDOM.createRoot(document.getElementById('root')).render(
   <App/>
)
