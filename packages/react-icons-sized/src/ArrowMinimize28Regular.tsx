import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 15h8c.38 0 .7.28.74.65l.01.1v8a.75.75 0 01-1.5.1v-6.29l-7.97 7.97a.75.75 0 01-1.13-.98l.07-.08 7.97-7.97H4.25a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01h8-8zM25.53 2.47c.27.27.3.68.07.98l-.07.08-7.97 7.97h6.19c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-8a.75.75 0 01-.74-.65l-.01-.1v-8a.75.75 0 011.5-.1v6.29l7.97-7.97c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const ArrowMinimize28Regular = wrapIcon(rawSvg({}), 'ArrowMinimize28Regular');
export default ArrowMinimize28Regular;
      