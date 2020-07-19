import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Card from '../../components/card';
import Day from '../../components/day';

interface Props {
  navigation: any;
}
const Home: React.FC<Props> = (props: Props) => {
  const [state, setState] = useState({
    activeState: 'rgba(255, 255, 255, 0.291821)',
  });
  const onChange: Function = () => props.navigation.navigate('Mission');
  return (
    <View style={styles.container}>
      <View style={styles.containerone}>
        <View style={styles.boxone} />
        <View style={styles.boxtwo}>
          <Text style={styles.name}>Olá, Celço</Text>
          <Text style={styles.subtitle}>Aqui está sua saúde</Text>
        </View>
        <View style={styles.boxthree}>
          <ImageBackground
            source={require('../../../assets/graphone.png')}
            style={{ width: 360, height: '100%' }}
          />
        </View>
        <View style={styles.boxfour}>
          <Day dayname="Dom" />
          <Day dayname="Seg" />
          <Day dayname="Ter" />
          <Day dayname="Qua" />
          <Day dayname="Qui" active={state.activeState} />
          <Day dayname="Sex" />
          <Day dayname="Sab" />
        </View>
      </View>
      <View style={styles.containertwo}>
        <View style={styles.line}></View>
        <View style={styles.progress}>
          <Text style={styles.textone}>Meu progresso</Text>
        </View>
        <View style={styles.cards}>
          <Card
            move="bounceInLeft"
            image={require('../../../assets/checkbox.png')}
            title="Missão"
            subtitle="85% completo"
            completed="85%"
            screenchange={() => onChange()}
          />
          <Card
            move="bounceInLeft"
            image={require('../../../assets/checktodo.png')}
            title="Completo"
            subtitle="5 completas de 10 tarefas"
            completed="75%"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#2cd0da',
  },
  containerone: {
    flex: 1.5,
    display: 'flex',
  },
  containertwo: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  boxone: {
    flex: 1,
  },
  boxtwo: {
    flex: 0.8,
    marginHorizontal: 35,
  },
  boxthree: { flex: 2.5 },
  boxfour: { flex: 0.5, color: '#fff', flexDirection: 'row' },
  name: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
  },
  line: {
    width: 66,
    height: 4,
    backgroundColor: '#2cd0da',
    borderRadius: 2,
    marginVertical: 25,
    left: 150,
  },
  progress: {
    left: 50,
  },
  textone: {
    fontSize: 20,
    color: '#2D2D2D',
    letterSpacing: -0.5,
  },
  cards: {
    flex: 1,
    display: 'flex',
    marginTop: 10,
    marginHorizontal: 30,
  },
});
export default Home;
