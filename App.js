import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Image source={require("./assets/logo.png")}/>
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'center',
    paddingTop: StatusBar.currentHeight,
  
  },
});
