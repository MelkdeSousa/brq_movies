import BRQMoviesLogo from '@/assets/images/brq-movies-logo.png';
import { Input } from '@/components/Input';
import { Lock, User, XCircle } from 'phosphor-react-native';
import { Image, Keyboard, TouchableOpacity } from 'react-native';

import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { useAuth } from '@/contexts/Auth';
import { MainStackParamList } from '@/navigation/MainStack';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from 'styled-components/native';
import { z } from 'zod';
import { FormContainer, WrapperScreen } from './styles';

const loginSchema = z.object({
  login: z.string().min(1, 'O login deve ser informado.'),
  password: z
    .string()
    .min(1, 'A senha deve ser informada.')
    .refine(password => !isNaN(Number(password)), {
      message: 'A senha deve ser numérica.',
    }),
});

export const LoginScreen: ScreenComponent<MainStackParamList, 'Login'> = ({
  navigation,
}) => {
  const { colors } = useTheme();
  const { login: handleLogin } = useAuth();
  const scrollRef = useRef<KeyboardAwareScrollView | null>(null);

  const {
    control,
    handleSubmit,
    resetField,
    formState: { isLoading, isValid },
    setError,
  } = useForm<typeof loginSchema._input>({
    defaultValues: {
      login: '',
      password: '',
    },
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    resolver: zodResolver(loginSchema),
  });

  const typeVariant = useMemo(
    () => (isValid ? 'active' : 'disabled'),
    [isValid],
  );

  const onSubmit = handleSubmit(({ login, password }) => {
    try {
      handleLogin({ login, password });

      Keyboard.dismiss();

      navigation.reset({
        routes: [{ name: 'Home' }],
        history: [],
        index: 0,
      });
    } catch (error) {
      setError('login', {
        message: (error as Error).message,
      });

      setError('password', {
        message: (error as Error).message,
      });
    }
  });

  return (
    <KeyboardAwareScrollView
      ref={scrollRef}
      keyboardShouldPersistTaps="always"
      overScrollMode="never"
      contentContainerStyle={{
        flexGrow: 1,
      }}
      centerContent
      enableAutomaticScroll>
      <WrapperScreen>
        <Image source={BRQMoviesLogo} />

        <FormContainer>
          <Controller
            control={control}
            name="login"
            render={({
              fieldState: { error },
              field: { onChange, onBlur, value },
            }) => (
              <Input
                right={<User color={colors.secondary} />}
                left={
                  <TouchableOpacity onPress={() => resetField('login')}>
                    <XCircle color={colors.secondary} />
                  </TouchableOpacity>
                }
                placeholder="Usuário"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                focusColor={error?.message ? 'error' : 'active'}
                unfocused={error?.message ? 'error' : 'disabled'}
                error={!!error?.message}
                errorMessage={error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({
              fieldState: { error },
              field: { onChange, onBlur, value },
            }) => (
              <Input
                right={<Lock color={colors.secondary} />}
                left={
                  <TouchableOpacity onPress={() => resetField('password')}>
                    <XCircle color={colors.secondary} />
                  </TouchableOpacity>
                }
                placeholder="Senha"
                secureTextEntry
                value={String(value)}
                onBlur={onBlur}
                onChangeText={onChange}
                focusColor={error?.message ? 'error' : 'active'}
                unfocused={error?.message ? 'error' : 'disabled'}
                error={!!error?.message}
                errorMessage={error?.message}
              />
            )}
          />

          <Button
            style={{ flexGrow: 1 }}
            disabled={!isValid}
            type={typeVariant}
            loading={isLoading}
            onPress={onSubmit}>
            <Text size="lg" weight="bold" type={typeVariant}>
              Entrar
            </Text>
          </Button>
        </FormContainer>

        <TouchableOpacity>
          <Text style={{ textDecorationLine: 'underline' }}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>
      </WrapperScreen>
    </KeyboardAwareScrollView>
  );
};
