import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.26 9l.23-1.5h1.48L12.74 9h-1.48z" fill={primaryFill} /><path d="M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v15.5c0 1.19-.93 2.16-2.1 2.24H6.25c-1.2 0-2.17-.92-2.24-2.09L4 19.75V4.25c0-1.19.93-2.16 2.1-2.24h11.65zm-5.35 9.16a.75.75 0 101.48.24l.14-.9h.73a.75.75 0 000-1.5h-.5l.24-1.5h.76a.75.75 0 000-1.5h-.52l.16-1.02a.75.75 0 10-1.48-.24L13.21 6h-1.48l.16-1.02a.75.75 0 10-1.48-.24L10.21 6h-.96a.75.75 0 100 1.5h.73L9.74 9h-.99a.75.75 0 100 1.5h.75l-.1.66a.75.75 0 001.48.24l.14-.9h1.48l-.1.66z" fill={primaryFill} /></svg>;
}

const DocumentPageTopCenter24Filled = wrapIcon(rawSvg({}), 'DocumentPageTopCenter24Filled');
export default DocumentPageTopCenter24Filled;
      