import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3h.19A3.25 3.25 0 0121 6.08v11.86A3.25 3.25 0 0117.75 21H6.25a3.25 3.25 0 01-3.24-3.07L3 17.75V6.25a3.25 3.25 0 013.07-3.24L6.25 3h11.5zm1.75 5h-15v9.75c0 .92.7 1.67 1.6 1.74l.15.01h11.64a1.75 1.75 0 001.6-1.6l.01-.15V8zm-9.25 1.5c.38 0 .7.28.74.65l.01.1v7c0 .38-.28.7-.65.74l-.1.01h-3.5a.75.75 0 01-.74-.65l-.01-.1v-7c0-.38.28-.7.65-.74l.1-.01h3.5zM9.5 11h-2v5.5h2V11zm6.75 1.5a.75.75 0 01.1 1.5h-3.6a.75.75 0 01-.1-1.49h3.6zm1-3a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6z" fill={primaryFill} /></svg>;
}

const AppGeneric24Regular = wrapIcon(rawSvg({}), 'AppGeneric24Regular');
export default AppGeneric24Regular;
      