import styled from 'styled-components/native';
import {fontTheme} from '../../utils/responsive';

const View = styled.View`
  background-color: ${({theme}) => theme.colors.neutral};

  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fontFamily.regular};
  font-size: ${() => fontTheme('6xl')};
`;

export const Login = () => {
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
};
