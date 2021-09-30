import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.81 12.2l-7.53 1.25a.5.5 0 00-.38.32l-2.6 6.96a.75.75 0 001.03.94l18-9a.75.75 0 000-1.34l-18-9a.75.75 0 00-1.03.94l2.6 6.96a.5.5 0 00.38.32l7.53 1.25a.2.2 0 010 .4z" fill={primaryFill} /></svg>;
}

const Send24Filled = wrapIcon(rawSvg({}), 'Send24Filled');
export default Send24Filled;
      