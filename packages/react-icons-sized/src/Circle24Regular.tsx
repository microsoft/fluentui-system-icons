import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2 12a10 10 0 1120 0 10 10 0 01-20 0z" fill={primaryFill} /></svg>;
}

const Circle24Regular = wrapIcon(rawSvg({}), 'Circle24Regular');
export default Circle24Regular;
      