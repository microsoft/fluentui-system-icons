import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.4 4.72l2.72 10.14a2.75 2.75 0 01-1.94 3.37l-6.28 1.68a2.75 2.75 0 01-3.37-1.94L5.81 7.83a2.75 2.75 0 011.95-3.37l6.28-1.68c1.46-.4 2.97.48 3.36 1.94zm-6.43 3.02a1 1 0 10-1.94.52 1 1 0 001.94-.52zM5.8 11.66l1.76 6.57c.19.67.54 1.26 1 1.71l-.44-.02a2.75 2.75 0 01-2.6-2.9l.28-5.36zm-.92-1.48l-.36 6.8c-.03.7.12 1.36.43 1.94l-.42-.17a2.75 2.75 0 01-1.58-3.55l1.93-5.02z" fill={primaryFill} /></svg>;
}

const StyleGuide24Filled = wrapIcon(rawSvg({}), 'StyleGuide24Filled');
export default StyleGuide24Filled;
      