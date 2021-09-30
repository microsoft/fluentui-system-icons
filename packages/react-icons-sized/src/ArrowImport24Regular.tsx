import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.25 4.5c.38 0 .7.28.74.65l.01.1v13a.75.75 0 01-1.5.1V5.26c0-.41.34-.75.75-.75zm-8.6 1.8l.07-.08a.75.75 0 01.98-.07l.08.07 5 5c.26.26.29.68.07.97l-.07.09-5 5a.75.75 0 01-1.13-.97l.07-.09 3.71-3.72H2.75a.75.75 0 01-.74-.64l-.01-.1c0-.38.28-.7.65-.75H16.45l-3.73-3.73a.75.75 0 01-.07-.98l.07-.08-.07.08z" fill={primaryFill} /></svg>;
}

const ArrowImport24Regular = wrapIcon(rawSvg({}), 'ArrowImport24Regular');
export default ArrowImport24Regular;
      