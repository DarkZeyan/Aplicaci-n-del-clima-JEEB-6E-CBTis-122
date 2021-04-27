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
    
    const hmsToHm = (hour) =>{
        const date = new Date(hour*1000);

        var h = date.getHours();
        var m = date.getMinutes()
        var ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        h = h ? h : 12; 
        m = m < 10 ? '0'+m : m;
        const time = h + ':' + m + ' ' + ampm;
        return time
    }
    const iconID = weather[0].icon;
    
    const capitalize =(str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const ws  = wind.speed * 3.6;


    return (
        <View style={
            styleWeather.weatherContainer
        }>
            <ImageBackground
                source={{uri:`https://github.com/DarkZeyan/Aplicaci-n-del-clima-JEEB-6E-CBTis-122/blob/main/assets/${iconID}.png?raw=true`}}style={styleWeather.backImg}>
                <View>
                    <Text style={[styleWeather.txtCity,styleWeather.txtShadow]}>{name}</Text>
                </View>
                <View style={[styleWeather.dataContainer,{marginTop:10}]}>
                    <View style={{flex:3, alignItems:'center'}}>
                        <Image source={require('../assets/icons8-pressure-gauge-96.png')} style={styleWeather.iconImg} />
                        <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{main.pressure}hPa</Text>
                        <Image source={require('../assets/icons8-wet-96.png')} style={styleWeather.iconImg} />
                        <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{main.humidity}%</Text>
                        <Image source={require('../assets/icons8-wind-96.png')} style={styleWeather.iconImg} />
                        <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{ws.toFixed(2)}km/h</Text>
                    </View>
                    <View style={{flex:3, alignItems:'center' }}>
                        <View>
                            <Text style={[styleWeather.txtTemp,styleWeather.txtShadow]}>{main.temp} &#x2103;</Text>
                        </View>
                        <View style={{margin:20}}>
                            <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>Min.{main.temp_min} &#x2103;</Text>
                            <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>Max.{main.temp_max} &#x2103;</Text>
                            <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>S. térmica:{main.feels_like} &#x2103;</Text>
                            
                        </View>
                        <View>
                            <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{capitalize(weather[0].description)}</Text>
                        </View>
                    </View>
                    <View style={{flex:3, alignItems:'center'}}>
                        <Image source={require('../assets/icons8-sunrise-96.png')} style={styleWeather.iconImg} />
                        <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{hmsToHm(sys.sunrise)}</Text>
                        <Image source={require('../assets/icons8-sunset-96.png')} style={styleWeather.iconImg} />
                        <Text style={[styleWeather.txtData,styleWeather.txtShadow]}>{hmsToHm(sys.sunset)}</Text>
                    </View>
                </View>
            </ImageBackground>

        </View>
    );
}
export default Weather;