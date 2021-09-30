import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a7.5 7.5 0 00-1.25 14.9V23h-7.5a3.75 3.75 0 00-3.75 3.75v2.35a7.5 7.5 0 102.5 0v-2.35c0-.7.56-1.25 1.25-1.25h17.5c.69 0 1.25.56 1.25 1.25v2.35a7.5 7.5 0 102.5 0v-2.35A3.75 3.75 0 0032.75 23h-7.5v-4.1A7.5 7.5 0 0024 4zm-5 7.5a5 5 0 1110 0 5 5 0 01-10 0zm-11.25 25a5 5 0 1110 0 5 5 0 01-10 0zm27.5-5a5 5 0 110 10 5 5 0 010-10z" fill={primaryFill} /></svg>;
}

const Organization48Regular = wrapIcon(rawSvg({}), 'Organization48Regular');
export default Organization48Regular;
      