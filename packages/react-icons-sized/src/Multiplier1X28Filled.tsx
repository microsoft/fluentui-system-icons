import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 9a1 1 0 00-1.86-.52v.01a2.97 2.97 0 01-.17.25 8.13 8.13 0 01-2.49 2.4 1 1 0 001.03 1.72A9.18 9.18 0 0010 11.73V19a1 1 0 102 0V9zm3.7 5.3a1 1 0 00-1.4 1.4l1.29 1.3-1.3 1.3a1 1 0 001.42 1.4L17 18.42l1.3 1.3a1 1 0 001.4-1.42L18.42 17l1.3-1.3a1 1 0 00-1.42-1.4L17 15.58l-1.3-1.3z" fill={primaryFill} /></svg>;
}

const Multiplier1X28Filled = wrapIcon(rawSvg({}), 'Multiplier1X28Filled');
export default Multiplier1X28Filled;
      