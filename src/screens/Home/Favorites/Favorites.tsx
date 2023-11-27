import { ListMovies } from '@/components/ListMovies';
import { MovieBanner } from '@/components/MovieBanner';
import { Screen } from '@/components/Screen';
import { useAuth } from '@/contexts/Auth';
import { DiscoveryMovie } from '@/services/imdbTypes';
import { storage } from '@/services/storage';
import { FlashList } from '@shopify/flash-list';
import React, { useState } from 'react';
import { RefreshControl } from 'react-native';

export const FavoritesTab = () => {
  const { user } = useAuth();

  const favoriteKeys = storage
    .getAllKeys()
    .filter(objs => objs.includes(`@brq-movies:${user?.login}:isFavorite`));

  const [movies, setMovies] = useState<DiscoveryMovie[]>([]);

  const loadMovies = () =>
    setMovies(
      favoriteKeys
        .map(key => JSON.parse(storage.getString(key)!) as DiscoveryMovie)
        .filter(predicate => !!predicate?.id),
    );

  return (
    <Screen.Container onLayout={loadMovies} style={{ flex: 1, padding: 0 }}>
      <FlashList
        data={movies}
        renderItem={({ item, index }) => (
          <MovieBanner
            movie={item}
            posterPath={item?.poster_path}
            key={item?.id || index}
          />
        )}
        numColumns={2}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={loadMovies}
            tintColor="transparent"
          />
        }
        onEndReached={loadMovies}
        estimatedItemSize={100}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={<ListMovies.Empty />}
      />
    </Screen.Container>
  );
};
