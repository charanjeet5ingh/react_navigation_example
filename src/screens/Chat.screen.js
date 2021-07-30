import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RouteNames from '../routes/RouteNames';

const ChatScreen = ({navigation}) => {
    return (
            <View>
                <Text>Chat</Text>
                <TouchableOpacity onPress={() => {navigation.navigate(RouteNames.CONVERSATION)}}>
                    <Text>
                        Goto Conversations
                    </Text>
                </TouchableOpacity>
            </View>
    )
};

export default ChatScreen;
