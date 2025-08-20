import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface PostProps {
    id: number,
    author: string,
    content: string,
    createdDate: string,
    likes: number
}

interface PostItemProps {
    post: PostProps
}

export default function PostItem({post} : PostItemProps){
    return(
        <View style={styles.postContainer}>
                            <View style={styles.postHeader}>
                                <View style={styles.avatar}>
                                    <Ionicons name="person" size={20} color={"#6666"}/>
                                </View>
        
                                <View style={styles.postInfo}>
                                    <Text style={styles.username}>{post.author}</Text>
                                    <Text style={styles.timestamp}>{post.createdDate}</Text>
                                </View>
                            </View>
        
                                <Text style={styles.postContent}>{post.content}</Text>
        
                                <View style={styles.postActions}>
                                    <TouchableOpacity style={styles.actionButton}>
                                        <Ionicons  name="heart-outline"></Ionicons>
                                        <Text style={styles.actionText}>{post.likes}</Text>
                                    </TouchableOpacity>
        
                                    <TouchableOpacity style={styles.actionButton}>
                                        <Ionicons  name="chatbubble-outline"></Ionicons>
                                        <Text style={styles.actionText}>9</Text>
                                    </TouchableOpacity>
        
                                    <TouchableOpacity style={styles.actionButton}>
                                        <Ionicons  name="share-outline" style={styles.actionButton}></Ionicons>
                                    </TouchableOpacity>
                                </View>
                        </View>
    )
}

const styles = StyleSheet.create({
        postContainer: {
        backgroundColor: "#fff",
        marginBottom: 8,
        padding: 16
    },
        timestamp: {
        fontSize: 12,
        color: "#66666",
        marginTop: 2
    },
    postContent: {
        fontSize: 16,
        lineHeight: 22,
        color: "#333",
        marginBottom: 12,
        marginTop: 12
    },
    postActions: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#f0f0f0",
        paddingTop: 2
    }, 
    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12
    },
        avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#e0e0e0",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12
    },
    postInfo: {
        flex: 1,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#333"
    },
        actionButton: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 24
    },
        actionText: {
        color: "#666",
        fontSize: 14,
        marginLeft: 4
    }
})