import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7a3 3 0 013-3h15.25a1 1 0 110 2H17v10.7a1.5 1.5 0 002 1.42l.16-.06a1 1 0 11.68 1.88l-.16.06A3.5 3.5 0 0115 16.7V6H9.98a53.9 53.9 0 01-.36 4.21 45.04 45.04 0 01-1.93 9.12 1 1 0 11-1.88-.66 43.1 43.1 0 001.82-8.7A65.6 65.6 0 007.98 6H5a1 1 0 00-1 1v.5a1 1 0 01-2 0V7z" fill={primaryFill} /></svg>;
}

const Pi24Filled = wrapIcon(rawSvg({}), 'Pi24Filled');
export default Pi24Filled;
      