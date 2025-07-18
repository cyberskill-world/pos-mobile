import { mergeConfigs } from '@cyberskill/shared/config';

export default mergeConfigs('eslint', {
    ignores: ['src/modules/graphql/generated'],
    rules: {
        'react-refresh/only-export-components': 'off',
        'react-hooks-extra/no-unnecessary-use-prefix': 'off',
    },
});
