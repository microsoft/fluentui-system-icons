import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.04 2.78c1.46-.4 2.97.48 3.36 1.94l2.72 10.14a2.75 2.75 0 01-1.94 3.37l-6.28 1.68a2.75 2.75 0 01-3.37-1.94L5.81 7.83a2.75 2.75 0 011.95-3.37l6.28-1.68zM5.8 11.66l1.76 6.57c.19.67.54 1.26 1 1.71l-.44-.02a2.75 2.75 0 01-2.6-2.9l.28-5.36zm8.62-7.43L8.15 5.9c-.67.18-1.07.86-.89 1.53l2.72 10.14c.18.67.86 1.06 1.53.89l6.28-1.69c.67-.18 1.06-.86.88-1.53L15.96 5.11a1.25 1.25 0 00-1.54-.88zm-9.54 5.95l-.36 6.8c-.03.7.12 1.36.43 1.94l-.42-.17a2.75 2.75 0 01-1.58-3.55l1.93-5.02zm4.86-3.15a1 1 0 11.52 1.94 1 1 0 01-.52-1.94z" fill={primaryFill} /></svg>;
}

const StyleGuide24Regular = wrapIcon(rawSvg({}), 'StyleGuide24Regular');
export default StyleGuide24Regular;
      