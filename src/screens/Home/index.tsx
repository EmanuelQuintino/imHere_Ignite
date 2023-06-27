import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante listado", "O nome do participante já está na lista");
    };
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName("");
  };

  function handleRemoveParticipant(name: string) {
    const remove = () => setParticipants(participants.filter(participantName => participantName !== name));
    Alert.alert("Remover Participante", `Deseja remover ${name} da lista?`, [
      { text: "Sim", onPress: () => remove() },
      { text: "Não", style: "cancel" },
    ]);
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
            value={participantName}
            onChangeText={setParticipantName}
          />

          <TouchableOpacity style={styles.button} onPress={() => handleAddParticipant()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant
              key={item}
              name={item}
              onRemove={() => handleRemoveParticipant(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>Lista de convidados vazia</Text>
          )}
        />
      </View>
    </>
  )
}