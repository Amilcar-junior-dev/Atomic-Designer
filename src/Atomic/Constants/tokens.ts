import { PropsShadowTokens } from "../../Style/Models";
import { PropsShadowMap } from './Models/index';
import theme from '../../Style/theme';

type MapOptionsAvailable = {
    [key: string]: any;
};

const Mapshadow: MapOptionsAvailable = {
    level1: theme.shadow.level1,
    level2: theme.shadow.level2,
    level3: theme.shadow.level3,
    level4: theme.shadow.level4,
    level5: theme.shadow.level5,
    none: theme.shadow.level0,
    undefined: theme.shadow.level1,
  };
  
  export const shadowOptions = (type: PropsShadowTokens): PropsShadowMap => {
    if (type) {
      return Mapshadow.hasOwnProperty(type)
        ? Mapshadow[type]
        : Mapshadow['undefined'];
    }
  
    return Mapshadow['undefined'];
  };