import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.25 12.03c.97 0 1.75.78 1.75 1.75v2.5c0 .96-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.79-1.75-1.75v-2.5c0-.97.78-1.75 1.75-1.75h2.5zm-14 0c.97 0 1.75.78 1.75 1.75v2.5c0 .96-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.79-1.75-1.75v-2.5c0-.97.78-1.75 1.75-1.75h2.5zm7 0c.97 0 1.75.78 1.75 1.75v2.5c0 .96-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.79-1.75-1.75v-2.5c0-.97.78-1.75 1.75-1.75h2.5zm0-7c.97 0 1.75.78 1.75 1.75v2.5c0 .96-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.79-1.75-1.75v-2.5c0-.97.78-1.75 1.75-1.75h2.5zm7 0c.97 0 1.75.78 1.75 1.75v2.5c0 .96-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.79-1.75-1.75v-2.5c0-.97.78-1.75 1.75-1.75h2.5zm-14 0C7.22 5.03 8 5.8 8 6.78v2.5c0 .96-.78 1.75-1.75 1.75h-2.5c-.97 0-1.75-.79-1.75-1.75v-2.5c0-.92.7-1.67 1.6-1.75h2.65z" fill={primaryFill} /></svg>;
}

const DockRow24Filled = wrapIcon(rawSvg({}), 'DockRow24Filled');
export default DockRow24Filled;
      