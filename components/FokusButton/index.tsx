import { Pressable, Text, StyleSheet } from "react-native";

interface FokusButtonProps{
    onPress: () => void;
    title: string;
}
export function FokusButton({onPress, title}: FokusButtonProps){
    return(
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

const styles= StyleSheet.create({
     button:{
        backgroundColor: "#b872ff",
        borderRadius:15,
        padding: 8
    },
    buttonText:{
        textAlign:"center",
        color:"#021123",
        fontSize:18
    }
})