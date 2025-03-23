// src/components/SearchBar/SearchBar.tsx
import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PickPoint from '@/assets/svgs/bookingFlowSvgs/pickPoint.svg';
import ButtonF from '@/components/stylesFunny/ButtonF';
import { useRouter } from 'expo-router';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { commonStyles } from '@/theme/styles';

interface SearchBarProps {
  destination: string;
  setDestination: (text: string) => void;
  isSticky?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  destination,
  setDestination,
  isSticky = false,
}) => {
  const router = useRouter();

  return (
    <View
      style={[
        styles.searchBar,
        isSticky && styles['searchBar--sticky'],
      ]}
    >
      {isSticky && (
        <TouchableOpacity style={styles.searchBar__backButton}>
          <Icon name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      )}

      <View style={styles.searchBar__inputContainer}>
        <PickPoint
          style={styles.searchBar__locationIcon}
          width={28}
          height={28}
        />
        <TouchableOpacity
          style={styles.searchBar__input}
          onPress={() => router.push('/bookingFlow/pickLocation/pickScreen')}
        >
          <Text style={styles.searchBar__inputText}>Where to?</Text>
        </TouchableOpacity>
        <ButtonF
          theme="st_mini"
          size="mini"
          radius="mini"
          title="Now"
          bgColor={colors.secondary}
          onPress={() => router.push('/bookingFlow/pickLocation/pickScreen')}
          containerStyles={{ marginVertical: spacing.none }} 
        />
      </View>
    </View>
  );
};

// Styles theo BEM
export const styles = StyleSheet.create({
  searchBar: {
    ...commonStyles.flexRow,
    alignItems: 'center',
    backgroundColor: colors.backgroundPrimary, 
    borderRadius: spacing.md, 
    paddingTop: spacing.sm, 
  },

  'searchBar--sticky': {
    paddingLeft: spacing.xxxl,
  },

  searchBar__backButton: {
    position: 'absolute',
    left: spacing.none,
    zIndex: 10,
    padding: spacing.xs,
  },

  searchBar__inputContainer: {
    flex: 1,
    ...commonStyles.flexRow,
    alignItems: 'center',
    padding: spacing.sm,
    borderRadius: spacing.md,
    borderWidth: 1,
  },

  searchBar__locationIcon: {
    marginRight: spacing.sm,
    marginTop: spacing.xs / 2,
  },

  searchBar__input: {
    flex: 1,
    marginLeft: spacing.sm,
  },

  searchBar__inputText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});

export default SearchBar;