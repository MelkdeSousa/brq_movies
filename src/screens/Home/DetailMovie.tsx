import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { MainStackParamList } from "@/navigation/MainStack";
import { movieBanner } from "@/services/imdbAPI";
import { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StatusBar } from "react-native";
import FastImage from "react-native-fast-image";

export const DetailMovieScreen: ScreenComponent<MainStackParamList, 'DetailMovie'> = ({ route: { params: { movie } } }) => {
    const { width: w, height: h, scale } = Dimensions.get('screen')

    const [dimensions, setDimensions] = useState({
        width: w,
        height: h,
        aspectRatio: w / h,
    })

    const { width, aspectRatio } = dimensions

    useEffect(() => {
        Image.getSize(movieBanner(movie?.poster_path), (width, height) => setDimensions(state => ({
            ...state,
            height
        })))
    }, [])

    console.log(dimensions)

    return (<>
        <StatusBar hidden translucent />
        <Screen.Background>
            <ScrollView >
                <FastImage
                    source={
                        { uri: movieBanner(movie?.poster_path), }
                    }
                    style={{
                        width: width,
                        height: (width / aspectRatio) / scale
                    }}
                    resizeMode="cover"
                />
                <Screen.Container>
                    <Text size="2xl" weight="bold">
                        {movie.title}
                    </Text>
                </Screen.Container>
            </ScrollView>
        </Screen.Background>
    </>
    )
}