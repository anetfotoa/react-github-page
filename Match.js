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

const Match = ({ navigation }) => {
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
            <Button
                title="가까운 사람 찾기"
                style={styles.button}
                onPress={() => {
                    navigation.navigate("위치확인", {
                        val2: "아직 리스트가 없습니다",
                    });
                }}
            />
            <Button
                title="관심 방탈출 사람 찾기"
                style={styles.button}
                onPress={() => navigation.navigate("관심 방탈출")}
            />
        </View>
    );
};
export default Match;
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
