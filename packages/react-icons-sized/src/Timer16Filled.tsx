import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M7.5 15a6 6 0 100-12 6 6 0 000 12zm0-10c.28 0 .5.22.5.5v4a.5.5 0 01-1 0v-4c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M12.45 2.64a.5.5 0 10-.7.7l1.4 1.41a.5.5 0 10.7-.7l-1.4-1.4z" fill={primaryFill} /></svg>;
}

const Timer16Filled = wrapIcon(rawSvg({}), 'Timer16Filled');
export default Timer16Filled;
      