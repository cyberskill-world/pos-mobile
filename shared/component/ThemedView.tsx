import type { ViewProps } from 'react-native';

import { View } from 'react-native';

import { useThemeColor } from '#shared/hook/useThemeColor';

export type ThemedViewProps = ViewProps & {
    lightColor?: string | undefined;
    darkColor?: string | undefined;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    const backgroundColor = useThemeColor(
        { light: lightColor ?? '', dark: darkColor ?? '' },
        'background',
    );

    return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
