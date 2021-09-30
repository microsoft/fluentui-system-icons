import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a3 3 0 00-3 3c0 2.23.79 5.2 1.22 6.69.24.79.97 1.31 1.78 1.31s1.54-.52 1.78-1.31C12.2 10.2 13 7.25 13 5a3 3 0 00-3-3z" fill={primaryFill} /><path d="M10 14a2 2 0 100 4 2 2 0 000-4z" fill={primaryFill} /></svg>;
}

const ImportantFilled = wrapIcon(rawSvg({}), 'ImportantFilled');
export default ImportantFilled;
      