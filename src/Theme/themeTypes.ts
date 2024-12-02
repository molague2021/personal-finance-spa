/* eslint-disable no-unused-vars */
import { CSSProperties } from 'react';

import {
  Beige,
  Blue,
  BlueGrey,
  DeepOrange,
  Green,
  LightBlue,
  LightGreen,
  Orange,
  Pink,
  Purple,
  Red,
  Teal,
  Yellow,
} from './colors';

declare module '@mui/material' {
  interface Color {
    A50?: string;
    A300?: string;
    A500?: string;
    A600?: string;
    A800?: string;
    A900?: string;
  }
}
declare module '@mui/material' {
  interface Palette {
    beige: Beige;
    blue: Blue;
    blueGrey: BlueGrey;
    deepOrange: DeepOrange;
    green: Green;
    lightBlue: LightBlue;
    lightGreen: LightGreen;
    orange: Orange;
    pink: Pink;
    purple: Purple;
    red: Red;
    teal: Teal;
    yellow: Yellow;
    danger: Palette['primary'];
  }

  interface PaletteOptions {
    beige: Beige;
    blue: Blue;
    blueGrey: BlueGrey;
    deepOrange: DeepOrange;
    green: Green;
    lightBlue: LightBlue;
    lightGreen: LightGreen;
    orange: Orange;
    pink: Pink;
    purple: Purple;
    red: Red;
    teal: Teal;
    yellow: Yellow;
    danger: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    subtitle3: CSSProperties;
  }

  interface TypographyVariantsOptions {
    subtitle3?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    danger: true;
  }
}
