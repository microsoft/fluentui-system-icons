import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 20.5a.75.75 0 110 1.5h-13a.75.75 0 110-1.5h13zm-6.6-18.49h.1c.38 0 .7.28.74.64l.01.1v13.69l3.72-3.72a.75.75 0 01.98-.07l.08.07c.27.27.3.68.07.98l-.07.08-5 5a.75.75 0 01-.97.07l-.09-.07-5-5a.75.75 0 01.98-1.13l.08.07L11 16.43V2.75c0-.37.28-.69.65-.74h.1-.1z" fill={primaryFill} /></svg>;
}

const ArrowDownload24Regular = wrapIcon(rawSvg({}), 'ArrowDownload24Regular');
export default ArrowDownload24Regular;
      