import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12.5V8H4.25a3.56 3.56 0 01-2.67 2 .5.5 0 01-.16-1 2.46 2.46 0 001.65-1H1.5a.5.5 0 010-1h13a.5.5 0 010 1H14v4.5a.5.5 0 01-1 0V8H9.15l-.09.91 2.87-.4a.5.5 0 01.14.98l-3.5.5A.5.5 0 018 9.45L8.15 8H7v4.5a.5.5 0 01-1 0zM14 6V3.5a.5.5 0 00-1 0V6h1zM9.35 6l.15-1.45a.5.5 0 10-1-.1L8.35 6h1zM7 6V3.5a.5.5 0 00-1 0V6h1zM4.88 6c.09-.56.12-1.08.12-1.5a.5.5 0 00-.5-.5h-3a.5.5 0 000 1h2.48a8.2 8.2 0 01-.12 1h1.02z" fill={primaryFill} /></svg>;
}

const StrikethroughGaNa16Regular = wrapIcon(rawSvg({}), 'StrikethroughGaNa16Regular');
export default StrikethroughGaNa16Regular;
      