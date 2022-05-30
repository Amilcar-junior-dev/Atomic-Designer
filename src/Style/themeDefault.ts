import * as colors from '../Settings/colors';
import * as theme from '../Settings/environment';

export const lightColors = {
    ...colors,
};

const fontSize = {
    smaller: theme.FONT_SIZE_SMALLER,
    small: theme.FONT_SIZE_SMALL,
    mide: theme.FONT_SIZE_MIDDE,
    normal: theme.FONT_SIZE_NORMAL,
    big: theme.FONT_SIZE_BIG,
    xbig: theme.FONT_SIZE_XBIG,
    xxbig: theme.FONT_SIZE_XXBIG,
    xxxbig: theme.FONT_SIZE_XXXBIG,
};
const shadow = {
    level0: theme.SHADOW_LEVEL_0,
    level1: theme.SHADOW_LEVEL_1,
    level2: theme.SHADOW_LEVEL_2,
    level3: theme.SHADOW_LEVEL_3,
    level4: theme.SHADOW_LEVEL_4,
    level5: theme.SHADOW_LEVEL_5,
};

export default {
    fontSize,
    shadow
}


