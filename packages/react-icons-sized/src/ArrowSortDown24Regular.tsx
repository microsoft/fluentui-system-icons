import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.65 4h.1c.38 0 .7.28.74.65l.01.1v12.7l3.22-3.23c.27-.26.68-.29.98-.07l.08.07c.27.27.3.69.07.98l-.07.09-4.5 4.5a.75.75 0 01-.97.07l-.09-.07-4.5-4.5a.75.75 0 01.98-1.14l.08.07L11 17.44V4.75c0-.38.28-.7.65-.74l.1-.01h-.1z" fill={primaryFill} /></svg>;
}

const ArrowSortDown24Regular = wrapIcon(rawSvg({}), 'ArrowSortDown24Regular');
export default ArrowSortDown24Regular;
      