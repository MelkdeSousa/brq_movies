import { MoviesState } from '@/hooks/useMovies';
import { Spinner } from './Spinner';
import { Text } from './Text';

const Footer = ({ loading }: { loading: boolean }) => {
  if (!loading) {
    return null;
  }

  return <Spinner type="active" size="large" />;
};

const Empty = ({ error }: Pick<MoviesState, 'error'>) => {
  if (!error.has) {
    return null;
  }

  return (
    <Text style={{ textAlign: 'center' }} size="4xl">
      😢 Não foi possivel carregar os filmes.
      {'\n'}
      {error.has && <Text>{error.message}</Text>}
    </Text>
  );
};

export const ListMovies = {
  Footer,
  Empty,
};
