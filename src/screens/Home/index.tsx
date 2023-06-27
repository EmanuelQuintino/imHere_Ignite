import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./style";
import { Participant } from "../../components/Participant";

export function Home() {
  function handleAddParticipant() {
    console.log("add");
  };

  function handleRemoveParticipant(name: string) {
    console.log(`remove ${name}`);
  };

  const participants = [
    "Emanuel Quintino",
    "Clara do Anjos",
    "Victoria Cabral",
    "Thiago Souza",
    "Brenda Amaral",
    "Raí Torres",
    "Robson Fernandes",
    "Marcos Gomes",
    "Isabel Oliveira",
    "Kelly Cristina",
  ];

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

        <ScrollView showsVerticalScrollIndicator={false}>
          {participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleRemoveParticipant(participant)}
            />
          ))}
        </ScrollView>
      </View>
    </>
  )
}