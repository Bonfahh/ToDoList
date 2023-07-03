import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface TodoProps {
  todosDone: string[];
  item: string;
  handleMarkTodoDone: (todo: string) => void;
  handleDeleteTodo: (todo: string) => void;
}

const Todo: React.FC<TodoProps> = ({
  todosDone,
  item,
  handleMarkTodoDone,
  handleDeleteTodo,
}) => {
  return (
    <View style={styles(todosDone, item).container}>
      <View style={styles(todosDone, item).wrap}>
        <TouchableOpacity onPress={() => handleMarkTodoDone(item)}>
          {todosDone.includes(item) ? (
            <View style={styles(todosDone, item).doneCheckbox}>
              <Image
                source={require('../../assets/images/check.png')}
                style={styles(todosDone, item).doneImage}
                resizeMode="contain"
              />
            </View>
          ) : (
            <View style={styles(todosDone, item).checkbox} />
          )}
        </TouchableOpacity>
        <Text style={styles(todosDone, item).todoText}>{item}</Text>
        <TouchableOpacity onPress={() => handleDeleteTodo(item)}>
          <Image
            source={require('../../assets/images/trash.png')}
            style={styles(todosDone, item).trashImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
