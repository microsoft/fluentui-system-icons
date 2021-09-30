import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 1.5a.5.5 0 011 0V2h2v-.5a.5.5 0 011 0V2a2 2 0 012 2v3H7.5C6.67 7 6 7.67 6 8.5V11H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2v-.5zm0 3c0 .28.22.5.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5zm0 2c0 .28.22.5.5.5h1a.5.5 0 000-1h-1a.5.5 0 00-.5.5zM4.5 9a.5.5 0 100-1 .5.5 0 000 1zM7 8.5c0-.28.22-.5.5-.5H10l-3 3V8.5z" fill={primaryFill} /></svg>;
}

const Notepad12Filled = wrapIcon(rawSvg({}), 'Notepad12Filled');
export default Notepad12Filled;
      