import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 13.5a3.25 3.25 0 013.16 2.5h9.34a.75.75 0 01.1 1.5h-9.44a3.25 3.25 0 01-6.32 0H2.75a.75.75 0 01-.1-1.5h2.94a3.25 3.25 0 013.16-2.5zm6.5-9.5a3.25 3.25 0 013.16 2.5h2.84a.75.75 0 01.1 1.5h-2.94a3.25 3.25 0 01-6.32 0H2.75a.75.75 0 01-.1-1.5h9.44A3.25 3.25 0 0115.25 4z" fill={primaryFill} /></svg>;
}

const Options24Filled = wrapIcon(rawSvg({}), 'Options24Filled');
export default Options24Filled;
      