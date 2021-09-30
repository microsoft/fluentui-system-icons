import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 13v9h-4A3.25 3.25 0 014 18.75V13h7.25zM20 13v5.75c0 1.8-1.46 3.25-3.25 3.25h-4v-9H20zM14.5 2a3.25 3.25 0 012.74 5h2.51c.69 0 1.25.47 1.25 1.04v2.92c0 .57-.56 1.04-1.25 1.04h-7V7h-1.5v5h-7C3.56 12 3 11.53 3 10.96V8.04C3 7.47 3.56 7 4.25 7h2.51A3.25 3.25 0 0112 3.17C12.6 2.46 13.5 2 14.5 2zm-5 1.5A1.75 1.75 0 009.36 7H11.25V5.11c-.08-.9-.83-1.61-1.75-1.61zm5 0c-.97 0-1.75.78-1.75 1.75V7h1.75a1.75 1.75 0 100-3.5z" fill={primaryFill} /></svg>;
}

const Gift24Filled = wrapIcon(rawSvg({}), 'Gift24Filled');
export default Gift24Filled;
      