import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.45 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25zm13.25 5h-8.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const SubtractSquare24Filled = wrapIcon(rawSvg({}), 'SubtractSquare24Filled');
export default SubtractSquare24Filled;
      