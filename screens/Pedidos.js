import React, {useState} from 'react';
import { View, Text, Touchable, TextInput, TouchableOpacity, StyleSheet } from 'react-native'



const localizaçao = [
    {
        "endereco": "Rua Alves guedes",
    },
    {
        "endereco": "Rua Domicilio de Amaral",
    },
    {
        "endereco": "Rua Julio Frank",
    },
    {
        "endereco": "Rua Leopoldo Garcia",
    },
    {
        "endereco": "Rua Sao Jose",
    },
]

export default function Home({navigation}) {
    const [lista, setlista] = useState([]);
    
    const { endereco } = route.params;

    useEffect(() => {
        let url = "http://10.87.207.2:3000/entregas/entregadores"

        fetch(url)
        .then((response) => { return response.json();})
        .then(data => { setlista (data); })
    }, []);


    return(
        <View>
            {
                lista.map((item) => {
                    return(
                        <TouchableOpacity key={item} onPress={ () => { navigation.navigate("Detalhes", {endereco: item.endereco}) } } >
                            <Text> { item.endereco } </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}
