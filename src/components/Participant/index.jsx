import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Participant() {
  function handleRemoveParticipant() {
    console.log("remove");
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Emanuel Quintino</Text>
      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}