import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";



const entregas = [
    {
        "id_entregador":1,
        "nome":"Roberval"
    },
    {
        "id_entregador":2,
        "nome":"Ricardo"
    },
    {
        "id_entregador":3,
        "nome":"Manuel"
    },
    {
        "id_entregador":4,
        "nome":"José"
    },
    {
        "id_entregador":5,
        "nome":"Rosângela"
    },
]

export default function Home({navigation}) {

    const[id, setId] = useState("");
    const [name, setName] = useState("")
    
    const home = () =>{
        let url = "http://10.87.207.2:3000/entrega/entregadores";

        let data = {
            "id": id,
            "nome": name
        }

        fetch(url, {
            method: "Get",
        })
        .then(resp => { 
            if(resp.status == 200) {
                return resp.json();
            }
        })
    }
    const irParaPedidos = () => {
        navigation.navigate("Pedidos");
      };
    

    return(
        <View style={styles.page}>
            <TouchableOpacity onpress={irParaPedidos} style={styles.button}>
                <Text style={styles.txt}>{entregas}</Text>
            </TouchableOpacity>
        </View>

    );  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
});