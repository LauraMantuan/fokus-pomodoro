import {Pressable, Text, StyleSheet} from "react-native";

interface ActiveButtonProps{
    active:boolean;
    onPress: () => void;
    display: string
}


export function ActionButton({active, onPress, display}: ActiveButtonProps){
    return(
          <Pressable 
            style={active ? styles.contextButtonActive : null}
            onPress= {onPress} >
            <Text style= {styles.contextButtonText}>
            {display}
        </Text>
        </Pressable>
    )
}

const styles= StyleSheet.create({
        contextButtonActive:{
        backgroundColor: "#144480",
        borderRadius:8
    },
    contextButtonText:{
        color:"#fff",
        fontSize: 12.5,
        padding:8
    },
})