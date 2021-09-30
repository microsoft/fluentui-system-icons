import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 20.5h14.5a.75.75 0 01.1 1.5H4.75a.75.75 0 01-.1-1.5h14.6-14.5zM16.25 3A3.75 3.75 0 0120 6.75v8.5A3.75 3.75 0 0116.25 19h-8.5A3.75 3.75 0 014 15.25v-8.5A3.75 3.75 0 017.75 3h8.5zm0 1.5h-8.5c-1.24 0-2.25 1-2.25 2.25v8.5c0 1.24 1 2.25 2.25 2.25h8.5c1.24 0 2.25-1 2.25-2.25v-8.5c0-1.24-1-2.25-2.25-2.25z" fill={primaryFill} /></svg>;
}

const AppTitle24Regular = wrapIcon(rawSvg({}), 'AppTitle24Regular');
export default AppTitle24Regular;
      