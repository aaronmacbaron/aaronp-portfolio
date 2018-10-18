import React from 'react'
import { Link } from 'gatsby'
import HomeSection from '../components/HomeSection/HomeSection';
import Card from '../components/Card/Card';
import CardContainer from '../components/CardContainer/CardContainer';



const IndexPage = () => (
    <HomeSection>
      <CardContainer>
      <Card dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
            header="Canyons"
            bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
       <Card dataImage="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
            header="Beaches"
            bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
        <Card dataImage="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
          header="Trees"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
       <Card dataImage="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="
            header="Lakes"
            bodyText="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
      </CardContainer>
    </HomeSection>

)

export default IndexPage
