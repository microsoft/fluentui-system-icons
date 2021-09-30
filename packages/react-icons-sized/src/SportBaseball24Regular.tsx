import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.93 16.7s-.75.1-.9-.55c-.1-.4.14-.8.54-.9h.01l.02-.01a3.92 3.92 0 01.37-.08 12.54 12.54 0 014.42.07.75.75 0 01-.29 1.48 11.04 11.04 0 00-4.17-.01z" fill={primaryFill} /><path d="M9.02 7.9c.16-.65.91-.55.91-.55a6.35 6.35 0 001.19.17c.76.05 1.82.05 2.98-.18a.75.75 0 01.3 1.47 12.54 12.54 0 01-4.8 0h-.03a.76.76 0 01-.55-.92z" fill={primaryFill} /><path d="M12 22a9.97 9.97 0 0010-10 10 10 0 10-10 10zM5.07 7.07c.54.37 1.19.72 1.94.97A.75.75 0 107.5 6.6a6.36 6.36 0 01-1.43-.69 8.47 8.47 0 0111.88 0c-.4.27-.89.51-1.43.7A.75.75 0 1017 8.03c.75-.25 1.4-.6 1.94-.97a8.46 8.46 0 01-.03 9.9A7.9 7.9 0 0017 16a.75.75 0 10-.48 1.42c.53.18 1 .42 1.4.68a8.47 8.47 0 01-11.82 0c.4-.26.87-.5 1.4-.68A.75.75 0 107 16.01c-.74.25-1.38.6-1.91.95a8.46 8.46 0 01-.03-9.89z" fill={primaryFill} /></svg>;
}

const SportBaseball24Regular = wrapIcon(rawSvg({}), 'SportBaseball24Regular');
export default SportBaseball24Regular;
      