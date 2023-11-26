import { MainStackNavigationProp } from '@/navigation/MainStack';
import { removePx } from '@/utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Heart } from 'phosphor-react-native';
import { useMemo } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

export const HeaderMovie = () => {
  const statusBarHeight = StatusBar.currentHeight ?? 24;

  const { spacing, colors, radii } = useTheme();
  const navigation = useNavigation<MainStackNavigationProp>();

  const buttonIconsProps = useMemo(() => (
    {
      style: { backgroundColor: 'transparent' },
      size: removePx(spacing['8']),
      color: colors.primary
    }
  ), [])

  return (
    <View
      style={{
        position: 'absolute',
        top: statusBarHeight + removePx(spacing['6']),
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: removePx(spacing['4']),
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'transparent',
          borderRadius: removePx(radii.full),
          padding: removePx(spacing['1']),
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <ArrowLeft
          {...buttonIconsProps}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'transparent',
          borderRadius: removePx(radii.full),
          padding: removePx(spacing['1']),
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => { }}>
        <Heart
          {...buttonIconsProps}
        />
      </TouchableOpacity>
    </View>
  );
};


