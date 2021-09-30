import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.77 9.28c-1-.6-2.27.12-2.27 1.29v6.86a1.5 1.5 0 002.27 1.3l6.5-3.87a1 1 0 000-1.72l-6.5-3.86zM2 14a12 12 0 1124 0 12 12 0 01-24 0zM14 3.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21z" fill={primaryFill} /></svg>;
}

const PlayCircle28Regular = wrapIcon(rawSvg({}), 'PlayCircle28Regular');
export default PlayCircle28Regular;
      