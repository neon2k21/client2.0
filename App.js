import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import ObjectCard from './components/card_of_object';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Шапка профиля */}
      <View className="bg-red-500 w-full rounded-b-lg" style={{height:widthPercentageToDP(20)}}>
        <TouchableOpacity>
            <Text style={{marginHorizontal:widthPercentageToDP(10),paddingTop:widthPercentageToDP(3)}} className="text-2xl">
              ФИО
            </Text>
            <Text style={{marginHorizontal:widthPercentageToDP(10)}} className="text-base">
            Перейти в профиль 
            </Text>
        </TouchableOpacity>
        
      </View>
            {/* карусель объектов */}

      <View style={{paddingTop:widthPercentageToDP(50)}}>
        <View className="flex-row bg-red-500" style={{width: widthPercentageToDP(95), height:widthPercentageToDP(10), margin:widthPercentageToDP(2),alignItems:'center'}}>
        <Text className="text-2xl" style={{}}>
          Объекты
        </Text>
        <TouchableOpacity>
          <Text className="text-xl" style={{right:-widthPercentageToDP(60)}}>
          Ещё
        </Text>
        </TouchableOpacity>
        
        </View>
        
          <ObjectCard/>
          <FlatList>

          </FlatList>

      </View>
            {/*карусель заявок */}
            <FlatList>

            </FlatList>
      <View>
        
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:widthPercentageToDP(10),
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
