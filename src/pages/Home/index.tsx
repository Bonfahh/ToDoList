import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Todo from '../../components/Todo';
import ListEmpty from '../../components/ListEmpty';
import {styles} from './styles';

const Home = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todosDone, setTodosDone] = useState<string[]>([]);
  const [todoInput, setTodoInput] = useState<string>('');

  const handleAddTodo = () => {
    setTodos(prev => [...prev, todoInput]);
    setTodoInput('');
  };

  const handleMarkTodoDone = (todo: string) => {
    if (todosDone.includes(todo)) {
      setTodosDone(prev => prev.filter(t => t !== todo));
    } else {
      setTodosDone(prev => [...prev, todo]);
    }
  };

  const handleDeleteTodo = (todo: string) => {
    if (todosDone.includes(todo)) {
      setTodosDone(prev => prev.filter(t => t !== todo));
    }
    setTodos(prev => prev.filter(t => t !== todo));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
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
          <TouchableOpacity onPress={handleAddTodo} style={styles.addButton}>
            <Image
              source={require('../../assets/images/plus.png')}
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
            renderItem={({item}) => (
              <Todo
                item={item}
                todosDone={todosDone}
                handleDeleteTodo={handleDeleteTodo}
                handleMarkTodoDone={handleMarkTodoDone}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
