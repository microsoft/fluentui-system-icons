import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11.25C6 8.35 8.35 6 11.25 6h25.5C39.65 6 42 8.35 42 11.25v25.5c0 2.9-2.35 5.25-5.25 5.25h-25.5A5.25 5.25 0 016 36.75v-25.5zM39.5 29v-9.5h-10V29h10zm-10 2.5v8h7.25a2.75 2.75 0 002.75-2.75V31.5h-10zm-2.5-6H8.5v11.25a2.75 2.75 0 002.75 2.75H27v-14zm0-2.5V8.5H11.25a2.75 2.75 0 00-2.75 2.75V23H27zm12.5-6v-5.75a2.75 2.75 0 00-2.75-2.75H29.5V17h10z" fill={primaryFill} /></svg>;
}

const BoardSplit48Regular = wrapIcon(rawSvg({}), 'BoardSplit48Regular');
export default BoardSplit48Regular;
      