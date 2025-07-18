import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            setHasHydrated(true);
        }, 0);

        return () => {
            clearTimeout(setTimeoutId);
        };
    }, []);

    const colorScheme = useRNColorScheme();

    if (hasHydrated) {
        return colorScheme;
    }

    return 'light';
}
