import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../services/api'


class Login extends Component {


    constructor(props) {

        super(props)

        this.state = {
            email: '',
            senha: ''
        }
    }


    RealizarLogin = async () => {

        console.warn('email:' + this.state.email + ' / ' + 'senha:' + this.state.senha)

        try {

            const resposta = await api.post('/login', {
                email: this.state.email,
                senha: this.state.senha
            })

            const token = resposta.data.token

            console.warn(token)

            await AsyncStorage.setItem('userToken', token)

            this.props.navigation.navigate('Main')

        }

        catch (error) {

            console.warn(error)

        }

    }


    render() {

        return (
            <View style={styles.main}>
                <Text>LOGIN</Text>
            </View>
        )

    }


}

export default Login


const styles = StyleSheet.create({

    main: {

    }

})