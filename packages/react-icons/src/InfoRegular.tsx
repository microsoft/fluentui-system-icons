import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8.91a.5.5 0 00-1 .09v4.6a.5.5 0 001-.1V8.91z" fill={primaryFill} /><path d="M10.8 6.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" fill={primaryFill} /><path d="M18 10a8 8 0 10-16 0 8 8 0 0016 0zM3 10a7 7 0 1114 0 7 7 0 01-14 0z" fill={primaryFill} /></svg>;
}

const InfoRegular = wrapIcon(rawSvg({}), 'InfoRegular');
export default InfoRegular;
      