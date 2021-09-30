import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25zM4.5 6.25c0-.97.78-1.75 1.75-1.75h5V7h-1.5A2.75 2.75 0 007 9.75v1.5H4.5v-5zm2.5 6.5v1.5A2.75 2.75 0 009.75 17h1.5v2.5h-5c-.97 0-1.75-.78-1.75-1.75v-5H7zm4.25 2.75h-1.5c-.69 0-1.25-.56-1.25-1.25v-1.5h2.75v2.75zm1.5 1.5h1.5A2.75 2.75 0 0017 14.25v-1.5h2.5v5c0 .97-.78 1.75-1.75 1.75h-5V17zm2.75-4.25v1.5c0 .69-.56 1.25-1.25 1.25h-1.5v-2.75h2.75zm1.5-1.5v-1.5A2.75 2.75 0 0014.25 7h-1.5V4.5h5c.97 0 1.75.78 1.75 1.75v5H17zM12.75 8.5h1.5c.69 0 1.25.56 1.25 1.25v1.5h-2.75V8.5zm-1.5 0v2.75H8.5v-1.5c0-.69.56-1.25 1.25-1.25h1.5z" fill={primaryFill} /></svg>;
}

const SubGrid24Regular = wrapIcon(rawSvg({}), 'SubGrid24Regular');
export default SubGrid24Regular;
      