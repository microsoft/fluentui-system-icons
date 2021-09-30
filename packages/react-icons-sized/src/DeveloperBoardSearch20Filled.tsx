import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 9a2 2 0 11-4 0 2 2 0 014 0zM8.5 1c.28 0 .5.22.5.5V3h1.5V1.5a.5.5 0 011 0V3H13V1.5a.5.5 0 011 0V3h.5A2.5 2.5 0 0117 5.5V6h1.5a.5.5 0 010 1H17v1.5h1.5a.5.5 0 010 1H17V11h1.5a.5.5 0 010 1H17v.5a2.5 2.5 0 01-2.5 2.5H14v1.5a.5.5 0 01-1 0V15h-1.5v1.5a.5.5 0 01-1 0V15H8.74a4.5 4.5 0 00-5.68-5.76.5.5 0 01.44-.74H5V7H3.5a.5.5 0 010-1H5v-.5A2.5 2.5 0 017.5 3H8V1.5c0-.28.22-.5.5-.5zM11 12a3 3 0 100-6 3 3 0 000 6zm-6.5 5c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 00.7-.7L7.3 15.6A3.5 3.5 0 104.5 17zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /></svg>;
}

const DeveloperBoardSearch20Filled = wrapIcon(rawSvg({}), 'DeveloperBoardSearch20Filled');
export default DeveloperBoardSearch20Filled;
      