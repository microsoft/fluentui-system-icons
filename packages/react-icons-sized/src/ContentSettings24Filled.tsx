import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.93 3H6.07A3.25 3.25 0 003 6.26v11.68A3.25 3.25 0 006.26 21h5.77a6.46 6.46 0 01-.85-2H6.12A1.25 1.25 0 015 17.74V8h14v3.17c.72.17 1.4.46 2 .85V6.07A3.25 3.25 0 0017.93 3zM11 10.16a.75.75 0 00-.74-.65h-3.6a.75.75 0 00-.65.75v7.1c.06.37.37.65.75.65h3.6a.75.75 0 00.65-.75v-7.1zM7.5 11h2v5.5h-2V11zm10.5-.75a.75.75 0 00-.75-.75h-4.6a.75.75 0 00.1 1.5h4.6a.75.75 0 00.65-.75zm-3.72 3.73a2 2 0 01-1.44 2.5l-.59.14a5.73 5.73 0 00.01 1.8l.54.13a2 2 0 011.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 012.9 0l.5.52a5.28 5.28 0 001.48-.91l-.2-.69a2 2 0 011.44-2.5l.59-.14a5.73 5.73 0 000-1.8l-.55-.13a2 2 0 01-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 01-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7zM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19z" fill={primaryFill} /></svg>;
}

const ContentSettings24Filled = wrapIcon(rawSvg({}), 'ContentSettings24Filled');
export default ContentSettings24Filled;
      