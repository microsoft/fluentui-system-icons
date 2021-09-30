import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 6.4V4c0-1.1.9-2 2-2h5a2 2 0 012 2v2.4A3 3 0 0118 9v1a1 1 0 011 1v1a1 1 0 01-1 1v2a3 3 0 01-1.5 2.6V20a2 2 0 01-2 2h-5a2 2 0 01-2-2v-2.4A3 3 0 016 15V9a3 3 0 011.5-2.6zm2-2.9A.5.5 0 009 4v2h6V4a.5.5 0 00-.5-.5h-5zm7 11.5V9c0-.83-.67-1.5-1.5-1.5H9c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5zM9 20c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-2H9v2z" fill={primaryFill} /></svg>;
}

const Smartwatch24Regular = wrapIcon(rawSvg({}), 'Smartwatch24Regular');
export default Smartwatch24Regular;
      