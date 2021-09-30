import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 4.5a.75.75 0 00-1.5 0v11a.75.75 0 001.5 0v-5h5v5a.75.75 0 001.5 0v-11a.75.75 0 00-1.5 0V9h-5V4.5z" fill={primaryFill} /><path d="M12.47 6.46c.09-.3.22-.57.47-.79.24-.2.69-.42 1.56-.42.78 0 1.26.3 1.55.65.32.37.45.82.45 1.1 0 .36-.1.92-.45 1.38-.33.42-.96.87-2.3.87a.75.75 0 000 1.5c.45 0 1.2.11 1.81.42.6.3.94.71.94 1.33 0 .84-.26 1.39-.6 1.72-.33.34-.82.53-1.4.53-.68 0-1.15-.12-1.46-.3a1.17 1.17 0 01-.55-.85.75.75 0 10-1.48.3c.17.81.6 1.44 1.26 1.84.63.38 1.41.51 2.23.51.92 0 1.8-.3 2.47-.97A3.82 3.82 0 0018 12.5c0-1.23-.7-2.03-1.48-2.51.28-.2.52-.44.72-.7.63-.8.76-1.74.76-2.29 0-.63-.25-1.43-.8-2.08a3.43 3.43 0 00-2.7-1.17 3.8 3.8 0 00-2.53.78 3.02 3.02 0 00-.94 1.51.75.75 0 001.44.42z" fill={primaryFill} /></svg>;
}

const TextHeader320Filled = wrapIcon(rawSvg({}), 'TextHeader320Filled');
export default TextHeader320Filled;
      