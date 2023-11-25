import { Screen } from "@/components/Screen";
import { Text } from "@/components/Text";
import { MainStackParamList } from "@/navigation/MainStack";

export const DetailMovieScreen: ScreenComponent<MainStackParamList, 'DetailMovie'> = ({ route }) => {
    return (
        <Screen.Background>
            <Text>{route.params?.movieId}</Text>
        </Screen.Background>
    )
}