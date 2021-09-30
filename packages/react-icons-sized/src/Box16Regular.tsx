import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.92 1.38a3 3 0 012.16 0l4.96 1.9c.58.23.96.79.96 1.4v6.63a1.5 1.5 0 01-.96 1.4l-4.96 1.91a3 3 0 01-2.16 0l-4.96-1.9a1.5 1.5 0 01-.96-1.4V4.68c0-.62.38-1.18.96-1.4l4.96-1.91zm1.8.93a2 2 0 00-1.44 0l-1.38.53 5.59 2.12 1.95-.83L8.72 2.3zM14 4.97L8.5 7.33v6.43l.22-.07 4.96-1.91a.5.5 0 00.32-.47V4.97zm-6.5 8.79V7.33L2 4.97v6.34c0 .21.13.4.32.47l4.96 1.9c.07.04.15.06.22.08zM2.56 4.13L8 6.46l2.16-.93L4.5 3.38l-1.94.75z" fill={primaryFill} /></svg>;
}

const Box16Regular = wrapIcon(rawSvg({}), 'Box16Regular');
export default Box16Regular;
      