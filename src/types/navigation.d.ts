import { NavigationProp, ParamListBase, Route } from '@react-navigation/native';

declare global {
  type Screen<ParamList, RouteName extends keyof ParamList> = {
    route: Route<ParamList>;
    navigation: NavigationProp<ParamList, RouteName>;
  };

  type ScreenComponent<
    ParamList = ParamListBase,
    RouteName extends keyof ParamList,
  > = (props: Screen<ParamList, RouteName>) => JSX.Element;
}
