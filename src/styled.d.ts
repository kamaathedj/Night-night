/* eslint-disable @typescript-eslint/no-empty-interface */
// import original module declarations
import 'styled-components';
import { ThemeType } from './Store/ModeStore';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
