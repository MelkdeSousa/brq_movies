import { MovieBanner } from '@/components/MovieBanner';
import { Screen } from '@/components/Screen';
import { Spinner } from '@/components/Spinner';
import { Text } from '@/components/Text';
import { MoviesState, useMovies } from '@/hooks/useMovies';
import { FlashList } from '@shopify/flash-list';
import { RefreshControl } from 'react-native';

const Footer = ({ loading }: { loading: boolean }) => {
  return loading && <Spinner type='active' size='large' />
}

const Empty = ({ error }: Pick<MoviesState, 'error'>) => (
  <Text style={{ textAlign: 'center' }} size='4xl'>
    😢 Não foi possivel carregar os filmes.
    {'\n'}
    {error.has && <Text>{error.message}</Text>}
  </Text>
)

export const AllMoviesTab = () => {
  const { movies, loading, error, loadListMovies } = useMovies()

  return (
    <Screen.Container style={{ flex: 1, padding: 0 }}>
      <FlashList
        data={movies}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={loadListMovies} />}
        renderItem={({ item, index }) => (
          <MovieBanner
            index={index}
            posterPath={item.poster_path}
            key={item.id}
          />
        )}
        numColumns={2}
        estimatedItemSize={100}
        onEndReached={loadListMovies}
        onEndReachedThreshold={0.2}
        ListFooterComponent={<Footer loading={loading} />}
        ListEmptyComponent={<Empty error={error} />}
      />
    </Screen.Container>
  );
};


