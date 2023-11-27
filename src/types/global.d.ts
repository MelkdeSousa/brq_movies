import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

declare global {
  type Screen<ParamList, RouteName extends keyof ParamList> = {
    route: RouteProp<ParamList, RouteName>;
    navigation: NavigationProp<ParamList, RouteName>;
  };

  type ScreenComponent<
    ParamList = ParamListBase,
    RouteName extends keyof ParamList,
  > = (props: Screen<ParamList, RouteName>) => JSX.Element;

  type ContextProviderProps<T = {}> = {
    children: React.ReactNode;
  } & T;
}
