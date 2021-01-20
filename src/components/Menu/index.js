import React from 'react';
import {Button, Text} from 'react-native';
import {
Container,
Code,
Nav,
NavItem,
NavText,
SignOutButton,
SignOutButtonText,
} from './styles';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons'

const navItems = [
  {
    name: 'help-outline',
    text: 'Ajude-me'
  },

  {
    name: 'person-outline',
    text: 'Perfil'
  },

  {
    name: 'credit card',
    text: 'Configurar cartão'
  },

  {
    name: 'smartphone',
    text: 'Configuraçoes do App'
  },
]

export default function Menu({ translateY }){
  return(
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 1]
      })
    }}>
      <Code>
        <QRCode
          value='https://www.youtube.com/watch?v=DDm0M_rZLJo&t=2050s'
          size={80}
          color='#FFF'
          backgroundColor='#8B10AE'
        />
      </Code>

      <Nav>
        {
          navItems.map(navItem => (
            <NavItem key={navItem.text}>
              <Icon name={navItem.name} size={20} color='#FFF'/>
              <NavText>{navItem.text}</NavText>
            </NavItem>
          ))
        }
      </Nav>

      <SignOutButton>
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>

    </Container>
  )
}
