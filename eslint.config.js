import { mergeConfigs } from '@cyberskill/shared/config';

export default mergeConfigs('eslint', {
    rules: {
        'react-refresh/only-export-components': 'off',
        'react-hooks-extra/no-unnecessary-use-prefix': 'off',
    },
});
