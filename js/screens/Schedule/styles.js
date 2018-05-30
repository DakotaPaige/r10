import { StyleSheet } from 'react-native';
import colourStyles from '../../config/styles';

const styles = StyleSheet.create({
  location: {
    color: colourStyles.mediumgray,
    fontFamily: 'Montserrat'
  },
  singleEvent: {
    paddingBottom: 10,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Montserrat'
  },
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: colourStyles.mediumgray
  },
  sectionHeader: {
    fontWeight: 'bold',
    backgroundColor: colourStyles.mediumgray,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: 'Montserrat'
  }
});

export default styles;
