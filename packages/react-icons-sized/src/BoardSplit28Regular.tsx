import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.75A3.75 3.75 0 016.75 3h14.5A3.75 3.75 0 0125 6.75v14.5A3.75 3.75 0 0121.25 25H6.75A3.75 3.75 0 013 21.25V6.75zm1.5 7.75v6.75c0 1.24 1 2.25 2.25 2.25H16v-9H4.5zM16 13V4.5H6.75c-1.24 0-2.25 1-2.25 2.25V13H16zm5.25 10.5c1.24 0 2.25-1 2.25-2.25V18h-6v5.5h3.75zm2.25-7v-5h-6v5h6zm-6-12V10h6V6.75c0-1.24-1-2.25-2.25-2.25H17.5z" fill={primaryFill} /></svg>;
}

const BoardSplit28Regular = wrapIcon(rawSvg({}), 'BoardSplit28Regular');
export default BoardSplit28Regular;
      