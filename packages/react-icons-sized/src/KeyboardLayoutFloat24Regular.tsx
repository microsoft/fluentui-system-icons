import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 19.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6zM19.75 3C20.99 3 22 4 22 5.25v9.5C22 16 20.99 17 19.75 17h-6.53a1.25 1.25 0 01-2.44 0H4.25C3.01 17 2 16 2 14.75v-9.5C2 4.01 3 3 4.25 3h15.5zm0 1.5H4.25a.75.75 0 00-.75.75v9.5c0 .42.34.75.75.75h15.5c.41 0 .75-.33.75-.75v-9.5a.75.75 0 00-.75-.75zm-2.5 8a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h10.6zM16.5 9a1 1 0 110 2 1 1 0 010-2zm-6 0a1 1 0 110 2 1 1 0 010-2zm-3 0a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2zM6 6a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
}

const KeyboardLayoutFloat24Regular = wrapIcon(rawSvg({}), 'KeyboardLayoutFloat24Regular');
export default KeyboardLayoutFloat24Regular;
      