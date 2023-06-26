import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Participant } from "../../components/Participant";

export function Home() {
  function handleAddParticipant() {
    console.log("add");
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.eventName}>React Native</Text>
        <Text style={styles.eventDate}>imHere Ignite Project</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor={"#6b6b6b88"}
            keyboardType="default"
          />

          <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Participant />
        <Participant />
        <Participant />
      </View>
    </>
  )
}