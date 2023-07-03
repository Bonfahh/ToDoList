import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  topContainer: {
    backgroundColor: '#0D0D0D',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {width: '30%'},
  bottomContainer: {
    height: '80%',
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
  },
  inputWrap: {
    width: '80%',
    flexDirection: 'row',
    height: 55,
    top: -27.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: '#262626',
    borderColor: '#0D0D0D',
    borderWidth: 1,
    color: '#f2f2f2',
    paddingLeft: 15,
    fontSize: 18,
    height: '100%',
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    width: '17.5%',
    height: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonImage: {
    width: '30%',
  },
  todosContainer: {
    width: '90%',
  },
  todosInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5%',
  },
  infoWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createdText: {
    fontWeight: 'bold',
    color: '#4EA8DE',
    fontSize: 16,
    marginRight: 10,
  },
  numberWrap: {
    backgroundColor: '#333333',
    borderRadius: 10,
  },
  numberText: {
    color: '#d9d9d9',
    paddingHorizontal: 7.5,
    paddingVertical: 2.5,
    fontWeight: 'bold',
  },
  doneText: {
    fontWeight: 'bold',
    color: '#8284FA',
    fontSize: 16,
    marginRight: 10,
  },
  disabled: {
    opacity: 0.6,
  },
});
