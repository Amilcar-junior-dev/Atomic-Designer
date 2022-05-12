import React, { Children } from 'react';
import { PropsContainerScrollHorizontal } from './Models';
import { ViewContainerScrollHorizontal } from './view'

export const ContainerScrollHorizontall: React.FC<PropsContainerScrollHorizontal> = ({
    children,
}) => {
    return (
        <ViewContainerScrollHorizontal>
            {children}
        </ViewContainerScrollHorizontal>
    )
}
