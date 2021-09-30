import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z" fill={primaryFill} /><path d="M13.74 4a.5.5 0 10-.5.87 6.5 6.5 0 11-6.49 0 .5.5 0 10-.5-.87 7.5 7.5 0 107.5 0z" fill={primaryFill} /></svg>;
}

const Power20Regular = wrapIcon(rawSvg({}), 'Power20Regular');
export default Power20Regular;
      