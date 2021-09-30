import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.7 12L2.3 3.27a.75.75 0 01.94-.98l.1.04 18 9c.51.26.54.97.1 1.28l-.1.06-18 9a.75.75 0 01-1.07-.85l.03-.1L5.7 12 2.3 3.27 5.7 12zM4.4 4.54l2.61 6.71h6.63c.38 0 .7.28.74.65v.1c0 .38-.27.7-.64.74l-.1.01H7l-2.6 6.71L19.31 12 4.4 4.54z" fill={primaryFill} /></svg>;
}

const Send24Regular = wrapIcon(rawSvg({}), 'Send24Regular');
export default Send24Regular;
      