import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginScreen({ navigation }) {

    return (

        <View style={styles.container}>

            <Image
                source={require("../../assets/Fundo.png")}
                style={styles.backgroundImage}
                resizeMode="cover"
            />

            <View style={styles.content}>

                <Image
                    source={require("../../assets/LogoVector2.png")} width={600} height={600}
                    style={styles.logoImage}
                />

                <Text style={styles.logo}>Seja bem-vindo!</Text>

                <Text style={styles.subtitulo}>
                    Antes de começar, você quer entrar nesse aplicativo como:
                </Text>

                <View style={styles.botoesContainer}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("LoginVendedor")}
                    >
                        <Text style={styles.textoBotao}>Vendedor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("LoginEntregador")}
                    >
                        <Text style={styles.textoBotao}>Entregador</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: "100%",
        height: "100%",
    },

    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 12,
    },

    logoImage: {
        width: 400,
        height: 400,
        resizeMode: "contain",
        marginBottom: 12
    },

    logo: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 8
    },

    subtitulo: {
        fontSize: 16,
        marginBottom: 24,
        textAlign: "center",
    },

    botoesContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },

    botao: {
        backgroundColor: "#6fcf97",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginHorizontal: 6,
        minWidth: 300,
    },

    textoBotao: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "Bold",
        fontfamily: "Oswald"
    }

});