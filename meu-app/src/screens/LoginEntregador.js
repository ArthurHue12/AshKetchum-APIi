import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-web";

export default function LoginEntregador({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState ("");
  const [veiculo, setVeiculo] = useState("");
  const [placa, setPlaca] = useState("");
  const [banco, setBanco] = useState("");
  const [agencia, setAgencia] = useState("");
  const [contab, setContab] = useState("");
  const [chavepix, setChavepix] = useState ("");
  function entrar() {
    if (!email || !senha || !cpf || !cep || !endereco || !veiculo || !placa || !banco || !agencia || !contab || !chavepix) {
      Alert.alert("Atenção", "Preencha os campos para continuar.");
      return;
    }

    Alert.alert("Sucesso", "Login de vendedor realizado.");
    navigation.navigate("Home");
  }return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexDirection: 1}} keyboardShouldPersistTaps= "handled">
        <Text style={styles.title}>Login do Entregador</Text>
        <Text style={styles.subtitle}>Entre para acessar sua conta.</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholder="seu@email.com"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholder="********"
        />

        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          value={cpf}
          onChangeText={setCpf}
          secureTextEntry
          placeholder="********"
        />

        <Text style={styles.label}>CEP</Text>
        <TextInput
          style={styles.input}
          value={cep}
          onChangeText={setCep}
          secureTextEntry
          placeholder="********"
        />

        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          value={endereco}
          onChangeText={setEndereco}
          autoCapitalize="none"
          placeholder="inserir endereço"
        />

        <Text style={styles.label}>Veículo</Text>
        <TextInput
          style={styles.input}
          value={veiculo}
          onChangeText={setVeiculo}
          autoCapitalize="none"
          placeholder="insira seu veículo"
        />

        <Text style={styles.label}>Placa</Text>
        <TextInput
          style={styles.input}
          value={placa}
          onChangeText={setPlaca}
          autoCapitalize="none"
          placeholder="insira sua placa"
        />

        <Text style={styles.label}>Banco</Text>
        <TextInput
          style={styles.input}
          value={banco}
          onChangeText={setBanco}
          autoCapitalize="none"
          placeholder="Nome do banco"
        />

        <Text style={styles.label}>Agencia</Text>
        <TextInput
          style={styles.input}
          value={agencia}
          onChangeText={setAgencia}
          autoCapitalize="none"
          placeholder="Número da agência"
        />

        <Text style={styles.label}>Conta</Text>
        <TextInput
          style={styles.input}
          value={contab}
          onChangeText={setContab}
          autoCapitalize="none"
          placeholder="Número da conta"
        />

        <Text style={styles.label}>Chave PIX</Text>
        <TextInput
          style={styles.input}
          value={chavepix}
          onChangeText={setChavepix}
          autoCapitalize="none"
          placeholder="Chave PIX"
        />



        <TouchableOpacity style={styles.button} onPress={entrar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
    marginLeft: 50,
    marginRight: 50,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    justifyContent: "center",
    
  },
  subtitle: {
    flex: 1,
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 6,
    margin:20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    margin:20,
  },
  button: {
    backgroundColor: "#6fcf97",
    padding: 14,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 10,
    marginLeft: 60,
    marginRight: 60,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
