import PostItem from "@/components/post/Post";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

async function fetchPosts(){
    try{
        
        const res = await fetch("http://10.92.199.6:3000/posts");
        const data = res.json();
        return data;
    }catch(error){
        console.log(error);
    }
};

export default function Timeline(){
    // Isso aqui é um estado no react
    // O valor dentro do Usestate é o valor padrão, o valor inicial
    const [posts, setPosts] = useState([]);

    // O useEffect roda quando o componente é carregado
    useEffect(() => {
        async function loadPosts(){
            const apiPost = await fetchPosts();
            setPosts(apiPost);
        }
        // Aqui nós carrega o bagulho
        loadPosts();
    }, []);
    // Esse array depois do useEffect é o array de dependências, aqui você coloca estados que quer ficar olhando
    // E quando o estado é alterado, ele roda de novo o useEffect

    return (
        <View style={styles.container}>
            <View style={styles.newPostContainer}>
                <TextInput style={styles.newPostInput} multiline placeholder="O que está acontecendo?"></TextInput>
                <TouchableOpacity style={styles.postButton}>
                    <Text style={styles.postButtonText}>Postar</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {
                    posts.map(post => (
                        <PostItem post={post} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    newPostContainer: {
        backgroundColor: "white",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0"
    },
    newPostInput: {
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        minWidth: 80,
        textAlignVertical: "top",
        fontSize: 16
    },
    postButton: {
        backgroundColor: "#2196f3",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: "flex-end"
    },
    postButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14
    },
})