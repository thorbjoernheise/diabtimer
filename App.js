import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const handleButtonClick = () => {
    setTimer(259200); // 3 days in seconds
  };

  const getTimeString = () => {
    if (timer < 86400) {
      const hours = Math.floor(timer / 3600);
      const minutes = Math.floor((timer % 3600) / 60);
      const seconds = Math.floor(timer % 60);
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      const days = Math.floor(timer / 86400);
      return `${days} Tagen`;
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Katheter wechseln in</Text>
      <Text style={styles.text}>{getTimeString()}</Text>
      <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
        <Text style={styles.buttonText}>Gewechselt</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#393646",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#F4EEE0',
    fontFamily: 'OpenSans',
  },
  button: {
    backgroundColor: '#6D5D6E',
    borderRadius: 75, // half of the button's width and height to make it a circle
    padding: 15,
    margin: 10,
  },
  buttonText: {
    color: '#F4EEE0',
    fontFamily: 'OpenSans',
    fontSize: 18,
  },
});
