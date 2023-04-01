import { useState } from "react";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { FlatList } from "react-native";
import { Container, Form } from "./styles";

export default function Players() {
  const [team, setTeam] = useState("Time A");
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <FlatList
        data={["Time A", "Time B"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Filter
            title={item}
            isActive={item === team}
            onPress={() => setTeam(item)}
          />
        )}
        horizontal
      />
    </Container>
  );
}
