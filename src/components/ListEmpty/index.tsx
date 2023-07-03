import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Image
        source={require('../../assets/images/clipboard.png')}
        style={styles.clipboard}
        resizeMode="contain"
      />
      <Text style={styles.noTodosText}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.createTodosText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};

export default ListEmpty;
