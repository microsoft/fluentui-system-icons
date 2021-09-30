import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.23 2.7a2.5 2.5 0 013.54 0l3.53 3.53a2.5 2.5 0 010 3.54L9.77 13.3a2.5 2.5 0 01-3.54 0L2.7 9.77a2.5 2.5 0 010-3.54L6.23 2.7zm2.62 1.95a.5.5 0 10-.7.7l.64.65H7.5C6.67 6 6 6.67 6 7.5V10a.5.5 0 001 0V7.5c0-.28.22-.5.5-.5h1.3l-.65.65a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5z" fill={primaryFill} /></svg>;
}

const Directions16Filled = wrapIcon(rawSvg({}), 'Directions16Filled');
export default Directions16Filled;
      