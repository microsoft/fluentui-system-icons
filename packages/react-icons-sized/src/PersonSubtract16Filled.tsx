import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.63 5.07a5.5 5.5 0 00-3.3 1.85 2.75 2.75 0 113.3-1.85zM5.6 8a5.48 5.48 0 00.62 5.96C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1zm4.9 7a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-2.12-5h4.24a.5.5 0 110 1H8.38a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const PersonSubtract16Filled = wrapIcon(rawSvg({}), 'PersonSubtract16Filled');
export default PersonSubtract16Filled;
      