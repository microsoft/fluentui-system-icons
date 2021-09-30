import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 013 14.5v-9zM14.5 4h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5zm0 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-4.85a.5.5 0 11-.7.7L15 13.71v2.79a.5.5 0 01-1 0v-2.8l-1.15 1.15a.5.5 0 11-.7-.7l2-2a.5.5 0 01.35-.15.5.5 0 01.35.14l2 2z" fill={primaryFill} /></svg>;
}

const WindowArrowUp20Regular = wrapIcon(rawSvg({}), 'WindowArrowUp20Regular');
export default WindowArrowUp20Regular;
      