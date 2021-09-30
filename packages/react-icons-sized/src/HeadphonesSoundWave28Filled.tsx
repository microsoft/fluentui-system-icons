import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 14a10.5 10.5 0 1121 0v2.5h-2.75a.75.75 0 00-.75.75v8c0 .41.34.75.75.75H23a3 3 0 003-3v-9a12 12 0 00-24 0v9a3 3 0 003 3h1.25c.41 0 .75-.34.75-.75v-8a.75.75 0 00-.75-.75H3.5V14zm11.25-.25a.75.75 0 00-1.5 0v12.5a.75.75 0 001.5 0v-12.5zm-4.5 2.5c.41 0 .75.34.75.75v5.25a.75.75 0 01-1.5 0V17c0-.41.34-.75.75-.75zm8.25.75a.75.75 0 00-1.5 0v5.25a.75.75 0 001.5 0V17z" fill={primaryFill} /></svg>;
}

const HeadphonesSoundWave28Filled = wrapIcon(rawSvg({}), 'HeadphonesSoundWave28Filled');
export default HeadphonesSoundWave28Filled;
      