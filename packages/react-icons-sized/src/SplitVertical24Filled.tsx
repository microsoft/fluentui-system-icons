import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 2.75a.75.75 0 00-1.5 0v18.5a.75.75 0 001.5 0V2.75zM2 6.25C2 5.01 3 4 4.25 4H10v16H4.25C3.01 20 2 19 2 17.75V6.25zM19.25 20H13.5V4h5.75c1.24 0 2.25 1 2.25 2.25v11.5c0 1.24-1 2.25-2.25 2.25z" fill={primaryFill} /></svg>;
}

const SplitVertical24Filled = wrapIcon(rawSvg({}), 'SplitVertical24Filled');
export default SplitVertical24Filled;
      