import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.5V6H4a2 2 0 00-2 2v2h4v-.5a.5.5 0 011 0v.5h6v-.5a.5.5 0 011 0v.5h4V8a2 2 0 00-2-2h-2V4.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 3 6 3.67 6 4.5zM7.5 4h5c.28 0 .5.22.5.5V6H7V4.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M18 11h-4v.5a.5.5 0 11-1 0V11H7v.5a.5.5 0 01-1 0V11H2v4c0 1.1.9 2 2 2h12a2 2 0 002-2v-4z" fill={primaryFill} /></svg>;
}

const Toolbox20Filled = wrapIcon(rawSvg({}), 'Toolbox20Filled');
export default Toolbox20Filled;
      