class Counter extends React.Component {

    constructor() {

        super();

        this.state = {

            count: 0
        }
    }

    //Increment
    increment = () => {

        console.log(this);
        this.setState({

            count: this.state.count + 1
        })
    }

    //Decrement
    decrement = () => {

        console.log(this);
        this.setState({

            count: this.state.count - 1
        })
    }

    render() {

        return (

            <>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));