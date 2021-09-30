import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.26 2c.38 0 .7.29.74.65v4.6c0 1.16-.87 2.11-2 2.24v2.26c0 1.19-.92 2.16-2.1 2.24h-.4v2.8c0 .81-.44 1.56-1.14 1.96l-.15.08-6.64 3.1a.75.75 0 01-1.06-.58V14h-.26c-1.2 0-2.17-.93-2.24-2.1L5 11.75V9.49A2.25 2.25 0 013 7.4V2.75a.75.75 0 011.5-.1v4.6c0 .38.28.7.65.74l.1.01h13.5c.38 0 .7-.28.75-.65v-4.6c0-.41.34-.75.76-.75zM15 14H9v6.07l5.57-2.6c.23-.11.39-.33.42-.57l.01-.11v-2.8zm2.5-4.5h-11v2.25c0 .38.28.69.65.74h9.6c.38 0 .7-.28.75-.64V9.5z" fill={primaryFill} /></svg>;
}

const Highlight24Regular = wrapIcon(rawSvg({}), 'Highlight24Regular');
export default Highlight24Regular;
      