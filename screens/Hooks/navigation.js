import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function getActiveRouteName(state) {
  if (!state) return undefined;
  const route = state.routes[state.index];
  // Dive into nested navigators
  if (route.state) {
    return getActiveRouteName(route.state);
  }
  return route.name;
}
