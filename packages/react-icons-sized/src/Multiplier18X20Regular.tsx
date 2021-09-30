import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.66 6.03c.2.06.34.26.34.47v7a.5.5 0 01-1 0V7.96a6 6 0 01-1.24.97.5.5 0 01-.52-.86c.94-.56 1.31-1.1 1.64-1.57l.22-.3a.5.5 0 01.56-.17zM13 8c0 .59-.27 1.09-.69 1.44.7.44 1.19 1.18 1.19 2.06 0 1.43-1.29 2.5-2.75 2.5S8 12.93 8 11.5c0-.88.48-1.62 1.19-2.06A1.87 1.87 0 018.5 8c0-1.17 1.08-2 2.25-2S13 6.83 13 8zm-2.25-1c-.77 0-1.25.52-1.25 1s.48 1 1.25 1S12 8.48 12 8s-.48-1-1.25-1zM9 11.5c0 .77.73 1.5 1.75 1.5s1.75-.73 1.75-1.5-.73-1.5-1.75-1.5S9 10.73 9 11.5zm5.15-1.35c.2-.2.5-.2.7 0L16 11.29l1.15-1.14a.5.5 0 01.7.7L16.71 12l1.14 1.15a.5.5 0 01-.7.7L16 12.71l-1.15 1.14a.5.5 0 01-.7-.7L15.29 12l-1.14-1.15a.5.5 0 010-.7zM7 13.5a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const Multiplier18X20Regular = wrapIcon(rawSvg({}), 'Multiplier18X20Regular');
export default Multiplier18X20Regular;
      