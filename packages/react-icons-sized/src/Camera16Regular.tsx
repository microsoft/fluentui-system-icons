import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8a3 3 0 11-6 0 3 3 0 016 0zm-1 0a2 2 0 10-4 0 2 2 0 004 0zM6.62 2a1.5 1.5 0 00-1.34.83L4.69 4H4a2 2 0 00-2 2v5c0 1.1.9 2 2 2h8a2 2 0 002-2V6a2 2 0 00-2-2h-.7l-.58-1.17A1.5 1.5 0 009.38 2H6.62zm-.45 1.28A.5.5 0 016.62 3h2.76c.2 0 .36.1.45.28l.72 1.44A.5.5 0 0011 5h1a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h1a.5.5 0 00.45-.28l.72-1.44z" fill={primaryFill} /></svg>;
}

const Camera16Regular = wrapIcon(rawSvg({}), 'Camera16Regular');
export default Camera16Regular;
      