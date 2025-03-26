import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { spacing, padding, margin } from './spacing';

export const commonStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: spacing[14],
    paddingHorizontal: spacing[14],
  },
  header__title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  header__subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    marginBottom: spacing[20],
  },
  header__phoneNumber: {
    fontSize: 18,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: spacing[20],
    ...commonStyles.center,
    marginTop: spacing.xxxl,
  },


  // ...
});

export const pickScreenStyles = StyleSheet.create({
  searchBar: {
    ...commonStyles.flexRow,
    alignItems: "center",
    paddingTop: spacing.md,
    ...padding.horizontal("lg"),
    backgroundColor: colors.backgroundPrimary,
  },
  section1: {
    width: 30,
  },
  section2: {
    flex: 9,
    ...commonStyles.flexRow,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    ...padding.horizontal("sm"),
    borderRadius: 8,
    gap: 10,
  },
  section2_noborder: {
    flex: 9,
    ...commonStyles.flexRow,
    alignItems: "center",
    ...padding.horizontal("sm"),
    gap: 10,
  },
  section3: {
    // width: 50,
    paddingLeft: spacing.lg,
    ...commonStyles.flexRow,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },

  footer: {
    ...padding.all('lg'),
    borderTopWidth: 1,
    borderTopColor: colors.borderPrimary,
  },

  footer__absolute: {
    ...padding.all('lg'),
    borderTopWidth: 1,
    borderTopColor: colors.borderPrimary,
    width: "100%",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    // backgroundColor: colors.backgroundSecondary,
  },

  screenTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textPrimary,
  },

});

export const tabScreenStyles = StyleSheet.create({
  tabMenu: {  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing[20],
    backgroundColor: colors.backgroundPrimary,
  },
  tabs: {
    // flex: 1,
    ...commonStyles.flexRow,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing[14],
  },
  tab__text: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  tab__active: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: colors.secondary,
  },

  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  locationIcon: {
    marginHorizontal: 5,
  },
  locationDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  locationName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationAddress: {
    fontSize: 14,
    color: "#666",
    marginVertical: 2,
    lineHeight: 20,
  },
  locationDistance: {
    fontSize: 12,
    color: "#999",
    marginTop: 8,
    marginHorizontal: 5,
  },
});