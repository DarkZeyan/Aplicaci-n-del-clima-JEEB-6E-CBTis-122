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
        backgroundColor:'#202020',
        borderBottomWidth:2,
        width:'90%',
        margin:5,
        alignSelf:'center'
    },
    inCountry:{
        fontSize:18,
        fontWeight:'800',
        height: 100,
        backgroundColor:'#202020',
        margin:15,
        color:'white'
    },
    inButton:{
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'#202020',
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
        textShadowOffset:{wdith: 3, height:3},
        textShadowRadius:4,
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
        borderWidth:3,
        borderRadius:10,
        flex:1,
        width:'100%',
        resizeMode:'cover',
    },
    iconImg:{
        height:24,
        width:24,
        resizeMode:'cover'
    },
    txtData:{
        color:'white',
        fontSize:18,
        fontFamily:Platform.OS === 'ios' ? 'Arial-BoldMT' : 'monospace',
    },
    txtTemp:{
        color:'white',
        fontSize:28,
        fontWeight:'bold',
        fontFamily:Platform.OS === 'ios' ? 'Arial-BoldMT' : 'monospace',
    },
    txtCity:{
        color:'white',
        fontSize:38,
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:Platform.OS === 'ios' ? 'Arial-BoldMT' : 'monospace',
    }
});

export default styLeWeather;