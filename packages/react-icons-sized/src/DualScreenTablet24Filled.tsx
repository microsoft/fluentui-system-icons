import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 9v12H3.75c-.92 0-1.67-.7-1.74-1.6L2 19.24v-8.5c0-.92.7-1.67 1.6-1.74L3.76 9H7.5zm4.75 0c.92 0 1.67.7 1.74 1.6l.01.15v8.5c0 .92-.7 1.67-1.6 1.74l-.15.01H8.5V9h3.75zm-1.6 8.5h-.6a.75.75 0 000 1.5h.7a.75.75 0 00-.1-1.5zm-4.76 0h-.6a.75.75 0 000 1.5H6a.75.75 0 00-.1-1.5zM19.75 3c1.2 0 2.17.93 2.24 2.1l.01.15v8.5c0 1.2-.93 2.17-2.1 2.24l-.15.01H15v-2.5h1.25a.75.75 0 000-1.5H15v-1.5A2.5 2.5 0 0012.66 8H6V5.25c0-1.2.93-2.17 2.1-2.24L8.25 3h11.5z" fill={primaryFill} /></svg>;
}

const DualScreenTablet24Filled = wrapIcon(rawSvg({}), 'DualScreenTablet24Filled');
export default DualScreenTablet24Filled;
      