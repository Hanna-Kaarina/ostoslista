import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [ostoslista, setOstoslista] = useState([]);
  const [input, setInput] = useState("");
  
  const add = () => {
    setOstoslista([...ostoslista, {key: input}]);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
          style={{width:100, backgroundColor: 'white', borderColor: 'gray', borderWidth:1, marginTop: 100}}
          onChangeText={text => setInput(text)}
          value={input}
        />
      <View style={styles.buttons}>
          <Button onPress={add} title="ADD" />
          <View style={{width: 20}} />
          <Button onPress={() => setOstoslista([])} title="CLEAR" />
      </View>
      <Text style={styles.text}>Shopping List</Text>
      <FlatList
          data={ostoslista}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 40
  },
  text: {
    color: 'blue',
    fontWeight: "bold",
    fontSize: 18
  }
});