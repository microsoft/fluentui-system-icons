import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 5.5L10.53 7H9.3l.22-1.5h1.24z" fill={primaryFill} /><path d="M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9zm2.57 6.44L8.14 8H7.5a.5.5 0 110-1h.78l.22-1.5H8a.5.5 0 110-1h.65l.16-1.07a.5.5 0 01.99.14l-.14.93h1.24l.16-1.07a.5.5 0 01.99.14l-.14.93h.59a.5.5 0 010 1h-.74L11.54 7H12a.5.5 0 010 1h-.6l-.09.59a.5.5 0 01-.99-.15L10.4 8H9.15l-.09.59a.5.5 0 01-.99-.15z" fill={primaryFill} /></svg>;
}

const DocumentPageTopCenter20Filled = wrapIcon(rawSvg({}), 'DocumentPageTopCenter20Filled');
export default DocumentPageTopCenter20Filled;
      