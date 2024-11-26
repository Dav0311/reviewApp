import { StyleSheet  } from "react-native";

export const globalStyles = StyleSheet.create ({

    container:{
        padding:20,
        flex:1,


    },
    titleText: {
        fontFamily:'poppins-bold',
        fontSize:20,
        color:'#333'
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,
    },
    input: {
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6,
    },
    errortext: {
        color: 'crimson',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
    }

});

export const images = {
    ratings : {
        '1': require('../assets/ratings-1.png'),
        '2': require('../assets/ratings-2.png'),
        '3': require('../assets/ratings-3.png'),
        '4': require('../assets/ratings-4.png'),
        '5': require('../assets/ratings-5.png'),
    }
};