import { Button, Image, Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import React, { useEffect } from "react";
import { getLatestMovies } from "../api/movies";

const statusBarHeight = StatusBar.currentHeight;

const Home = ({ navigation }) => {
    const [page, setPage] = React.useState(1);
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        getLatestMovies()
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [page]);

    function getNextPage() {
        setPage(page + 1);
    }

    useEffect(() => { }, [movies]);

    return (
        <ScrollView className={`flex-1 gap-3 pt-12 px-3`}>
            <Text className="text-2xl font-bold">Latest Movies</Text>
            <View className="flex-row flex-wrap items-start justify-start">
                {movies.map((movie) => {
                    return (
                        <View key={movie.id} className="mr-3 mb-3 w-[47%] rounded-sm p-2 pl-0">
                            <Image
                                source={{
                                    uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
                                }}
                                className="w-auto h-56 rounded-sm mb-1"
                            />
                            <Text className="text-lg font-medium leading-none">{movie.title}</Text>
                            <Pressable
                                className="px-3 py-1 rounded bg-teal-900"
                                onPress={() => navigation.navigate("Watch", { movieId: movie.id })}
                            >
                                <Text className="text-lg text-center text-white">Watch</Text>
                            </Pressable>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
};

export default Home;
