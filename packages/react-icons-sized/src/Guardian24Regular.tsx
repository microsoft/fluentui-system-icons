import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 5a3 3 0 11-6 0 3 3 0 016 0zM9 5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm10 2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-1.5 0a1 1 0 10-2 0 1 1 0 002 0zm-4.1 3.25a2.75 2.75 0 00-2.65-2h-6A2.75 2.75 0 002 11.5v3a2 2 0 002.5 1.94V20a2 2 0 003.25 1.56A2 2 0 0011 20v-3.56A2 2 0 0013.44 15h.06v5a2 2 0 003.25 1.56A2 2 0 0020 20v-2.81a2 2 0 002.5-1.94V13.5a2.75 2.75 0 00-2.75-2.75H13.4zM11 14.5V12a.75.75 0 00-1.5 0v8a.5.5 0 01-1 0v-3.5a.75.75 0 00-1.5 0V20a.5.5 0 01-1 0v-8a.75.75 0 00-1.5 0v2.5a.5.5 0 01-1 0v-3c0-.69.56-1.25 1.25-1.25h6c.69 0 1.25.56 1.25 1.25v3a.5.5 0 01-1 0zm2.5-2.25h6.25c.69 0 1.25.56 1.25 1.25v1.75a.5.5 0 01-1 0V14a.75.75 0 00-1.5 0v6a.5.5 0 01-1 0v-2.5a.75.75 0 00-1.5 0V20a.5.5 0 01-1 0v-5.75a.75.75 0 00-.75-.75h-.75v-1.25z" fill={primaryFill} /></svg>;
}

const Guardian24Regular = wrapIcon(rawSvg({}), 'Guardian24Regular');
export default Guardian24Regular;
      