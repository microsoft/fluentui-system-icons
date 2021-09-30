import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm6.11 5.65L7.65 18.11A7.5 7.5 0 0018.11 7.65zM12 4.5a7.5 7.5 0 00-6.11 11.85L16.35 5.89A7.47 7.47 0 0012 4.5z" fill={primaryFill} /></svg>;
}

const Prohibited24Filled = wrapIcon(rawSvg({}), 'Prohibited24Filled');
export default Prohibited24Filled;
      