import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.3 10l4.85 4.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L3 3.71v9.79a.5.5 0 001 0V10h5.3zm-1-1H4V4.7L8.3 9zm3.73 0h-.9l1 1H13a.5.5 0 00.4-.8L11.12 6l2.3-3.2A.5.5 0 0013 2H4.12l1 1h6.9L10.1 5.7a.5.5 0 000 .6L12.03 9z" fill={primaryFill} /></svg>;
}

const FlagOff16Regular = wrapIcon(rawSvg({}), 'FlagOff16Regular');
export default FlagOff16Regular;
      