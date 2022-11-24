import React, {
    useLayoutEffect,
    useState,
    useCallback,
    useEffect,
    Component,
} from "react";
import { View, StyleSheet, Text } from "react-native";
import { auth, db } from "../firebase";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { GiftedChat } from "react-native-gifted-chat";
import { Input, Button } from "react-native-elements";

const FirstUI = ({ navigation }) => {
    const [chatroom, setChatroom] = useState("");
    const signOut = () => {
        auth.signOut()
            .then(() => {
                // Sign-out successful.
                navigation.replace("로그인");
            })
            .catch((error) => {
                // An error happened.
            });
    };
    var email;
    const [data, setData] = useState("");
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(function (user) {
            email = user.email.replace(".", "");

            setData(email);
        });
        return unsubscribe;
    }, []);
    console.log(data);
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Button
                    title="친구방"
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("매칭", {
                            val2: "아직 리스트가 없습니다",
                        });
                    }}
                />
            </View>

            <View style={styles.container}>
                <Button
                    title="대화방"
                    style={styles.button}
                    onPress={() => navigation.navigate("대화방 목록")}
                />
            </View>
            <View style={styles.container}>
                <Button
                    title="문제방"
                    style={styles.button}
                    onPress={() => navigation.navigate("대화방 목록")}
                />
            </View>
            <View style={styles.container}>
                <Button
                    title="스케줄방"
                    style={styles.button}
                    onPress={() => navigation.navigate("대화방 목록")}
                />
            </View>

            <View style={styles.container}>
                <Button
                    title="나가기"
                    style={styles.button}
                    onPress={signOut}
                />
            </View>
        </View>
    );
};
export default FirstUI;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
