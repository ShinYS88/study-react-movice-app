import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component {

    state = {
        count: 0,
        isLoading: true
    }

    componentDidMount() {
        console.log("mount");

        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 3000);
    }

    componentDidUpdate() {
        console.log("update");
    }

    componentWillUnmount() {
        // alert("bbb");
    }

    add = () => {
        // this.setState({ count: this.state.count + 1 });
        this.setState(current => ({ count: current.count + 1 }));
    }
    minus = () => {
        // this.setState({ count: this.state.count - 1 });
        this.setState(current => ({ count: current.count - 1 }));
    }

    render() {
        console.log("render");
        const { isLoading } = this.state;
        return (
            <div>
                {isLoading ? "Loading..." : "Load!"}

                <h1>class Componet! Count : {this.state.count}</h1>

                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>

            </div>
        );
    }
}


export default App;