import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.86 5.75A2.75 2.75 0 015.6 3h8.5a2.75 2.75 0 012.75 2.75v8.5A2.75 2.75 0 0114.1 17H5.6a2.75 2.75 0 01-2.75-2.75v-8.5zM5.6 4.5c-.7 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25H5.6z" fill={primaryFill} /></svg>;
}

const Tab20Filled = wrapIcon(rawSvg({}), 'Tab20Filled');
export default Tab20Filled;
      