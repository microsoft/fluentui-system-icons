import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.25 2c.38 0 .7.28.74.65l.01.1v2.33A3.75 3.75 0 0118.93 8h2.32a.75.75 0 01.1 1.5H19v1.75h2.25c.38 0 .7.29.74.65l.01.1c0 .38-.28.7-.65.75H19v1.75h2.25c.38 0 .7.29.74.65l.01.1c0 .38-.28.7-.65.75h-2.43A3.75 3.75 0 0116 18.92v2.33a.75.75 0 01-1.5.1V19h-1.75v2.25c0 .38-.28.7-.65.74L12 22a.75.75 0 01-.74-.65l-.01-.1V19H9.5v2.25c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-2.32A3.75 3.75 0 015.08 16H2.75a.75.75 0 01-.1-1.5H5v-1.75H2.75a.75.75 0 01-.74-.65L2 12c0-.38.28-.7.65-.74l.1-.01H5V9.5H2.75a.75.75 0 01-.74-.65L2 8.75c0-.38.28-.7.65-.74l.1-.01h2.33A3.75 3.75 0 018 5.07V2.75a.75.75 0 011.5-.1V5h1.75V2.75c0-.38.28-.7.65-.74L12 2c.38 0 .7.28.74.65l.01.1V5h1.75V2.75c0-.35.23-.64.55-.72l.1-.02.1-.01zM12 9a3 3 0 100 6 3 3 0 000-6zm0 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
}

const DeveloperBoard24Filled = wrapIcon(rawSvg({}), 'DeveloperBoard24Filled');
export default DeveloperBoard24Filled;
      