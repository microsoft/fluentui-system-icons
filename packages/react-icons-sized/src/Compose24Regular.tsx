import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.78 3.28a.75.75 0 10-1.06-1.06l-10 10-.47 1.53 1.53-.47 10-10z" fill={primaryFill} /><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25v-8a.75.75 0 00-1.5 0v8c0 .97-.78 1.75-1.75 1.75H6.25c-.97 0-1.75-.78-1.75-1.75V6.25c0-.97.78-1.75 1.75-1.75h8a.75.75 0 000-1.5h-8z" fill={primaryFill} /></svg>;
}

const Compose24Regular = wrapIcon(rawSvg({}), 'Compose24Regular');
export default Compose24Regular;
      