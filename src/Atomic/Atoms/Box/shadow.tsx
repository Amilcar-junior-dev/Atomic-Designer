import React from 'react';
import { BoxShadow } from './index';
import { PropsBoxShadow } from './Models';

function Shadow({ width,
    height,
    shadow,
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
    return (
        <BoxShadow
            width={width}
            height={height}
            shadow={shadow}
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
            style={{
                shadowOpacity: 0.04,
                elevation: 10

            }}
            index={index}>
            {children}
        </BoxShadow>
    )
}
export default Shadow;