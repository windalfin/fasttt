import { StyleSheet } from 'react-native';
import { useTheme } from '@/hooks';
const { Colors, Fonts } = useTheme();


const headerBarStyles = StyleSheet.create({
    header: {
        height: 44,
        backgroundColor: Colors.primary,
    },
    backButton: {
        color: Colors.headerIconColor,
    },
    title: {
        color: Colors.headerIconColor,
	fontWeight: 'bold',
    },
    moreIcon: {
        color: Colors.headerIconColor,
    },
});

export default headerBarStyles;
