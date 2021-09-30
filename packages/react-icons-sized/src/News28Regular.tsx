import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.75 24H5.25a3.25 3.25 0 01-3.24-3.07L2 20.75V6.25c0-1.2.93-2.17 2.1-2.24L4.25 4h15.5c1.2 0 2.17.93 2.24 2.1l.01.15V7h1.75c1.2 0 2.17.93 2.24 2.1l.01.15v11.5a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25h17.5zm-17.5-1.5h17.5c.92 0 1.67-.7 1.74-1.6l.01-.15V9.25c0-.38-.28-.7-.65-.74l-.1-.01H22v10.75c0 .38-.28.7-.65.74l-.1.01a.75.75 0 01-.74-.65l-.01-.1v-13c0-.38-.28-.7-.65-.74l-.1-.01H4.25c-.38 0-.7.28-.74.65l-.01.1v14.5c0 .92.7 1.67 1.6 1.74l.15.01h17.5-17.5zm5-9.5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25v-3.5c0-.69.56-1.25 1.25-1.25h3.5zm4 4.5h3.5a.75.75 0 01.1 1.5h-3.6a.75.75 0 01-.1-1.5h3.6-3.5zm-4.25-3H7v3h3v-3zm4.25-1.5h3.5a.75.75 0 01.1 1.5h-3.6a.75.75 0 01-.1-1.49h3.6-3.5zm-8-4.5h11.5a.75.75 0 01.1 1.49H6.25a.75.75 0 01-.1-1.49h11.6-11.5z" fill={primaryFill} /></svg>;
}

const News28Regular = wrapIcon(rawSvg({}), 'News28Regular');
export default News28Regular;
      