import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10a8 8 0 10-16 0 8 8 0 0016 0zM9.5 8.91a.5.5 0 011 0V13.6a.5.5 0 01-1 0V8.9zm-.25-2.16a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /></svg>;
}

const InfoFilled = wrapIcon(rawSvg({}), 'InfoFilled');
export default InfoFilled;
      