import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 9a.75.75 0 00-.75.75v4.5c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5zM9 13.5v-3h3v3H9z" fill={primaryFill} /><path d="M2 7.75A4.75 4.75 0 016.75 3h10.5a4.75 4.75 0 013.5 7.96v7.79c0 1.24-1 2.25-2.25 2.25h-13c-1.24 0-2.25-1-2.25-2.25v-7.79A4.74 4.74 0 012 7.75zM6.75 4.5a3.25 3.25 0 00-2.23 5.61c.15.14.23.34.23.54v8.1c0 .41.34.75.75.75h10c.41 0 .75-.34.75-.75v-7.7c0-.24.12-.47.33-.61a3.25 3.25 0 00-1.83-5.94h-8z" fill={primaryFill} /></svg>;
}

const FoodToast24Filled = wrapIcon(rawSvg({}), 'FoodToast24Filled');
export default FoodToast24Filled;
      