import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.2 4L13.4 7.2a2.1 2.1 0 01-1.97 3.51v.12c0 .65-.52 1.18-1.17 1.18H8.06v-.5c0-.8-.64-1.5-1.56-1.5h-1a.5.5 0 000 1h1c.37 0 .56.25.56.5v.5H4.17C3.53 12 3 11.47 3 10.82V9.3v-.1A1.78 1.78 0 115.43 7L5.67 7H8.8c.35 0 .7.06 1 .18.04-.06.08-.18.12-.3.06-.19.12-.39.2-.47L8.98 5.24A.87.87 0 1110.2 4z" fill={primaryFill} /></svg>;
}

const AnimalRabbit16Filled = wrapIcon(rawSvg({}), 'AnimalRabbit16Filled');
export default AnimalRabbit16Filled;
      