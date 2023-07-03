import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {TodoContext} from '@contexts/TodoContext';

interface TodoProps {
  item: string;
}

type TodoContextType = {
  todos: string[];
  todosDone: string[];
  handleAddTodo: (todo: string) => void;
  handleMarkTodoDone: (todo: string) => void;
  handleDeleteTodo: (todo: string) => void;
};

const Todo: React.FC<TodoProps> = ({item}) => {
  const {todosDone, handleMarkTodoDone, handleDeleteTodo} = useContext(
    TodoContext,
  ) as TodoContextType;

  return (
    <View style={styles(todosDone, item).container}>
      <View style={styles(todosDone, item).wrap}>
        <TouchableOpacity onPress={() => handleMarkTodoDone(item)}>
          {todosDone.includes(item) ? (
            <View style={styles(todosDone, item).doneCheckbox}>
              <Image
                source={require('@assets/images/check.png')}
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
            source={require('@assets/images/trash.png')}
            style={styles(todosDone, item).trashImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
