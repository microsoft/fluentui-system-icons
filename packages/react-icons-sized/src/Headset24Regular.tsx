import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 18.5a.75.75 0 100 1.5.75.75 0 000-1.5zm5.5-8.5V9a5.5 5.5 0 10-11 0v1H9a1 1 0 011 1v4a1 1 0 01-1 1H6.5v.25c0 1.2.93 2.17 2.1 2.24l.15.01h1.13a2.25 2.25 0 110 1.5H8.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2V9a7 7 0 0114 0v5a2 2 0 01-1.85 2H15a1 1 0 01-1-.88V11a1 1 0 01.88-1h2.62zm-9 1.5h-2v3h2v-3zm9 0h-2v3H17a.5.5 0 00.5-.41V11.5z" fill={primaryFill} /></svg>;
}

const Headset24Regular = wrapIcon(rawSvg({}), 'Headset24Regular');
export default Headset24Regular;
      