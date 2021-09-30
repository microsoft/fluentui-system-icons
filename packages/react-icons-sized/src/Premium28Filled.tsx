import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.75 3c.3 0 .6.14.78.37l.07.11 4.25 7a1 1 0 01-.01 1.06l-.08.1-11 13a1 1 0 01-1.44.1l-.08-.1-11-13a1 1 0 01-.15-1.05l.06-.1 4.25-7A1 1 0 017.12 3L7.25 3h13.5zm-3.23 9h-7.04L14 20.67 17.52 12zm5.32 0h-3.17l-2.91 7.2 6.08-7.2zM8.33 12H5.16l6.08 7.2L8.33 12zm1.34-7H7.81l-3.03 5h3.46l1.43-5zm6.58 0h-4.5l-1.43 5h7.36l-1.43-5zm3.94 0h-1.87l1.43 5h3.47L20.2 5z" fill={primaryFill} /></svg>;
}

const Premium28Filled = wrapIcon(rawSvg({}), 'Premium28Filled');
export default Premium28Filled;
      