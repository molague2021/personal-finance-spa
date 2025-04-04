import { cyan as muiCyan } from '@mui/material/colors';

const orange = {
  50: '#FFF2E1',
  100: '#FFDEB5',
  200: '#FFC985',
  300: '#FFB357',
  400: '#FFA238',
  500: '#FF9325',
  600: '#FB8724',
  700: '#F47822',
  800: '#ED6A21',
  900: '#E24F1F',
} as const;

const deepOrange = {
  50: '#FCE9E6',
  100: '#FFCCB9',
  200: '#FFAA8C',
  300: '#FF885D',
  400: '#FF6E38',
  500: '#FF540D',
  600: '#F74E07',
  700: '#E94801',
  800: '#DB3F00',
  900: '#C33000',
} as const;

const pink = {
  50: '#FFECF1',
  100: '#FFD0D9',
  200: '#F19EA6',
  300: '#E97983',
  400: '#F65865',
  500: '#FC464E',
  600: '#EE3E4D',
  700: '#DB3545',
  800: '#CE2E3E',
  900: '#BF2433',
} as const;

const red = {
  50: '#FEDDE2',
  100: '#FAA9B8',
  200: '#ED728A',
  300: '#DD365E',
  400: '#D00041',
  500: '#C30025',
  600: '#B50025',
  700: '#A20024',
  800: '#8F0023',
  900: '#6E0021',
} as const;

const purple = {
  50: '#EFE5F7',
  100: '#D5BFEC',
  200: '#BA94E0',
  300: '#9E68D1',
  400: '#8846C4',
  500: '#7321B6',
  600: '#6A1BB1',
  700: '#5D10A8',
  800: '#5107A0',
  900: '#3E0093',
} as const;

const blue = {
  50: '#E2F2FF',
  100: '#B8DEFF',
  200: '#87CBFF',
  300: '#49B6FF',
  400: '#00A4FF',
  500: '#0094FF',
  600: '#0085FF',
  700: '#0071FF',
  800: '#005FEC',
  900: '#1D3BCD',
  A50: '#F5FAFF',
} as const;

const lightBlue = {
  50: '#E3F5FC',
  100: '#B8E4F8',
  200: '#8CD2F3',
  300: '#67C1ED',
  400: '#53B4E9',
  500: '#49A7E4',
  600: '#4499D6',
  700: '#3D86C2',
  800: '#3875AD',
  900: '#2E568A',
} as const;

const blueGrey = {
  50: '#E7E9EF',
  100: '#C3C8D8',
  200: '#9DA5BE',
  300: '#7883A3',
  400: '#5D6891',
  500: '#424F81',
  600: '#3C4878',
  700: '#343F6D',
  800: '#2D3660',
  900: '#222648',
  A50: '#DAE2E9',
  A100: '#D2D8E1',
  A200: '#A9B3BE',
  A300: '#A2B6CA',
  A400: '#758BA3',
  A600: '#54687F',
} as const;

const teal = {
  50: '#DEF5F0',
  100: '#AEE5D8',
  200: '#76D5BF',
  300: '#2EC3A5',
  400: '#00B592',
  500: '#00A680',
  600: '#009873',
  700: '#008763',
  800: '#007755',
  900: '#005A39',
  A300: '#2FC3A6',
} as const;

const green = {
  50: '#E5FDF0',
  90: '#277C78',
  100: '#C6F8DC',
  200: '#A5F2C9',
  300: '#7EEDB4',
  400: '#5CE6A1',
  500: '#34E08F',
  600: '#2BCF83',
  700: '#20BA75',
  800: '#18A868',
  900: '#068751',
} as const;

const lightGreen = {
  50: '#F8FDED',
  100: '#EDF9D2',
  200: '#E2F6B7',
  300: '#D6F299',
  400: '#C0E969',
  500: '#98C254',
  600: '#84AE4A',
  700: '#557716',
  800: '#48670E',
  900: '#304A01',
} as const;

const yellow = {
  100: '#F2CDAC',
  300: '#F8F7EF',
  400: '#F7F5E5',
  500: '#F6F3D5',
  600: '#F2E29C',
  700: '#F6DB68',
  800: '#FBD334',
  900: '#FFCB00',
} as const;

const grey = {
  50: '#F7F8FA',
  100: '#F2F2F2',
  200: '#E4E5E7',
  300: '#B3B3B3',
  400: '#AFB0B2',
  500: '#696868',
  600: '#676869',
  700: '#545456',
  800: '#353638',
  900: '#201F24',
  A50: '#F0F3F7',
  A100: '#EDEFF4',
  A200: '#D5D5D5',
  A300: '#AAAAAA',
  A400: '#616161',
  A700: '#303030',
} as const;

const cyan = {
  ...muiCyan,
  90: '#E0F7FA',
};

const beige = {
  A100: '#F8F4F0',
  A500: '#98908B',
} as const;

const common = {
  black: '#000000',
  white: '#FFFFFF',
} as const;

const colors = {
  orange,
  deepOrange,
  pink,
  red,
  purple,
  blue,
  lightBlue,
  teal,
  green,
  lightGreen,
  yellow,
  grey,
  blueGrey,
  beige,
  cyan,
  common,
} as const;

export type Orange = typeof orange;
export type DeepOrange = typeof deepOrange;
export type Pink = typeof pink;
export type Red = typeof red;
export type Purple = typeof purple;
export type Blue = typeof blue;
export type LightBlue = typeof lightBlue;
export type Teal = typeof teal;
export type Green = typeof green;
export type LightGreen = typeof lightGreen;
export type Yellow = typeof yellow;
export type Grey = typeof grey;
export type BlueGrey = typeof blueGrey;
export type Common = typeof common;
export type Beige = typeof beige;
export type Cyan = typeof cyan;
export type Colors = typeof colors;

export {
  orange,
  deepOrange,
  pink,
  red,
  purple,
  blue,
  lightBlue,
  teal,
  green,
  lightGreen,
  yellow,
  grey,
  blueGrey,
  common,
  beige,
  cyan,
  colors,
};
