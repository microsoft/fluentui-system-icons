import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 2c1.2 0 2.17.93 2.24 2.1l.01.15v15.5c0 1.2-.93 2.17-2.1 2.24l-.15.01H6.25c-1.2 0-2.17-.93-2.24-2.1L4 19.75V4.25c0-1.2.93-2.17 2.1-2.24L6.25 2h11.5zM8.51 5a1.5 1.5 0 000 3h7a1.5 1.5 0 000-3h-7z" fill={primaryFill} /></svg>;
}

const DocumentHeader24Filled = wrapIcon(rawSvg({}), 'DocumentHeader24Filled');
export default DocumentHeader24Filled;
      