import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 2a2.75 2.75 0 012.75 2.75v14.5a2.75 2.75 0 11-5.5 0V4.75A2.75 2.75 0 0111.75 2zm7 5a2.75 2.75 0 012.75 2.75v9.5a2.75 2.75 0 11-5.5 0v-9.5A2.75 2.75 0 0118.75 7zm-14 5a2.75 2.75 0 012.75 2.75v4.5a2.75 2.75 0 01-5.5 0v-4.5A2.75 2.75 0 014.75 12z" fill={primaryFill} /></svg>;
}

const Poll24Filled = wrapIcon(rawSvg({}), 'Poll24Filled');
export default Poll24Filled;
      