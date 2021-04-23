import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const styLeWeather = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:20,
        backgroundColor:'#8CFBDE',
        justifyContent:'center'
    },
    inCity:{
        borderWidth:2,
        borderRadius:10,
        backgroundColor:'#00E07F',
        borderBottomColor:'#06BA63',
        borderBottomWidth:2,
        width:'90%',
        margin:5,
        alignSelf:'center'
    },
    inCountry:{
        borderWidth:2,
        borderRadius:10,
        borderColor:"#06BA63",
        height: 100,
        backgroundColor:'#00E07F',
        margin:5,
        color:'white'
    },
    inButton:{
        borderWidth:2,
        borderRadius:10,
        backgroundColor:'#00E07F',
        justifyContent:'center',
        alignSelf:'center',
        margin:10
    },
    txtButton:{
        color:'white',
        fontFamily:Platform.OS === 'ios' ? 'Arial-BoldMT' : 'monospace',
        fontSize:20,
        textAlign:'center'
    },
    txtShadow:{
        textShadowColor:'black',
        textShadowOffset:{wdith: -2, height:-2},
        textShadowRadius:6,
    },
    weatherContainer:{
        flex:1,
        marginTop:20,
        marginHorizontal:5,
        marginBottom:5,
        justifyContent:'center',
        alignItems:'center'
    },
    dataContainer:{
        flex:1,
        flexDirection:'row'
    },
    backImg:{
        flex:1,
        width:'95%',
        resizeMode:'cover',
    },
    iconImg:{
        height:24,
        width:24,
        resizeMode:'cover'
    },
    txtData:{
        color:'white',
        fontSize:14
    },
    txtTemp:{
        color:'white',
        fontSize:34
    },
    txtCity:{
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    }
});

export default styLeWeather;