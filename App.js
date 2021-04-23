import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Text,
  View,
  Keyboard,
  Alert,
  TouchableWithoutFeedback
} from 'react-native';
import styleWeather from './styles/styleWeather';
import Form from './components/form';
import Weather from './components/weather';


export default function App() {
  // datos de consulta
  const [form, setForm] = useState({ city: '', country: '' });
  // Verificacion de datos
  const [flag, setFlag] = useState(false);
  // Guardar el resultado de la llamada de la bandera
  const [ansWeather, setAnsWeather] = useState({});
  // Descomposicion del state form
  const { city, country } = form;

  // Color de fondo en base a temperatura
  const [bgColor, setBgColor] = useState('#e0e0e0');
  const appBgColor = { backgroundColor: bgColor };

  // Uso de useEffect para hacer uso de la llamada.
  useEffect(() => {
    const getWeather = async () => {
      if (flag) {
        const apiKey = '072c2b74dfc7ec25466bbaa7298a8a6a';
        const urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=es&units=metric&appid=${apiKey}`;

        try {
          const answer = await fetch(urlAPI);
          const weatherData = await answer.json();
          setAnsWeather(weatherData);
          setFlag(false);
          const { main } = weatherData;
          const temp = main.temp;
          if (temp < 8) {
            setBgColor('#87BFFF');
          } else if (temp < 24) {
            setBgColor('#28eb66');
          } else if (temp < 31) {
            setBgColor('#fa7725')
          } else {
            setBgColor('#d32f2f')
          }
        } catch (error) {
          Alert.alert('Error', 'No se pudieron obtener los datos del clima', [{ text: 'OK' }]);
        }
      }

    };
    getWeather();
  }, [flag]);



  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={[styleWeather.container, appBgColor]}>
          <View style={{ borderBottomWidth: 2, borderRadius: 15, flex: 0.1 }}>
            <Text style={[styleWeather.txtShadow, styleWeather.txtCity, { fontSize: 30, textAlign: 'center' }]}>Aplicación del Clima</Text>
          </View>
          <Weather ansWeather={ansWeather} />
          <Form
            form={form} setForm={setForm} setFlag={setFlag}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  )
};
