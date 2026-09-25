import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.push('/')}>
        <Text style={styles.textoDoBotao}>Voltar para a tela inicial</Text>
      </TouchableOpacity>

      { /* 
         * StyleSheet.flatten(): converte um array de objetos de estilo em 
         * um único objeto de estilo agregado.
         */}
      <Link href="/screens/login" asChild>
        <TouchableOpacity style={StyleSheet.flatten([styles.botao, styles.botaoDentroDeLink])}>
          <Text style={styles.textoDoBotao}>[Botão Dentro de Link] Ir para a tela de login</Text>
        </TouchableOpacity>
      </Link>

      { /* 
         * StyleSheet.flatten(): converte um array de objetos de estilo em 
         * um único objeto de estilo agregado.
         */}
      <Link href="/screens/home" asChild>
        <TouchableOpacity style={StyleSheet.flatten([styles.botao, styles.botaoDentroDeLink])}>
          <Text style={styles.textoDoBotao}>[Botão Dentro de Link] Ir para a tela home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20, padding: 20, marginTop: 50, borderWidth: 1, borderColor: 'gray' },
  titulo: { fontSize: 24, marginBottom: 20 },
  botao: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  botaoDentroDeLink: {
    backgroundColor: 'orange'
  },
  textoDoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
