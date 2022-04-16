// let root = document.getElementById('root');

// let hTag = document.createElement('h1');
// hTag.innerText = 'Hello';

// root.appendChild(hTag);

// let ele = React.createElement('h1', {

//     children: ['Hello']
// });

// ReactDOM.render(ele, root);

//JSX

//Props -> Properties = {prop1,prop2,...}
function Child({ name = 'Ron', marks, age }) {

    return (

        <>
            <h1>Hello {name}</h1>
            <h2>{marks}</h2>
            <h3>{age}</h3>
        </>
    )
}

function Child2({ place }) {

    return (
        <h1>Goodbye {place}</h1>
    )
}

function Parent() {

    return (

        <>
            <Child name='Harsh' age='13' marks='98' />
            <Child name='Amit' />
            <Child2 place='New York' />
        </>
    )
}

ReactDOM.render(<Parent />, document.getElementById("root"));