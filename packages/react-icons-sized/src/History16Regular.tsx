import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.09 6H5.5a.5.5 0 000-1H4a5 5 0 11-.98 3.46.5.5 0 10-1 .08 6 6 0 101.48-4.5V3a.5.5 0 00-1 0v2.5c0 .28.22.5.5.5h.09zM7.5 5c.28 0 .5.22.5.5V8h1.5a.5.5 0 110 1h-2a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const History16Regular = wrapIcon(rawSvg({}), 'History16Regular');
export default History16Regular;
      