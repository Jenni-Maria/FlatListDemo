import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DATA from './DATA';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import Row from './components/Row';

export default function App() {

/*function renderRow({item}) {
  return <Text>{item.lastname}</Text>
}

const renderRow = ({item}) => (
  <Text>{item.lastname}</Text>
)*/

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data= {DATA}
          renderItem={({item}) => ( //tämä sama asia kuin ylempänä
            <Row item={item} />
          )}      
        >
        </FlatList>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    marginLeft: 20,

  },
});
