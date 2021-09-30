import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.84 3.84a2.17 2.17 0 012.72-1.73l.8.22a.5.5 0 10.27-.96l-.8-.23a3.17 3.17 0 00-3.97 2.54L7.3 7H4.5a.5.5 0 000 1h2.65l-.53 3.18a2.17 2.17 0 01-3.19 1.55l-.69-.39a.5.5 0 10-.48.88l.69.38a3.17 3.17 0 004.66-2.25L8.16 8h2.34a.5.5 0 000-1H8.32l.52-3.16z" fill={primaryFill} /></svg>;
}

const FStop16Regular = wrapIcon(rawSvg({}), 'FStop16Regular');
export default FStop16Regular;
      