import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 12.5v-4H4.37a3.23 3.23 0 01-2.5 2A.75.75 0 111.63 9c.4-.05.73-.23.98-.5h-.86a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H14v4a.75.75 0 01-1.5 0v-4h-2.34l-.07.77.98-.25a.75.75 0 11.36 1.46l-2 .5a.75.75 0 01-.93-.8l.16-1.68H7.5v4a.75.75 0 01-1.5 0zM14 6V3.5a.75.75 0 00-1.5 0V6H14zm-3.61 0l.1-1.18A.75.75 0 109 4.68L8.88 6h1.5zM7.5 6V3.5a.75.75 0 00-1.5 0V6h1.5zM4.95 6C5 5.37 5 4.79 5 4.36v-.11a.75.75 0 00-.75-.75h-2.5a.75.75 0 100 1.5H3.5c-.01.32-.02.66-.06 1h1.51z" fill={primaryFill} /></svg>;
}

const StrikethroughGaNa16Filled = wrapIcon(rawSvg({}), 'StrikethroughGaNa16Filled');
export default StrikethroughGaNa16Filled;
      