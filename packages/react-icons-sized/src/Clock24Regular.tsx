import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.67a8.34 8.34 0 000 16.66 8.34 8.34 0 000-16.66zM11.25 6c.38 0 .7.28.74.65l.01.1V12h3.25a.75.75 0 01.1 1.5h-4.1a.75.75 0 01-.74-.65l-.01-.1v-6c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const Clock24Regular = wrapIcon(rawSvg({}), 'Clock24Regular');
export default Clock24Regular;
      