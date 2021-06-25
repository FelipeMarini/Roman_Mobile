import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './home' //aqui ou no App.js?
import Cadastro from './cadastro'
import Listagem from './listagem'


const bottomTab = createBottomTabNavigator()


class Main extends Component {

    render() {

        return (

            <View style={StyleSheet.main}>

                <bottomTab.Navigator

                    initialRouteName='Cadastro'

                    tabBarOptions={{
                        showLabel: true,
                        showIcon: true,
                        activeBackgroundColor: '#fff',
                        inactiveBackgroundColor: '#ddd',
                        activeTintColor: '#b727ff',
                        inactiveTintColor: '#ef23d7',
                        style: {
                            height: 50
                        }
                    }}

                    screenOptions={({ route }) => ({

                        tabBarIcon: () => {

                            if (route.name === 'Home') {
                                return (
                                    <Image
                                        source={require('../../assets/img/house.png')}
                                        style={styles.tabBarIcon}
                                    />
                                )
                            }

                            if (route.name === 'Cadastro') {
                                return (
                                    <Image
                                        source={require('../../assets/img/cadastro.png')}
                                        style={styles.tabBarIcon}
                                    />
                                )
                            }

                            if (route.name === 'Listagem') {
                                return (
                                    <Image
                                        source={require('../../assets/img/list.png')}
                                        style={styles.tabBarIcon}
                                    />
                                )
                            }
                        }

                    })}
                >

                    <bottomTab.Screen name='Home' component={Home} />
                    <bottomTab.Screen name='Cadastro' component={Cadastro} />
                    <bottomTab.Screen name='Listagem' component={Listagem} />

                </bottomTab.Navigator>

            </View>

        )

    }

}

export default Main



const styles = StyleSheet.create({

    main: {
        backgroundColor: '#f1f1f1'
    },

    tabBarIcon: {
        width: 15,
        height: 15
    }

})