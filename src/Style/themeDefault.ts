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

export default {
    fontSize,
}


