import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 4.5a3.5 3.5 0 005 3.16v10.59A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h10.59c-.22.46-.34.96-.34 1.5zM19.5 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill={primaryFill} /></svg>;
}

const Badge24Filled = wrapIcon(rawSvg({}), 'Badge24Filled');
export default Badge24Filled;
      