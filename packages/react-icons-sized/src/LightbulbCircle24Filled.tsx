import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm2.48 15H9.52l.1.45.05.16.05.14c.29.64.9 1.05 1.59 1.05h1.38l.16-.01.15-.02.14-.04a1.73 1.73 0 001.24-1.27l.1-.46zM12 5.2a5 5 0 00-5 5v.27l.03.26.03.25a5 5 0 001.64 2.98l.16.13.32 1.41h5.64l.32-1.41.16-.14a5 5 0 001.7-3.5v-.25a5 5 0 00-5-5z" fill={primaryFill} /></svg>;
}

const LightbulbCircle24Filled = wrapIcon(rawSvg({}), 'LightbulbCircle24Filled');
export default LightbulbCircle24Filled;
      