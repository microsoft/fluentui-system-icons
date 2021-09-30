import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 4c.38 0 .7.29.74.65l.01.1v14.5c0 .38-.28.7-.65.74l-.1.01H2.75a.75.75 0 01-.74-.65l-.01-.1V4.75c0-.38.28-.69.65-.74h18.6zM6 12H3.5v6.5h17V12H18v4.25a.75.75 0 01-1.5.1V12h-2v4.25a.75.75 0 01-1.5.1V12h-2v4.25a.75.75 0 01-1.5.1V12h-2v4.25a.75.75 0 01-1.5.1V12zm11.25-4.5h-2.6a.75.75 0 000 1.5h2.7a.75.75 0 00-.1-1.5zm-11 0a.75.75 0 100 1.5.75.75 0 000-1.5zm3 0a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const Midi24Filled = wrapIcon(rawSvg({}), 'Midi24Filled');
export default Midi24Filled;
      