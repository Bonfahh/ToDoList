import {StyleSheet} from 'react-native';

export const styles = (todosDone: string[], item: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#262626',
      borderRadius: 10,
      borderColor: '#333333',
      borderWidth: todosDone.includes(item) ? 0 : 1,
      marginBottom: '5%',
    },
    wrap: {
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderColor: '#4EA8DE',
      borderWidth: 2,
    },
    doneCheckbox: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#5E60CE',
      justifyContent: 'center',
      alignItems: 'center',
    },
    doneImage: {
      width: '50%',
    },
    todoText: {
      color: todosDone.includes(item) ? '#808080' : '#F2F2F2',
      fontSize: 16,
      width: '90%',
      textDecorationLine: todosDone.includes(item) ? 'line-through' : 'none',
      textAlign: 'center',
    },
    trashImage: {
      width: 20,
      height: 20,
    },
  });
