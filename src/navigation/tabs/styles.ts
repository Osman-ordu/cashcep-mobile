import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 70,
    borderTopWidth: 0.5,
    paddingBottom: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  activeBorder: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 0.5,
  },
  tabLabel: {
    fontSize: 12,
  },
});

