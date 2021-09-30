import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75A2.75 2.75 0 015.75 3h12.5zM7.75 9a.75.75 0 00-.75.75v6.5a.75.75 0 001.5 0v-6.5A.75.75 0 007.75 9zm8.5-2a.74.74 0 00-.75.73v8.54c0 .4.34.73.75.73s.75-.33.75-.73V7.73c0-.4-.34-.73-.75-.73zm-4.27 5c-.4 0-.73.33-.73.73l.04 3.55a.73.73 0 001.46-.01l-.04-3.55c0-.4-.33-.73-.73-.72z" fill={primaryFill} /></svg>;
}

const DataUsage24Filled = wrapIcon(rawSvg({}), 'DataUsage24Filled');
export default DataUsage24Filled;
      