import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.07 25H7.72a.75.75 0 01-.07-1.5H9.5V21H4.25C3.01 21 2 20 2 18.75V5.25C2 4.01 3 3 4.25 3h19.5C24.99 3 26 4 26 5.25v9.18a3.73 3.73 0 00-1.5-.42V5.25a.75.75 0 00-.75-.75H4.25a.75.75 0 00-.75.75v13.5c0 .42.34.75.75.75H11v4.75c0 .26.03.5.07.75zm3.68-10A2.75 2.75 0 0012 17.75v6.5A2.75 2.75 0 0014.75 27h9.5A2.75 2.75 0 0027 24.25v-6.5A2.75 2.75 0 0024.25 15h-9.5zm.75 9.25c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75zm0-5.25a1 1 0 110-2 1 1 0 010 2zm3 2a1 1 0 11-2 0 1 1 0 012 0zm1-2a1 1 0 110-2 1 1 0 010 2zm3 2a1 1 0 11-2 0 1 1 0 012 0zm1-2a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const DesktopKeyboard28Regular = wrapIcon(rawSvg({}), 'DesktopKeyboard28Regular');
export default DesktopKeyboard28Regular;
      