import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1a6 6 0 016 6c0 2.87-1.94 5.5-5.73 7.92a.5.5 0 01-.54 0C3.93 12.51 2 9.87 2 7a6 6 0 016-6zm0 1a5 5 0 00-5 5c0 2.33 1.54 4.56 4.68 6.7l.32.2.32-.2C11.46 11.55 13 9.32 13 7a5 5 0 00-5-5zm0 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
}

const Location16Regular = wrapIcon(rawSvg({}), 'Location16Regular');
export default Location16Regular;
      