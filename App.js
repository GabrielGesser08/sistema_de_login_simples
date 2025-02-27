import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';

export default function App() {

  function loginButton(){
    Alert.alert('Login','Bem vindo ao Sistema')
  }












  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Sistema de login</Text>
      <Text style={styles.subTitulo}>Bem Vindo. Digite seus dados abaixo.</Text>
      <View style={styles.inputArea}>

        <Text style={styles.tituloCampo}>Email</Text>

        <TextInput 
        style={styles.tituloInput}
          placeholder='Digite o seu email'
          placeholderTextColor='#999'
          autoCapitalize='none'
          keyboardType='email-address'
        />
        
        <Text style={styles.tituloCampo}>Senha</Text>
        <TextInput 
        style={styles.tituloInput}
        placeholder='****'
        placeholderTextColor='#999'
        secureTextEntry
        />
        </View>

        <View style={styles.areaEsqueciSenha}>
        <TouchableOpacity style={styles.areaBtn}>
          <Text style={styles.btnEsqueciSenha}>Esqueci a minha senha</Text>
        </TouchableOpacity>

        </View>
          <TouchableOpacity style={styles.btnEntrar} onPress={loginButton}>
            <Text style={styles.txtEntrar}>Entrar</Text>
          </TouchableOpacity>

        <View style={styles.areaCadastrar}>
          <Text style={styles.txtCadastrar}>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.btnCadastrar}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaFooter}>
          <Text style={styles.txtFooter}>2025 - Criado por Gabriel Gesser</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:10,
  },

  titulo:{
    fontSize: 27,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },

  subTitulo:{
    fontSize: 15,
    color: '#999',
  },

  inputArea:{
    width: '100%',
    padding: 10,
  },

  tituloCampo:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777',
    marginBottom: 7,
  },

  tituloInput:{
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#999',
    fontSize: 15,
    padding: 10,
  },

  areaEsqueciSenha:{
    width:'100%'
  },

  btnEsqueciSenha:{
    fontSize:14,
    fontWeight:'bold',
    color:'#416287',
  },

  areaBtn:{
    alignSelf:'flex-end',
    padding:20,
  },

  btnEntrar:{
    backgroundColor:'#416287',
    width:'95%',
    borderRadius:5,
    padding:20,
  },

  txtEntrar:{
    alignSelf:'center',
    color:'#fff',
    fontSize:15,
  },

  areaCadastrar:{
    flexDirection:'row',
    marginTop:30,
  },

  txtCadastrar:{
    fontSize:13,
    fontWeight:'bold',
    color:'#999',
  },

  btnCadastrar:{
    fontSize:13,
    fontWeight:'bold',
    color:'#416287',
    marginLeft:5,
  },

  areaFooter:{
    marginVertical:30,
  },

  txtFooter:{
    fontSize:13,
    color:'#999'
  }
});
