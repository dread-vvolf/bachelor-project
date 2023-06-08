import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

import Icon1 from '../../images/margherita.png'
import Icon2 from '../../images/pepperoni.png'
import Icon3 from '../../images/meat.png'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Signature Pizzas</ServicesH1>
        <ServicesWrapper>

            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Margherita Pizza</ServicesH2>
                <ServicesP>Our classic pizza features San Marzano tomatoes, fresh mozzarella, basil, and a drizzle of extra-virgin olive oil</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Pepperoni Pizza</ServicesH2>
                <ServicesP>Our pepperoni pizza features spicy pepperoni, San Marzano tomatoes, fresh mozzarella, and a sprinkle of Parmesan cheese</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Meat Lover's Pizza</ServicesH2>
                <ServicesP>This hearty pizza is topped with pepperoni, Italian sausage, bacon, and meatballs, along with San Marzano tomatoes and fresh mozzarella</ServicesP>
            </ServicesCard>

        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
