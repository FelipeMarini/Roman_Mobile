import React, { Component } from 'react'
import { StyleSheet, FlatList, Image, View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../services/api'


class Listagem extends Component {

    constructor(props) {

        super(props)

        this.state = {
            listaProjetos: []
        }
    }


    BuscarProjetos = async () => { //campos de classe # arrow function

        const resposta = await api.get('/projetos')

        const dadosApi = resposta.data

        this.setState({ listaProjetos: dadosApi })

    }


    componentDidMount() {

        this.BuscarProjetos()

    }


    render() {

        return (

            <View style={styles.main}>
                <Text>LISTAGEM</Text>
            </View>

        )
    }

}

export default Listagem



const styles = StyleSheet.create({

    main: {

    }

})