import React, { useState } from 'react';
import { View, Button, KeyboardAvoidingView } from 'react-native';
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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Verifica se o usuário está presente no banco de dados
      const response = await axios.post('URL_DO_SEU_BACKEND/login', {
        email,
        password,
      });

      // Se o login for bem-sucedido, navegue para a tela Home
      if (response.data.success) {
        navigation.navigate('Home');
      } else {
        // Lidar com erro de autenticação aqui
        setErrorMessage('Credenciais inválidas. Verifique seu email e senha.');
      }
    } catch (error) {
      // Lidar com erros de conexão com o servidor aqui
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Ocorreu um erro ao fazer login. Tente novamente mais tarde.');
    }
  };

  return (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  >
    <View>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Esqueci minha senha"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
      <Button
        title="Cadastra-se"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    </View>
  </KeyboardAvoidingView>
  );
};

export default LoginScreen;
