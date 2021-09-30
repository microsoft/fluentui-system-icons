import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 25.25a.75.75 0 001.5 0V2.75a.75.75 0 00-1.5 0v22.5zM2 6.75A2.75 2.75 0 014.75 4H12v20H4.75A2.75 2.75 0 012 21.25V6.75zM22.75 24H15.5V4h7.25a2.75 2.75 0 012.75 2.75v14.5A2.75 2.75 0 0122.75 24z" fill={primaryFill} /></svg>;
}

const SplitVertical28Filled = wrapIcon(rawSvg({}), 'SplitVertical28Filled');
export default SplitVertical28Filled;
      