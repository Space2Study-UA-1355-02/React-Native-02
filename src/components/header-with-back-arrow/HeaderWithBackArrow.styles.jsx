import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Platform.OS === 'android' ? 50 : 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 3
  },
  arrowWrapper: {
    marginRight: 15
  }
})
