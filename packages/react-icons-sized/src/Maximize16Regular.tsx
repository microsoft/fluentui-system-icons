import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7zm0 1h7c.28 0 .5.22.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const Maximize16Regular = wrapIcon(rawSvg({}), 'Maximize16Regular');
export default Maximize16Regular;
      