import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface Props {
  move: any;
  screenchange?: any;
  image: any;
  title: string;
  subtitle: string;
  completed: string;
}
const Card: React.FC<Props> = (props) => {
  return (
    <Animatable.View
      animation={props.move}
      duration={1500}
      style={styles.cardone}
    >
      <TouchableOpacity style={styles.box1} onPress={props.screenchange}>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: 'rgba(255, 190, 134, 0.2);',
            height: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={props.image} />
        </View>
      </TouchableOpacity>
      <View style={styles.box2}>
        <Text style={{ fontSize: 20, color: '#2D2D2D', letterSpacing: -0.9 }}>
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#2cd0da',
            letterSpacing: -0.5,
            paddingVertical: 5,
          }}
        >
          {props.subtitle}
        </Text>
      </View>
      <View style={styles.box3}>
        <View
          style={{
            height: '100%',
            width: '70%',
            borderWidth: 1,
            borderColor: '#2cd0da',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#00a8ef' }}>
            {props.completed}
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};
const styles = StyleSheet.create({
  cardone: {
    flex: 1,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  cardtwo: {
    flex: 1,
  },
  box1: {
    flex: 1,
    paddingHorizontal: 10,
  },
  box2: {
    flex: 1,
  },
  box3: {
    flex: 1,
  },
});

export default Card;
