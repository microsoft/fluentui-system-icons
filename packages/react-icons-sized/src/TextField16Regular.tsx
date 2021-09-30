import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 10.5c0-.28.22-.5.5-.5h.5V6H6v.5a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v1a.5.5 0 01-1 0V6H8.5v4H9a.5.5 0 010 1H7a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M1 5.5A2.5 2.5 0 013.5 3h9A2.5 2.5 0 0115 5.5v5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 011 10.5v-5zM3.5 4C2.67 4 2 4.67 2 5.5v5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-9z" fill={primaryFill} /></svg>;
}

const TextField16Regular = wrapIcon(rawSvg({}), 'TextField16Regular');
export default TextField16Regular;
      