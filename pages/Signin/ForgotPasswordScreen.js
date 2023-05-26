import React, { useState } from 'react';
import { View, Button, Alert, KeyboardAvoidingView } from 'react-native';
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

export const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
`;

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Aqui você pode implementar a lógica para redefinir a senha do usuário
    // usando o email fornecido

    // Exemplo básico de exibição de um alerta com o email fornecido
    Alert.alert('Reset Password', `Um email de redefinição de senha será enviado para ${email}`);
  };

  return (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Title>Esqueci Minha Senha</Title>
      <Input
        placeholder="Digite o seu email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Redefinir Senha" onPress={handleResetPassword} />
    </View>
  </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
