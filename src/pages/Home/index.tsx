import React, {useContext, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Todo from '@components/Todo';
import ListEmpty from '@components/ListEmpty';
import {styles} from './styles';
import {TodoContext} from '@contexts/TodoContext';

type TodoContextType = {
  todos: string[];
  todosDone: string[];
  handleAddTodo: (todo: string) => void;
  handleMarkTodoDone: (todo: string) => void;
  handleDeleteTodo: (todo: string) => void;
};

const Home = () => {
  const {todos, todosDone, handleAddTodo} = useContext(
    TodoContext,
  ) as TodoContextType;

  const [todoInput, setTodoInput] = useState<string>('');

  const addTodo = () => {
    handleAddTodo(todoInput.trim());
    setTodoInput('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('@assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputWrap}>
          <TextInput
            value={todoInput}
            onChangeText={setTodoInput}
            placeholder="Adicione uma nova tarefa"
            style={styles.input}
          />
          <TouchableOpacity
            disabled={!todoInput}
            onPress={addTodo}
            style={
              !todoInput
                ? [styles.addButton, styles.disabled]
                : styles.addButton
            }>
            <Image
              source={require('@assets/images/plus.png')}
              style={styles.addButtonImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.todosContainer}>
          <View style={styles.todosInfo}>
            <View style={styles.infoWrap}>
              <Text style={styles.createdText}>Criadas</Text>
              <View style={styles.numberWrap}>
                <Text style={styles.numberText}>{todos.length}</Text>
              </View>
            </View>
            <View style={styles.infoWrap}>
              <Text style={styles.doneText}>Concluídas</Text>
              <View style={styles.numberWrap}>
                <Text style={styles.numberText}>{todosDone.length}</Text>
              </View>
            </View>
          </View>

          <FlatList
            data={todos}
            ListEmptyComponent={<ListEmpty />}
            renderItem={({item}) => <Todo item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
