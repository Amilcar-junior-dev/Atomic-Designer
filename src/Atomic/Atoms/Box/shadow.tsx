import React from 'react';
import { shadowOptions } from '../../constants/tokens';
import { BoxShadow } from './index';
import { PropsBoxShadow } from './Models';

function Shadow({ width,
    height,
    alignItems,
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    flexDirection,
    justifyContent,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    pd,
    position,
    children,
    index,
    type = 'level1'
}: PropsBoxShadow) {
    console.log('TESTE SHADOW IN SHADOW',shadowOptions(type))
    return (
        <BoxShadow
            width={width}
            height={height}
            alignItems={alignItems}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            borderRadius={borderRadius}
            borderWidth={borderWidth}
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            marginBottom={marginBottom}
            marginTop={marginTop}
            marginLeft={marginLeft}
            marginRight={marginRight}
            pd={pd}
            position={position}
            shadow={shadowOptions(type).level}
            style={{
                shadowOpacity:shadowOptions(type).opacity,
                elevation:shadowOptions(type).elevation,
            }}
            index={index}>
                
            {children}
        </BoxShadow>
    )
}
export default Shadow;