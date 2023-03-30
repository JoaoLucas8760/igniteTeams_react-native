import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "./styles";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
    </Container>
  );
}
