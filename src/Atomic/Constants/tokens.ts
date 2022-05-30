import { PropsShadowTokens } from "../../Style/Models";
import {PropsShadowMap} from './Models/index';
import theme from '../../Style/theme';

type MapOptionsAvailable = {
    [key: string]: any;
};

const MapShadow : MapOptionsAvailable = {
    level0: theme.shadow.level0,
    level1: theme.shadow.level1,
    level2: theme.shadow.level2,
    level3: theme.shadow.level3,
    level4: theme.shadow.level4,
    level5: theme.shadow.level5,
}

export const shadowOptions = (type: PropsShadowTokens): PropsShadowMap => {
    if(type){
        return MapShadow.hasdefinedproperty(type)
        ?MapShadow[type]
        :MapShadow['Undefined'];
    }
}