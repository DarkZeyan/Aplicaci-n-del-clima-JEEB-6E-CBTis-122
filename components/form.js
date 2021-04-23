import React, {useState} from 'react';
import {
    Text,
    TextInput,
    Animated,
    Alert,
    View,
    TouchableWithoutFeedback,

} from 'react-native';
import styleWeather from '../styles/styleWeather';
import { Picker } from '@react-native-community/picker'
import styLeWeather from '../styles/styleWeather';

const Form = ({form, setForm,setFlag}) => {
    // Descomponemos el state
    const {city,country} = form;

    // metodo para consulta
    const queryWeather = () =>{
        // console.log('Entro a consulta clima');
        if(country.trim() === '' || city.trim() ===''){
            // console.log('Carencia de algun dato');
            showAlert('Error', 'Campo de ciudad o pais esta vacio');
            return;
        }
        setFlag(true);
    }
    const showAlert = (varErr,varMens) =>{
        Alert.alert(varErr,varMens,[{text:'OK'}]);
    }
//  Animacion
    const [animation] = useState(new Animated.Value(1));
 
    const animPressIn = () =>{
        Animated.spring(animation,{
            toValue: 0.8,
            useNativeDriver:true
        }).start();
    }

    const animPressOut = () =>{
        Animated.spring(animation,{
            toValue:1,
            friction:0.75,
            tension:30,
            useNativeDriver:true    
        }).start();1
    }
    const animStyle = {
        transform: [{scale:animation}]
    };
    // Termina animacion

    return (
        <>
            <View>
                <TextInput
                    value={city}
                    onChangeText={(city)=>setForm({ ...form,city})}
                    style={styleWeather.inCity}
                    placeholder="Ciudad"
                    placeholderTextColor="white"
                />
            </View>
            <View>
                <Picker 
                selectedValue={country}
                onValueChange={(country)=>setForm({...form, country})}
                style={styleWeather.inCountry}>
                    <Picker.Item value="" label="Seleciona un país ←"/>
                    <Picker.Item value="MX" label="México"/>
                    <Picker.Item value="US" label="Estados Unidos"/>
                    <Picker.Item value="UK" label="Reino Unido"/>
                    <Picker.Item value="JP" label="Japón"/>
                    <Picker.Item value="CO" label="Colombia"/>
                    <Picker.Item value="CL" label="Chile"/>
                </Picker>
            </View>
            <TouchableWithoutFeedback
                onPressIn={() => animPressIn()}
                onPressOut={()=> animPressOut()}
                onPress ={()=>queryWeather()}
            >
                <Animated.View style={[styleWeather.inButton, animStyle]}>
                    <Text style={[styLeWeather.txtButton,styLeWeather.txtShadow]}>Consultar el clima</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </>
    )
}
export default Form;