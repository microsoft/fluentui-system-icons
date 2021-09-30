import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.28 8c.97 0 1.75.78 1.75 1.75v4.5c0 .97-.78 1.75-1.75 1.75H3.75C2.78 16 2 15.22 2 14.25v-4.5c0-.92.7-1.67 1.6-1.74L3.76 8h5.53zm10.97 0c.97 0 1.75.78 1.75 1.75v4.5c0 .97-.78 1.75-1.75 1.75h-5.53c-.97 0-1.75-.78-1.75-1.75v-4.5c0-.97.78-1.75 1.75-1.75h5.53zM9.28 9.5H3.7a.25.25 0 00-.19.25v4.5c0 .14.11.25.25.25h5.53c.14 0 .25-.11.25-.25v-4.5a.25.25 0 00-.25-.25zm10.97 0h-5.53a.25.25 0 00-.25.25v4.5c0 .14.11.25.25.25h5.53c.14 0 .25-.11.25-.25v-4.5a.25.25 0 00-.25-.25z" fill={primaryFill} /></svg>;
}

const MatchAppLayout24Regular = wrapIcon(rawSvg({}), 'MatchAppLayout24Regular');
export default MatchAppLayout24Regular;
      