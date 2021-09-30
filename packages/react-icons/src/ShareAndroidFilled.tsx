import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.5a2.5 2.5 0 01-4.47 1.54L7.92 9.35a2.5 2.5 0 010 1.3l4.61 2.3a2.5 2.5 0 11-.45.9l-4.61-2.3a2.5 2.5 0 110-3.1l4.61-2.3A2.5 2.5 0 1117 5.5z" fill={primaryFill} /></svg>;
}

const ShareAndroidFilled = wrapIcon(rawSvg({}), 'ShareAndroidFilled');
export default ShareAndroidFilled;
      