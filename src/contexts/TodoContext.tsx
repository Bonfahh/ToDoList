import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

type TodoContextType = {
  todos: string[];
  todosDone: string[];
  handleAddTodo: (todo: string) => void;
  handleMarkTodoDone: (todo: string) => void;
  handleDeleteTodo: (todo: string) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [todos, setTodos] = useState<string[]>([]);
  const [todosDone, setTodosDone] = useState<string[]>([]);

  const retrieveStorage = async () => {
    const todosData = await AsyncStorage.getItem('@todosData');
    const todosDoneData = await AsyncStorage.getItem('@todosDoneData');

    if (todosData !== null && todosDoneData !== null) {
      setTodos(JSON.parse(todosData));
      setTodosDone(JSON.parse(todosDoneData));
    }
  };

  useEffect(() => {
    retrieveStorage();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      const jsonValue = JSON.stringify(todos);
      await AsyncStorage.setItem('@todosData', jsonValue);
    };

    if (todos && !initialLoad) {
      saveTodos();
    }
  }, [initialLoad, todos]);

  useEffect(() => {
    const saveTodosDone = async () => {
      const jsonValue = JSON.stringify(todosDone);
      await AsyncStorage.setItem('@todosDoneData', jsonValue);
    };

    if (todosDone && !initialLoad) {
      saveTodosDone();
    }
  }, [initialLoad, todosDone]);

  const handleAddTodo = useCallback((todo: string) => {
    setInitialLoad(false);
    setTodos(prev => [...prev, todo]);
  }, []);

  const handleMarkTodoDone = useCallback(
    (todo: string) => {
      setInitialLoad(false);
      if (todosDone.includes(todo)) {
        setTodosDone(prev => prev.filter(t => t !== todo));
      } else {
        setTodosDone(prev => [...prev, todo]);
      }
    },
    [todosDone],
  );

  const handleDeleteTodo = useCallback(
    (todo: string) => {
      setInitialLoad(false);
      if (todosDone.includes(todo)) {
        setTodosDone(prev => prev.filter(t => t !== todo));
      }
      setTodos(prev => prev.filter(t => t !== todo));
    },
    [todosDone],
  );

  const values = useMemo(
    () => ({
      todos,
      todosDone,
      handleAddTodo,
      handleDeleteTodo,
      handleMarkTodoDone,
    }),
    [todos, todosDone, handleAddTodo, handleDeleteTodo, handleMarkTodoDone],
  );

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
