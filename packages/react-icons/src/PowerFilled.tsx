import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 2.5a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6z" fill={primaryFill} /><path d="M13.74 4A.75.75 0 1013 5.3 6 6 0 117 5.3.75.75 0 106.25 4a7.5 7.5 0 107.5 0z" fill={primaryFill} /></svg>;
}

const PowerFilled = wrapIcon(rawSvg({}), 'PowerFilled');
export default PowerFilled;
      