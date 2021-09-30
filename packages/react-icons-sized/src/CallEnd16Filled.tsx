import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.83 9.7l.13-.75a2.27 2.27 0 00-.7-2.07C12.87 5.62 10.73 5 7.82 5c-2.91 0-5 .64-6.24 1.9a2.1 2.1 0 00-.5 2.07l.21.75c.2.7.89 1.18 1.6 1.1l1.42-.14c.61-.07 1.1-.52 1.2-1.13l.27-1.6a5.49 5.49 0 014.36-.14l.45 1.72c.15.61.69 1.07 1.31 1.14l1.43.14c.72.07 1.36-.4 1.49-1.1z" fill={primaryFill} /></svg>;
}

const CallEnd16Filled = wrapIcon(rawSvg({}), 'CallEnd16Filled');
export default CallEnd16Filled;
      