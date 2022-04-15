// let root = document.getElementById('root');

// let hTag = document.createElement('h1');
// hTag.innerText = 'Hello';

// root.appendChild(hTag);

// let ele = React.createElement('h1', {

//     children: ['Hello']
// });

// ReactDOM.render(ele, root);

//JSX
function Child() {

    return (

        <h1>Hello</h1>
    )
}

function Child2() {

    return (

        <h1>Goodbye</h1>
    )
}

function Main() {

    return (

        <>
            <Child />
            <Child />
            <Child2 />
        </>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));