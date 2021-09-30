import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l5.85 5.86C7.44 9.4 7 10.02 7 10.75V12h3.94l1 1h-8.2c-.7 0-1.01.89-.46 1.33L8 18.11v1.64C8 21 9 22 10.25 22h3.5c1.24 0 2.25-1 2.25-2.25v-1.64l.58-.47 4.14 4.14a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M16.18 13l2.76 2.76 1.77-1.43a.75.75 0 00-.47-1.33h-4.06z" fill={primaryFill} /><path d="M12.18 9l3 3H17V10.61C16.92 9.7 16.16 9 15.24 9h-3.06z" fill={primaryFill} /><path d="M12 8a3 3 0 01-.98-.16L9.16 5.98A3 3 0 1112 8z" fill={primaryFill} /></svg>;
}

const PresenterOff24Filled = wrapIcon(rawSvg({}), 'PresenterOff24Filled');
export default PresenterOff24Filled;
      