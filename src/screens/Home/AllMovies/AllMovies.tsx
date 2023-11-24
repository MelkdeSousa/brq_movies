import { Screen } from '@/components/Screen';
import { imdbMock } from '@/services/imdbMock';
import { FlashList } from '@shopify/flash-list';
import { MovieBanner } from './components/MovieBanner';


export const AllMoviesTab = () => {
  return (
    <Screen.Container style={{ flex: 1, padding: 0 }}>
      <FlashList
        data={imdbMock.results}
        renderItem={({ item, index }) => <MovieBanner index={index} posterPath={item.poster_path} key={item.id} />}
        numColumns={2}
        estimatedItemSize={100}
      />
    </Screen.Container>
  );
};