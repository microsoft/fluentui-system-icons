import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 7c0 .34-.03.68-.1 1h.76C17.4 8 18 8.6 18 9.34V13a5 5 0 01-8.16 3.87l-.99.98a.5.5 0 01-.7-.7l.98-.99a5 5 0 01-.79-1.34A5 5 0 012 10V6.34C2 5.6 2.6 5 3.34 5h3.08A5 5 0 0111 2h3.66C15.4 2 16 2.6 16 3.34V7zM7.52 5.03a5 5 0 014.14 3.15A5 5 0 0113 8h1.87A4 4 0 0015 7V3.34a.34.34 0 00-.34-.34H11a4 4 0 00-3.48 2.03zm3.03 11.13A4 4 0 0017 13V9.34a.34.34 0 00-.34-.34H13a4 4 0 00-3.16 6.45l3.3-3.3a.5.5 0 01.71.7l-3.3 3.31zM8 13c0-.4.05-.79.13-1.16L5.65 9.35a.5.5 0 11.7-.7l2.16 2.15a5.02 5.02 0 012.22-2.25A4 4 0 007 6H3.34a.34.34 0 00-.34.34V10a4 4 0 005.07 3.85A5.03 5.03 0 018 13z" fill={primaryFill} /></svg>;
}

const LeafThree20Regular = wrapIcon(rawSvg({}), 'LeafThree20Regular');
export default LeafThree20Regular;
      