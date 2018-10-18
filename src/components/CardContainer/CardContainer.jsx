import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    padding: 40px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

class CardContainer extends Component{


    render(){
        return(
            <Wrap>
                {this.props.children}
            </Wrap>
        )
    }

}

export default CardContainer;