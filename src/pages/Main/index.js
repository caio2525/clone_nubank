import React from 'react';
import {Container,
Content,
Card,
CardHeader,
CardContent,
CardFooter,
Title,
Description,
Annotation,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

export default function Main()
{
  return(
    <Container>
      <Header/>
      <Content>
        <Card>
          <CardHeader>
            <Icon name='attach-money' size={30} color='#665'/>
            <Icon name='visibility-off' size={30} color='#665'/>
          </CardHeader>

          <CardContent>
            <Title>Saldo Disponível</Title>
            <Description>R$ 195.329,89</Description>
          </CardContent>

          <CardFooter>
            <Annotation>Transferência de R$ 568,00 recebida de Caio Fernandes às 18:00hrs</Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs/>
    </Container>
  )
}
