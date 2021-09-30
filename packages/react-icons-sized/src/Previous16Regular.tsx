import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.42 13.85a1 1 0 001.58-.81V2.97a1 1 0 00-1.58-.82L5.3 7.18a1 1 0 000 1.64l7.13 5.03zm.58-.81L5.87 8 13 2.97v10.07z" fill={primaryFill} /><path d="M2 13.5a.5.5 0 001 0v-11a.5.5 0 00-1 0v11z" fill={primaryFill} /></svg>;
}

const Previous16Regular = wrapIcon(rawSvg({}), 'Previous16Regular');
export default Previous16Regular;
      