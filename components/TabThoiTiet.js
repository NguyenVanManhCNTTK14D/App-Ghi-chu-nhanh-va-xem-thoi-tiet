import React, { Component } from 'react';
import { Text, Button, TouchableOpacity, FlatList, View, Image } from 'react-native';

import { iconStatus } from '../data/datathoitiet';
import { thoitiet } from '../data/datathoitiet';
import { Icon } from 'react-native-vector-icons'

class TabThoiTietItem extends Component {
    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'gray',
                margin: 4,
                height: 150

            }}>
                
                <View style={{ alignItems: 'center', marginLeft: 160 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'black',
                        margin: 10
                    }}>{this.props.item.hour}</Text>
                    <Image source={require("../image/icon-mua2.jpg")} style={{ width: 60, height: 60 }}></Image>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'black',
                        margin: 10
                    }}>{this.props.item.degrees}F</Text>
                </View>

            </View>
        )
    }
}
export default class TabThoiTiet extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                <View >
                    <FlatList style={{ backgroundColor: 'white', opacity: 0.5 }} data={thoitiet}
                        renderItem={({ item, index }) => {
                            return (
                                <TabThoiTietItem item={item} index={index} parentFlatlist={this}></TabThoiTietItem>
                            )
                        }}
                        keyExtractor={(item, index) => item.hour}
                    >

                    </FlatList>
                </View>

            </View>
        );
    }
}
