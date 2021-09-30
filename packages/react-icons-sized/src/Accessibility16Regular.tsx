import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 1a2.25 2.25 0 00-2.18 2.8l-1.84-.7a1.6 1.6 0 00-1.19 2.98L5 7v2.4l-1.16 3.48a1.6 1.6 0 003.03 1.06L8 10.91l1.13 3.03a1.6 1.6 0 003.03-1.06L11 9.4V7l2.18-.9a1.61 1.61 0 00-1.19-3l-1.8.69A2.25 2.25 0 008 1zM6.75 3.25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm5.6.78a.61.61 0 01.45 1.14l-2.5 1.04a.5.5 0 00-.3.46v2.8c0 .06 0 .11.02.16l1.18 3.56a.6.6 0 01-1.15.4l-1.19-3.2a.93.93 0 00-1.74 0l-1.19 3.2a.6.6 0 01-1.14-.4l1.18-3.55A.5.5 0 006 9.48v-2.8a.5.5 0 00-.3-.47L3.17 5.16a.6.6 0 01.44-1.13L7.2 5.4c.5.19 1.07.19 1.59 0l3.56-1.36z" fill={primaryFill} /></svg>;
}

const Accessibility16Regular = wrapIcon(rawSvg({}), 'Accessibility16Regular');
export default Accessibility16Regular;
      