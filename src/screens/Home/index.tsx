import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./style";
import { Participant } from "../../components/Participant";

export function Home() {
  function handleAddParticipant(name: string) {
    if (participants.includes(name)) {
      return Alert.alert("Participante listado", "O nome do participante já está na lista");
    };
  };

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover Participante", `Deseja remover ${name} da lista?`, [
      { text: "Sim", onPress: () => Alert.alert("", `Participante ${name} removido com sucesso!`) },
      { text: "Não", style: "cancel" },
    ]);
  };

  const participants = [
    "Emanuel Quintino",
    "Clara dos Anjos",
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

          <TouchableOpacity style={styles.button} onPress={() => handleAddParticipant("Emanuel Quintino")}>
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