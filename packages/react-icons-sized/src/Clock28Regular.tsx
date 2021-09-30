import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 110 24 12 12 0 010-24zm0 1.67a10.34 10.34 0 000 20.66 10.34 10.34 0 000-20.66zM13.25 7c.38 0 .7.28.74.65l.01.1V14h4.25a.75.75 0 01.1 1.5h-5.1a.75.75 0 01-.74-.65l-.01-.1v-7c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const Clock28Regular = wrapIcon(rawSvg({}), 'Clock28Regular');
export default Clock28Regular;
      