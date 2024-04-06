import { Dimensions, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Entypo } from '@expo/vector-icons';
import React, { useEffect } from 'react'

const Watch = ({ navigation, route }) => {
    const { height, width } = {
        width: Dimensions.get("screen").height,
        height: Dimensions.get("screen").width
    }
    const { imdbID } = route.params;

    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    }

    useEffect(() => {
        changeScreenOrientation()
        return () => {
            ScreenOrientation.unlockAsync()
        }
    }, [])

    return (
        <View className="flex-1 relative">
            <Pressable onPress={async () => {
                ScreenOrientation.unlockAsync()
                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
                ScreenOrientation.unlockAsync()

                navigation.goBack()
            }} className="absolute p-3 rounded z-20 top-3 left-3 hover:bg-gray-400 focus:bg-gray-400" style={{ marginLeft: StatusBar.currentHeight }}>
                <Entypo name="chevron-left" size={24} color="white" />
            </Pressable>
            <WebView
                source={{ uri: `https://vidsrc.to/embed/movie/${imdbID}` }}
                style={{ width: width, height: height, marginLeft: StatusBar.currentHeight }}
            />
        </View>
    )
}

export default Watch

const styles = StyleSheet.create({})