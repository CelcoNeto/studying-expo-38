import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Animated from 'react-native-animatable';

interface Props {
  animation?: string;
  bgcolor: string;
  title: string;
  month: string;
  background: any;
}
const Scroll: React.FC<Props> = (props) => {
  return (
    <Animated.View
      animation={props.animation}
      duration={1200}
      style={[styles.memo1, { backgroundColor: props.bgcolor }]}
    >
      <View style={styles.insideone}>
        <Text style={{ fontSize: 20, color: '#fff', width: 100 }}>
          {props.title}
        </Text>
        <Text style={{ color: '#fff', fontSize: 14, marginVertical: 5 }}>
          {props.month}
        </Text>
      </View>
      <View style={styles.insidetwo}>
        <ImageBackground
          source={props.background}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <TouchableOpacity style={styles.insidethree}>
        <Image source={require('../../../assets/i_icon.png')} />
      </TouchableOpacity>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  memo1: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  insideone: {
    flex: 1,
    padding: 10,
  },
  insidetwo: {
    flex: 2,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insidethree: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 10,
  },
});
export default Scroll;
