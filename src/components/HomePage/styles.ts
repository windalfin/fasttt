import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 10,
  },
  chart: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  chartContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    position: 'absolute',
    top: '40%',  // Adjust these percentages to position the text correctly
    fontSize: 16,
    fontWeight: 'bold',
  },
  stageText: {
    position: 'absolute',
    top: '55%',  // Adjust these percentages to position the text correctly
    fontSize: 14,
  },
});

export default styles;
