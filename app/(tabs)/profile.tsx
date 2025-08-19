import { Ionicons } from "@expo/vector-icons";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

export default function Profile(){
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.avatar}>
                    <Ionicons name="person" size={60} color={"#b7b7b7"}/>
                </View>
                <Text style={styles.fullname}>Messi careca</Text>
                <Text style={styles.username}>@omessisemcabeloofc</Text>
            </View>


            <View style={styles.statsContainer}>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNumber}>183</Text>
                    <Text style={styles.statsLabel}>Posts</Text>
                </View>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNumber}>2.4Mi</Text>
                    <Text style={styles.statsLabel}>Seguidores</Text>
                </View>
                <View style={styles.statsItem}>
                    <Text style={styles.statsNumber}>-5</Text>
                    <Text style={styles.statsLabel}>Seguindo</Text>
                </View>
            </View>

            <View style={styles.settingsContainer}>
                <Text style={styles.sectionTitle}>Configurações da Conta</Text>


                <TouchableOpacity style={styles.settingsItem}>
                    <View style={styles.settingsBlock}>
                        <Ionicons name="person-outline" size={24} color={"#666666"}/>
                        <View style={styles.settingsText}>
                            <Text style={styles.settingsLabel}>Nome de usuário</Text>
                            <Text style={styles.settingValue}>@omessisemcabeloofc</Text>
                        </View>
                    </View>

                    <Ionicons name="chevron-forward" size={20} color={"#ccc"}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsItem}>
                    <View style={styles.settingsBlock}>
                        <Ionicons name="mail-outline" size={24} color={"#666666"}/>
                        <View style={styles.settingsText}>
                            <Text style={styles.settingsLabel}>Email</Text>
                            <Text style={styles.settingValue}>messisemcabelo@gmail.com</Text>
                        </View>
                    </View>

                    <Ionicons name="chevron-forward" size={20} color={"#ccc"}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsItem}>
                    <View style={styles.settingsBlock}>
                        <Ionicons name="lock-open-outline" size={24} color={"#666666"}/>
                        <View style={styles.settingsText}>
                            <Text style={styles.settingsLabel}>Senha</Text>
                            <Text style={styles.settingValue}>*******</Text>
                        </View>
                    </View>

                    <Ionicons name="chevron-forward" size={20} color={"#ccc"}/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Pega a tela inteira

    },
    profileHeader: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",

    },
    fullname: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4
    },
    username: {
        fontSize: 16,
        color: "#666666"
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#e0e0e0",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
    },
    statsContainer: {
        flexDirection: "row",
        marginBottom: 8,
        paddingVertical: 20,
        backgroundColor: "white",
    },
    statsNumber: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333"
    },
    statsLabel: {
        fontSize: 14,
        color: "#666666",
        marginTop: 4
    },
    statsItem: {
        flex: 1,
        alignItems: "center"
    },
    settingsContainer: {
        backgroundColor: "white",
        marginBottom: 8,
    },
    settingValue: {
        fontSize: 14,
        color: "#666666",
    },
    settingsText: {
        flex: 1,
        marginLeft: 16
    },
    settingsItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderWidth: 1,
        borderColor: "#f0f0f0"
    },
    settingsBlock: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        padding: 16,
        paddingBottom: 8
    },
    settingsLabel: {
        fontSize: 16,
        color: "#333",
        marginBottom: 2,
    }
})