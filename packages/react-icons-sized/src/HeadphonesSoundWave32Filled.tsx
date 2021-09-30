import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 4A11.5 11.5 0 004 15.5V18h4a1 1 0 011 1v10a1 1 0 01-1 1H6.5A4.5 4.5 0 012 25.5v-10a13.5 13.5 0 0127 0v10a4.5 4.5 0 01-4.5 4.5H23a1 1 0 01-1-1V19a1 1 0 011-1h4v-2.5A11.5 11.5 0 0015.5 4zm1 13a1 1 0 10-2 0v13a1 1 0 102 0V17zM12 20a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm8 1a1 1 0 10-2 0v5a1 1 0 102 0v-5z" fill={primaryFill} /></svg>;
}

const HeadphonesSoundWave32Filled = wrapIcon(rawSvg({}), 'HeadphonesSoundWave32Filled');
export default HeadphonesSoundWave32Filled;
      