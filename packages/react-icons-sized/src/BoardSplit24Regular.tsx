import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25zm1.5 6.25v5.25c0 .97.78 1.75 1.75 1.75H14v-7H4.5zM14 11V4.5H6.25c-.97 0-1.75.78-1.75 1.75V11H14zm5.5-1.5h-4v5h4v-5zm0 6.5h-4v3.5h2.25c.97 0 1.75-.78 1.75-1.75V16zm0-8V6.25c0-.97-.78-1.75-1.75-1.75H15.5V8h4z" fill={primaryFill} /></svg>;
}

const BoardSplit24Regular = wrapIcon(rawSvg({}), 'BoardSplit24Regular');
export default BoardSplit24Regular;
      