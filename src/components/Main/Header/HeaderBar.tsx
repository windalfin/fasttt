import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform } from 'react-native';

import headerBarStyles from './HeaderBarStyles'; // Replace with the actual path if the styles are in a separate file

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const HeaderBar = () => (
    <Appbar.Header style={headerBarStyles.header}>
        <Appbar.Content
            title="FASTTT"
            titleStyle={headerBarStyles.title} />
        <Appbar.Action
            icon={MORE_ICON}
            color={headerBarStyles.moreIcon.color} onPress={() => { }} />
        <Appbar.Action
            icon="bell"
            color={headerBarStyles.moreIcon.color} onPress={() => { }} />
    </Appbar.Header>
);

export default HeaderBar;
