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

import {Animated} from 'react-native';
import  {PanGestureHandler, State} from 'react-native-gesture-handler'

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

export default function Main()
{
  const cardTranslateY = new Animated.Value(0);
  let offset = 0;

  /*function gestureHandler(event){
    const {nativeEvent} = event
    console.log(nativeEvent);


  }*/
  /*const gestureHandler = Animated.event(
    [{
      nativeEvent: {translationY: cardTranslateY}
    }],
    {
      useNativeDriver: true,
      listener: () => console.log('teste')
    }

  );*/

  const onGestureHandler = Animated.event(
    [
      {
        nativeEvent:
        {
          translationY: cardTranslateY,
        }
      }
    ],

    {
        useNativeDriver: true,
        listener: (event) => {console.log(event.nativeEvent)},
        //useNativeDriver: false,
    },

  )

  const onHandlerStateChanged = (event) => {
    if(event.nativeEvent.oldState === State.ACTIVE)
    {
      let opened = false;
      const {translationY} = event.nativeEvent;
      offset += translationY;

      if(translationY >= 100)
      {
        opened = true;

      }
      else {
        cardTranslateY.setOffset(offset);
        cardTranslateY.setValue(0);
        offset = 0;
      }

      Animated.timing(cardTranslateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0
        cardTranslateY.setOffset(offset)
        cardTranslateY.setValue(0)
      } );


    }
  }

  return(
    <Container>
      <Header/>
      <Content>
        <Menu translateY={cardTranslateY}/>

        <PanGestureHandler
          onGestureEvent={onGestureHandler}
          onHandlerStateChange={onHandlerStateChanged}
          >
          <Card style={{
            transform:[
              {translateY: cardTranslateY.interpolate(
                {
                  inputRange: [-200, 0, 380],
                  outputRange: [-40, 0, 380],
                  extrapolate: 'clamp',
                }
              )}
            ]
          }}>
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
        </PanGestureHandler>
      </Content>
      <Tabs translateY={cardTranslateY}/>
    </Container>
  )
}
