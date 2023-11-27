import { MoviesState } from '@/hooks/useMovies';
import { Spinner } from './Spinner';
import { Text } from './Text';

const Footer = ({ loading = false }: { loading?: boolean }) => {
  if (!loading) {
    return null;
  }

  return <Spinner type="active" size="large" />;
};

const ErrorMessage = ({ error }: Pick<MoviesState, 'error'>) => {
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

const Empty = () => (
  <Text style={{ textAlign: 'center' }} size="4xl">
    Sem filmes...
    {'\n'}
    <Text style={{ textAlign: 'center' }} size="xl">
      Por enquanto. 😉
    </Text>
  </Text>
);

export const ListMovies = {
  Footer,
  Error: ErrorMessage,
  Empty,
};
