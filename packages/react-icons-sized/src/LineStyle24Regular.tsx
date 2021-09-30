import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zm0 6.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.49h.1zM2 18.25c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 110 2.5H3.25c-.69 0-1.25-.56-1.25-1.25zm7.75-12.5c0-.41.34-.75.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm8-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" fill={primaryFill} /></svg>;
}

const LineStyle24Regular = wrapIcon(rawSvg({}), 'LineStyle24Regular');
export default LineStyle24Regular;
      