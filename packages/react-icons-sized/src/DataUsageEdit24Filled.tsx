import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 4.75A2.75 2.75 0 0017.25 2H4.75A2.75 2.75 0 002 4.75v12.5A2.75 2.75 0 004.75 20h6.67l.1-.42c.16-.65.5-1.24.97-1.72l2.16-2.15a.71.71 0 01-.15-.44V6.73c0-.4.34-.73.75-.73s.75.33.75.73v7.63l2.4-2.4a3.27 3.27 0 011.6-.88V4.75zm-14 4a.75.75 0 011.5 0v6.5a.75.75 0 01-1.5 0v-6.5zm4.25 2.98c0-.4.32-.73.73-.73.4 0 .73.31.73.72l.04 3.54c0 .4-.32.73-.73.74a.73.73 0 01-.73-.72l-.04-3.55zm8.85.94l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const DataUsageEdit24Filled = wrapIcon(rawSvg({}), 'DataUsageEdit24Filled');
export default DataUsageEdit24Filled;
      