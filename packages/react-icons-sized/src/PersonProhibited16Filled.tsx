import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 15a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm-2.8-2.4l4.9-4.9a3.5 3.5 0 00-4.9 4.9zm.7.7a3.5 3.5 0 004.9-4.9l-4.9 4.9zm1.23-8.23a5.5 5.5 0 00-3.3 1.85 2.75 2.75 0 113.3-1.85zM5.6 8a5.48 5.48 0 00.62 5.96C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1z" fill={primaryFill} /></svg>;
}

const PersonProhibited16Filled = wrapIcon(rawSvg({}), 'PersonProhibited16Filled');
export default PersonProhibited16Filled;
      