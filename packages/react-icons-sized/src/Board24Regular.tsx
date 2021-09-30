import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 2.5a3.25 3.25 0 013.25 3.06v12.19c0 1.8-1.45 3.25-3.25 3.25h-12a3.25 3.25 0 01-3.24-3.06L3 17.75v-12C3 3.95 4.46 2.5 6.25 2.5h12zm-6.75 7h-7v8.41c.09.9.84 1.6 1.75 1.6h5.25V9.5zm8.5 6h-7v4h5.25c.97 0 1.75-.78 1.75-1.75V15.5zM18.25 4H13v10h7V5.59a1.75 1.75 0 00-1.75-1.6zM11.5 4H6.11c-.9.08-1.6.83-1.6 1.75L4.5 8h7V4z" fill={primaryFill} /></svg>;
}

const Board24Regular = wrapIcon(rawSvg({}), 'Board24Regular');
export default Board24Regular;
      