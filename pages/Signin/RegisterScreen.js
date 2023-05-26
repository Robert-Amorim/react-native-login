import React, { useState } from "react";
import { View, Button, Alert, KeyboardAvoidingView } from "react-native";
import axios from 'axios';

import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 250px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    // Aqui você pode implementar a lógica para adicionar o usuário no banco de dados
    // usando o email e senha fornecidos

    // Exemplo básico de exibição de um alerta com os dados fornecidos
    Alert.alert(
      "Cadastro de Usuário",
      `Usuário registrado:\nEmail: ${email}\nSenha: ${password}`
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Input
          placeholder="Digite o seu nome"
          value={name}
          onChangeText={setName}
        />
        <Input
          placeholder="Digite o seu email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Digite a sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Cadastrar" onPress={handleRegister} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
