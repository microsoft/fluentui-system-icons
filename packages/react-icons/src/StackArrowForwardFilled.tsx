import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 10a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.6-7.1a.5.5 0 00-.7.7l.9.9h-1.55A2.75 2.75 0 0012 7.25v.25a.5.5 0 001 0v-.25c0-.97.78-1.75 1.75-1.75h1.54l-.9.9a.5.5 0 00.71.7l1.76-1.75a.5.5 0 000-.7L16.1 2.9zM4 3h5.6a5.5 5.5 0 004.4 7.98V11a2 2 0 01-2 2H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm11 7.98c.34-.03.68-.1 1-.19V11a4 4 0 01-4 4H6a2 2 0 01-1.73-1H12a3 3 0 003-3v-.02zm3-1.24c-.3.26-.64.48-1 .66v.6a5 5 0 01-5 5H6.27c.34.6.99 1 1.73 1h4a6 6 0 006-6V9.74z" fill={primaryFill} /></svg>;
}

const StackArrowForwardFilled = wrapIcon(rawSvg({}), 'StackArrowForwardFilled');
export default StackArrowForwardFilled;
      