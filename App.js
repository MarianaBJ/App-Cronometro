import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Image,
  TouchableOpacity,
  Text
  } from 'react-native';


class App extends Component{

    constructor(props){
        super(props);
            this.state = {
                numero: 0,
                botao: 'Iniciar',
                valor: null
            }

            this.timer = null;
            this.iniciar = this.iniciar.bind(this);
            this.limpar = this.limpar.bind(this);
    }


    iniciar(){

        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null;
            this.setState({ botao: 'Iniciar' });
        }else{
            this.timer = setInterval(() => {
                this.setState({ numero: this.state.numero + 0.1 })
            }, 100)
            this.setState({ botao: 'Pausar'});
        }

    }

    limpar(){

        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null;
        }
        this.setState({
            valor: this.state.numero.toFixed(1), 
            numero: 0, 
            botao: 'Iniciar' 
        })
    }


  render(){
    return(
      <View style={styles.container}>

        <Image
            source={require('./src/cronometro.png')}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
                <Text style={styles.btnTexto}>{this.state.botao}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={this.limpar}>
                <Text style={styles.btnTexto}>Limpar</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.ultimoValor}>
                <Text style={styles.textoValor}>Último tempo: {this.state.valor}</Text>
            </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  ultimoValor:{
    marginTop: 40
  },
  textoValor:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff'
  },
  timer:{
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }
})

export default App;