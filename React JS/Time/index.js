class Time extends React.Component {

    constructor() {

        super();

        this.state = {

            time: new Date().toLocaleTimeString()
        }
    }

    render() {

        return (

            <>
                <h1>Time is {this.state.time}</h1>

            </>
        )
    }

}

ReactDOM.render(<Time />, document.getElementById('root'))