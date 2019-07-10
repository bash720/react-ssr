import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    font-size: 40px;
    background: linear-gradient(20deg, rgb(219,112,147), #daa357);
`;

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showmessage: false,
            message: 'I am clicked'

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //code here
        console.log("open ")
        this.state({showmessage: true});
      }


    render () {
        return (
            <AppContainer>
               This is Server Side Rendering! Keep improving
            </AppContainer>
        )
    }
}

export default App;