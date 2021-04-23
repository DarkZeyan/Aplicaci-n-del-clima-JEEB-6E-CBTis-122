import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground
} from 'react-native';
import styleWeather from '../styles/styleWeather';


const Weather = ({ansWeather}) => {
    
    // Se extraen los datos de ansWeather
    const {name, main, weather, wind, sys} = ansWeather;
    
  

    
    if(!name) return null;
    const  sr = new Date(sys.sunrise*1000).toLocaleTimeString('es-MX');
    const  ss = new Date(sys.sunset*1000).toLocaleTimeString('es-MX');

    const iconID = weather[0].icon;
   

    return (
        <View style={
            styleWeather.weatherContainer
        }>
            <ImageBackground
                source={{uri:`https://hosting.photobucket.com/images/i/zeyanriko/${iconID}.png`}}style={styleWeather.backImg}>
                <View>
                    <Text style={[styleWeather.txtCity,styleWeather.txtShadow]}>{name}</Text>
                </View>
                <View style={styleWeather.dataContainer}>
                    <View style={{flex:3}}>
                        <Image source={require('../assets/icons8-pressure-gauge-96.png')} style={styleWeather.iconImg} />
                        <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{main.pressure}</Text>
                        <Image source={require('../assets/icons8-wet-96.png')} style={styleWeather.iconImg} />
                        <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{main.humidity}</Text>
                        <Image source={require('../assets/icons8-wind-96.png')} style={styleWeather.iconImg} />
                        <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{wind.speed}</Text>
                    </View>
                    <View style={{flex:4}}>
                        <View>
                            <Text style={[styleWeather.txtTemp,styleWeather.txtShadow]}>{main.temp} &#x2103;</Text>
                        </View>
                        <View style={{margin:20}}>
                            <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>Min. {main.temp_min} &#x2103;</Text>
                            <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>Max. {main.temp_max} &#x2103;</Text>
                        </View>
                        <View>
                            <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{weather[0].description}</Text>
                        </View>
                    </View>
                    <View style={{flex:2}}>
                        <Image source={require('../assets/icons8-sunrise-96.png')} style={styleWeather.iconImg} />
                        <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{sr}</Text>
                        <Image source={require('../assets/icons8-sunset-96.png')} style={styleWeather.iconImg} />
                        <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{ss}</Text>
                    </View>
                </View>
            </ImageBackground>

        </View>
    );
}
export default Weather;