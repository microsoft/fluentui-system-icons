import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.84 16.72a.76.76 0 01-.59.28.73.73 0 01-.53-.22l-3-3a.75.75 0 011.06-1.07l1.72 1.73V3.75a.75.75 0 011.5 0v10.68l1.72-1.71a.75.75 0 111.06 1.06l-2.94 2.94zM6.34 3.28A.76.76 0 005.75 3c-.2 0-.38.07-.53.22l-3 3A.75.75 0 003.28 7.3L5 5.56v10.69a.75.75 0 001.5 0V5.57l1.72 1.71a.75.75 0 101.06-1.06L6.34 3.28z" fill={primaryFill} /></svg>;
}

const ArrowSort20Filled = wrapIcon(rawSvg({}), 'ArrowSort20Filled');
export default ArrowSort20Filled;
      