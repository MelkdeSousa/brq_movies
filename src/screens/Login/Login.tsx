import BRQMoviesLogo from '@/assets/images/brq-movies-logo.png';
import {Input} from '@/components/Input';
import {Lock, User, XCircle} from 'phosphor-react-native';
import {useState} from 'react';
import {Image} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {pixelThemeSizeVertical} from '../../utils/responsive';

const WrapperScreen = styled.View`
  background-color: ${({theme}) => theme.colors.neutral};

  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.View`
  width: 80%;

  gap: ${pixelThemeSizeVertical(11)};
`;

export const Login = () => {
  const {colors} = useTheme();
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <WrapperScreen>
      <Image source={BRQMoviesLogo} />

      <FormContainer>
        <Input
          right={<User color={colors.secondary} />}
          left={<XCircle color={colors.secondary} />}
          placeholder="Usuário"
          value={userLogin}
          onChangeText={setUserLogin}
        />
        <Input
          right={<Lock color={colors.secondary} />}
          left={<XCircle color={colors.secondary} />}
          placeholder="Senha"
          value={userPassword}
          onChangeText={setUserPassword}
        />
      </FormContainer>
    </WrapperScreen>
  );
};
