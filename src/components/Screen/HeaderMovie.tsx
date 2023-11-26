import { MainStackNavigationProp } from '@/navigation/MainStack';
import { removePx } from '@/utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { ArrowCircleLeft, Heart } from 'phosphor-react-native';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components/native';

export const HeaderMovie = () => {
  const statusBarHeight = StatusBar.currentHeight ?? 24;

  const { spacing, colors, radii } = useTheme();
  const navigation = useNavigation<MainStackNavigationProp>();

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
        <ArrowCircleLeft
          style={{ backgroundColor: 'transparent' }}
          size={removePx(spacing['10'])}
          weight="fill"
          color={colors.neutral}
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
        onPress={() => {}}>
        <Heart
          style={{ backgroundColor: 'transparent' }}
          size={removePx(spacing['8'])}
          color={colors.neutral}
        />
      </TouchableOpacity>
    </View>
  );
};
