import React, {Component} from 'react';
import styled from 'styled-components';
import homeBg from '../../images/home.jpg';

class HomeSection extends Component{

    render(){
        const Section = styled.section`
            position:relative;
            height:100vh;
            width:100vw;
            background-size:cover;
            background-repeat: no-repeat;
            background-position: 100% 100%;
        `
        return (
            <Section>
                {this.props.children}
            </Section>
        )
    }

}

export default HomeSection;