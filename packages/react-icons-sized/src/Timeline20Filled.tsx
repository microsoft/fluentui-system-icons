import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3C2.67 3 2 3.67 2 4.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9zm0 8c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9zM17 12.44a2 2 0 01-1-3.88 2 2 0 011 3.88zM16.5 3c.28 0 .5.22.5.5v4.04a3.02 3.02 0 00-1 0V3.5c0-.28.22-.5.5-.5zm0 10.5c-.17 0-.34-.01-.5-.04v4.04a.5.5 0 001 0v-4.04c-.16.03-.33.04-.5.04z" fill={primaryFill} /></svg>;
}

const Timeline20Filled = wrapIcon(rawSvg({}), 'Timeline20Filled');
export default Timeline20Filled;
      