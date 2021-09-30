import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 5.5a2.5 2.5 0 11.53 1.54L7.92 9.35a2.5 2.5 0 010 1.3l4.61 2.3a2.5 2.5 0 11-.45.9l-4.61-2.3a2.5 2.5 0 110-3.1l4.61-2.3A2.5 2.5 0 0112 5.5zM14.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM4 10a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" fill={primaryFill} /></svg>;
}

const ShareAndroid20Regular = wrapIcon(rawSvg({}), 'ShareAndroid20Regular');
export default ShareAndroid20Regular;
      