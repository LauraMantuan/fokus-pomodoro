import { Text } from "expo-router/build/react-navigation";
import { StyleSheet } from "react-native";



export function Timer({totalSeconds}:{totalSeconds:number}){
    const date= new Date (totalSeconds*1000);
    const options: Intl.DateTimeFormatOptions= {
        minute: '2-digit', 
        second: '2-digit'}

    return(
            <Text style={styles.timer}>{date.toLocaleTimeString('pt-BR', options)}</Text>
    )
}

const styles=StyleSheet.create({
    timer: {
        color: '#fff',
        fontSize: 54,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})