import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 3.5A5.25 5.25 0 008 13.95v1.5A6.75 6.75 0 1115.46 8h-1.51a5.25 5.25 0 00-5.2-4.5z" fill={primaryFill} /><path d="M12.25 9A3.25 3.25 0 009 12.25v6.5c0 1.8 1.46 3.25 3.25 3.25h6.5c1.8 0 3.25-1.46 3.25-3.25v-6.5C22 10.45 20.54 9 18.75 9h-6.5zm-1.75 3.25c0-.97.78-1.75 1.75-1.75h6.5c.97 0 1.75.78 1.75 1.75v6.5c0 .97-.78 1.75-1.75 1.75h-6.5c-.97 0-1.75-.78-1.75-1.75v-6.5z" fill={primaryFill} /></svg>;
}

const Shapes24Regular = wrapIcon(rawSvg({}), 'Shapes24Regular');
export default Shapes24Regular;
      