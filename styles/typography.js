import {scaleFont} from './mixins';

export const FONT_FAMILY_REGULAR = 'Lato-Regular';
export const FONT_FAMILY_BOLD = 'Lato-Bold';
export const FONT_FAMILY_BLACK = 'Lato-Black';

export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';
export const FONT_WEIGHT_BLACK = '900';

export const FONT_SIZE_48 = scaleFont(48);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_BLACK = {
  fontFamily: FONT_FAMILY_BLACK,
  fontWeight: FONT_WEIGHT_BLACK,
};
