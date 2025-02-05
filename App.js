import {useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useFetch } from './hooks/useFetch';

const App = () => {

  const { getData } = useFetch();

  const getTemperatura = async() => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=19.00641531494&lon=-98.1962438252823&appid=1db9c63057ee6365d85cf319415ad1e4&units=metric&lang=sp';
    const datos = await getData(url);
    if (!datos.error)
      console.log( datos );
    else 
      console.log( datos );
  }


  useEffect( () => {
    getTemperatura();
  }, []);

  return (
    <SafeAreaView style={ styles.mainContainer}>
      <Text>App del Clima</Text>
      <Text style={ styles.locationText}>Puebla, Pue.</Text>
      <Text style={ styles.tempText}>17°</Text>
      <Text style={ styles.generalText}>Soleado</Text>
      <Text>ICONO </Text>
      <Text style={ styles.generalText}>ICA: 31</Text>
      <Text style={ styles.generalText}>Velocidad del viento: </Text>
      <Text style={ styles.generalText}>Presión: 2</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  tempText: {
    fontSize: 150,
  },
  locationText: {
    fontSize: 40,
  },
  generalText: {
    fontSize: 20,
    marginVertical: 10,
  },
});
