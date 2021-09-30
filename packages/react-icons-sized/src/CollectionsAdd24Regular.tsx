import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.07 8h7.68a3.25 3.25 0 013.24 3.06l.01.19v1.56a6.52 6.52 0 00-1.5-1.08v-.48c0-.97-.78-1.75-1.75-1.75h-7.5c-.92 0-1.67.7-1.74 1.6l-.01.15v7.5c0 .92.7 1.67 1.6 1.74h.63c.29.56.65 1.06 1.08 1.5h-1.56a3.25 3.25 0 01-3.24-3.06L8 18.75v-7.5A3.25 3.25 0 0111.07 8z" fill={primaryFill} /><path d="M15.58 4.23l.05.18.7 2.59h-1.56l-.58-2.2a1.75 1.75 0 00-2.15-1.24L4.8 5.5a1.75 1.75 0 00-1.27 2l.03.14L5.5 14.9c.2.72.8 1.21 1.5 1.29v1.5a3.25 3.25 0 01-2.9-2.23l-.05-.17-1.94-7.25c-.45-1.67.5-3.39 2.12-3.92l.18-.06 7.24-1.94c1.68-.45 3.4.5 3.93 2.12z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM17.41 14h.18c.2.04.36.2.4.4l.01.1V17h2.6c.2.05.36.2.4.41v.18a.5.5 0 01-.4.4l-.1.01H18v2.6a.5.5 0 01-.4.4h-.19a.5.5 0 01-.4-.4V18H14.4a.5.5 0 01-.4-.41v-.18a.5.5 0 01.4-.4l.1-.01H17v-2.6a.5.5 0 01.41-.4z" fill={primaryFill} /></svg>;
}

const CollectionsAdd24Regular = wrapIcon(rawSvg({}), 'CollectionsAdd24Regular');
export default CollectionsAdd24Regular;
      