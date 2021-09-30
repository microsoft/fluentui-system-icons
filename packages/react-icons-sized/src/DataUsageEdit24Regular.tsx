import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 4.75A2.75 2.75 0 0017.25 2H4.75A2.75 2.75 0 002 4.75v12.5A2.75 2.75 0 004.75 20h6.67l.1-.42c.1-.39.25-.75.46-1.08H4.75c-.69 0-1.25-.56-1.25-1.25V4.75c0-.7.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v7.11c.44-.4.96-.66 1.5-.78V4.75zm-4 9.6V6.64a.74.74 0 00-.75-.63.74.74 0 00-.75.73V15.37c.02.12.07.24.15.34L16 14.35zm-8.5-5.7a.75.75 0 00-1.5.1v6.6a.75.75 0 001.5-.1v-6.6zm4.2 2.97a.73.73 0 00-.72-.62c-.4 0-.73.33-.73.73l.04 3.55v.1c.06.35.36.62.73.62.4 0 .73-.34.73-.74l-.04-3.54v-.1zm7.4 1.05l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const DataUsageEdit24Regular = wrapIcon(rawSvg({}), 'DataUsageEdit24Regular');
export default DataUsageEdit24Regular;
      