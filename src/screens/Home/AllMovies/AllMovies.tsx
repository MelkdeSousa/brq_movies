import { ListMovies } from '@/components/ListMovies';
import { MovieBanner } from '@/components/MovieBanner';
import { Screen } from '@/components/Screen';
import { useMovies } from '@/hooks/useMovies';
import { FlashList } from '@shopify/flash-list';
import { RefreshControl } from 'react-native';

export const AllMoviesTab = () => {
  const { movies, loading, error, loadListMovies } = useMovies();

  return (
    <Screen.Container style={{ flex: 1, padding: 0 }}>
      <FlashList
        testID="all-movies-list"
        accessibilityValue={{ now: movies.length }}
        accessibilityLabel="Lista de Filmes"
        data={movies}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadListMovies} />
        }
        renderItem={({ item, index }) => (
          <MovieBanner
            index={index}
            movie={item}
            posterPath={item.poster_path}
            key={item.id}
          />
        )}
        numColumns={2}
        estimatedItemSize={100}
        onEndReached={loadListMovies}
        onEndReachedThreshold={0.2}
        ListFooterComponent={<ListMovies.Footer loading={loading} />}
        ListEmptyComponent={<ListMovies.Empty error={error} />}
      />
    </Screen.Container>
  );
};
