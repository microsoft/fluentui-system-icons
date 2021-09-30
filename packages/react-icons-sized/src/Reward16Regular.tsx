import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2C2.67 2 2 2.67 2 3.5v1.2c0 .51.27 1 .71 1.27l3.87 2.39a3 3 0 102.84 0l3.87-2.4c.44-.26.71-.75.71-1.27V3.5c0-.83-.67-1.5-1.5-1.5h-9zM3 3.5c0-.28.22-.5.5-.5H5v3.2L3.24 5.13A.5.5 0 013 4.69V3.5zm3 3.33V3h4v3.83L8.26 7.9a.5.5 0 01-.52 0L6 6.83zm5-.62V3h1.5c.28 0 .5.22.5.5v1.2a.5.5 0 01-.24.42L11 6.2zM6 11a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /></svg>;
}

const Reward16Regular = wrapIcon(rawSvg({}), 'Reward16Regular');
export default Reward16Regular;
      