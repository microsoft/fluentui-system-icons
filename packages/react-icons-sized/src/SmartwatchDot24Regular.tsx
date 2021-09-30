import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 2a2 2 0 011.79 1.1 3.49 3.49 0 00.21 3.2v.1l.1.06c.25.37.57.69.94.94.29.46.46 1.01.46 1.6v1a1 1 0 011 1v1a1 1 0 01-1 1v2a3 3 0 01-1.5 2.6V20a2 2 0 01-2 2h-5a2 2 0 01-2-2v-2.4A3 3 0 016 15V9a3 3 0 011.5-2.6V4c0-1.1.9-2 2-2h5zm-5 1.5A.5.5 0 009 4v2h6V4a.5.5 0 00-.5-.5h-5zm7 11.5V9c0-.83-.67-1.5-1.5-1.5H9c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5zM9 20c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-2H9v2zM22 4.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const SmartwatchDot24Regular = wrapIcon(rawSvg({}), 'SmartwatchDot24Regular');
export default SmartwatchDot24Regular;
      