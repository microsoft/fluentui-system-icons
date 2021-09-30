import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.26 11.6A6.97 6.97 0 0110 6c3.2 0 6.06 2.33 6.74 5.6a.5.5 0 00.98-.2A7.97 7.97 0 0010 5a7.97 7.97 0 00-7.72 6.4.5.5 0 00.98.2z" fill={primaryFill} /><path d="M9.99 8a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /></svg>;
}

const EyeShowFilled = wrapIcon(rawSvg({}), 'EyeShowFilled');
export default EyeShowFilled;
      