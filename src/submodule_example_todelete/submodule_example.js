import React, { Component } from 'react'

class submodule_example extends Component {

    state = {
        number: 0,
    }

    handleClick = () => {
        this.setState({number: this.state.number + 1})
    }

    render(){
        return(
            <div>
                <p>This text is within the submodule</p>
                <p>Number: {this.state.number}</p>
            </div>
        )
    }
}

export default submodule_example