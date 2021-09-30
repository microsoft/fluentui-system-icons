import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.22 17.22a.75.75 0 00-.07.98l.07.08 2.37 2.37c.12.2.37.35.66.35.25 0 .48-.1.61-.28l.05-.07 2.37-2.37.07-.08c.2-.27.2-.62.01-.89l-.08-.1-.08-.06a.75.75 0 00-.88-.01l-.1.08L17 18.44V3.56c-.06-.31-.37-.56-.75-.56s-.7.25-.74.57l-.01.09v14.78l-1.22-1.22-.08-.07a.75.75 0 00-.98.07zM6.25 20C5.01 20 4 19 4 17.76V6.26C4 5.02 5 4 6.25 4h6a.75.75 0 010 1.5h-6a.75.75 0 00-.75.75v11.5c0 .41.34.75.75.75h4a.75.75 0 010 1.5h-4z" fill={primaryFill} /></svg>;
}

const ArrowAutofitDown24Regular = wrapIcon(rawSvg({}), 'ArrowAutofitDown24Regular');
export default ArrowAutofitDown24Regular;
      