import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31.75 8a3.25 3.25 0 013.24 3.07l.01.18V14h1.75c2.9 0 5.25 2.35 5.25 5.25v13.5c0 1.8-1.46 3.25-3.25 3.25H35v1.75c0 1.8-1.46 3.25-3.25 3.25h-15.5A3.25 3.25 0 0113 37.75V36H9.25A3.25 3.25 0 016 32.75v-13.5C6 16.35 8.35 14 11.25 14H13v-2.75a3.25 3.25 0 013.07-3.24l.18-.01h15.5zM15.5 37.75c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75v-8.5a.75.75 0 00-.75-.75h-15.5a.75.75 0 00-.75.75v8.5zM31.75 10.5h-15.5c-.38 0-.7.28-.74.65l-.01.1V14h17v-2.75c0-.38-.28-.7-.65-.74l-.1-.01z" fill={primaryFill} /></svg>;
}

const Print48Filled = wrapIcon(rawSvg({}), 'Print48Filled');
export default Print48Filled;
      