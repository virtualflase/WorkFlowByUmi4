import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        conCurrentColor: string;
        conditionColor: string;
        primaryColor: string;
    }
}
