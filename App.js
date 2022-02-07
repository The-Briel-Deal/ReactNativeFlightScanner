import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { useState } from 'react';
import { ScrollView, Button, Pressable, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  const [buttonBgc, setButtonBgc] = useState("black");
  const [image, setImage] = useState('https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg')
  const [textField, setTextField] = useState('')
  return (
    <PaperProvider>
      <ScrollView
        style={{

        }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{
              uri: image,
            }}
            style={{
              width: 200,
              height: 200,
              borderRadius: 50,
              marginTop: 50,
              borderWidth: 10

            }}
          />
        </View>
        <View style={styles.centeredView}>
          <TextInput
            defaultValue='asdfasdf'
            textAlign='left'
            placeholder="Put a link in me!!"
            style={{
              width: '50%',
              borderColor: 'black',
              margin: 20,
              borderWidth: 5,
              borderStyle: 'solid',
              borderRadius: 5,
              // border

            }}
            value={textField}
            onChangeText={(ct) => {
              setTextField(ct)
            }} />
          <Pressable
            style={{ ...styles.button, backgroundColor: buttonBgc, borderRadius: 5 }}
            onPressIn={() => {
              setButtonBgc("grey")
            }}
            onPressOut={() => {
              setButtonBgc("black")
            }}
            onPress={() => {
              setImage(textField)
            }}
          >
            <View>
              <Text style={{ ...styles.text, color: "white" }}>Change Picture!</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView >
    </PaperProvider >
  );
}

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: "100px"
    height: "50%"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
