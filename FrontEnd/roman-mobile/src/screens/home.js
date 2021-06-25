import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'


class Home extends Component {

    render() {

        return (

            <View style={styles.main}>
                <Text>HOME</Text>
            </View>

        )

    }

}

export default Home


const styles = StyleSheet.create({

    main: {
        backgroundColor: '#f1f1f1'
    }

})