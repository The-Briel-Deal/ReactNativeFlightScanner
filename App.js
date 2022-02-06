import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  Accelerometer,
  Barometer,
  Gyroscope,
  Magnetometer,
  MagnetometerUncalibrated,
  Pedometer,
} from 'expo-sensors';
export default function App() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0
  })
  // const [subscription, setSubscription] = useState(null);
  // const _subscribe = () => {
  //   setSubscription(
  //     Gyroscope.addListener(gyroscopeData => {
  //       setData(gyroscopeData);
  //     })
  //   );
  // };
  Gyroscope.setUpdateInterval(100);
  Gyroscope.addListener(gyroscopeData => {
    setData(gyroscopeData);
  });
  return (<View style={styles.centeredView}>
    <Pressable style={styles.button}>
      <View>
        <Text style={styles.text}>yaya is really cute</Text>
      </View>
    </Pressable>
  </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: "100px"
    backgroundColor: "red",
    height: "100%"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
