import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.32V8a5 5 0 005.58 4.97c.2.37.42.73.7 1.05l-2.14 2.14a.5.5 0 00.7.7l2.14-2.13A5.5 5.5 0 0018 10.5V6.4c0-.77-.63-1.4-1.4-1.4h-4.1c-.47 0-.94.06-1.38.17A5 5 0 007 3H3.32C2.59 3 2 3.59 2 4.32zm7.7 9.7l3.15-3.17a.5.5 0 00-.7-.7L8.98 13.3A4.5 4.5 0 0112.5 6l4.1-.01c.22 0 .4.18.4.4v4.1a4.5 4.5 0 01-7.3 3.52zM7 4a4 4 0 013.15 1.53 5.52 5.52 0 00-2.51 2.4L5.85 6.15a.5.5 0 10-.7.7l2.08 2.08A5.5 5.5 0 007.2 12 4 4 0 013 8V4.32c0-.18.14-.32.32-.32H7z" fill={primaryFill} /></svg>;
}

const LeafTwo20Regular = wrapIcon(rawSvg({}), 'LeafTwo20Regular');
export default LeafTwo20Regular;
      