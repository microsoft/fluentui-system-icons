import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10.75a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zm8.75-7.25a7.25 7.25 0 00-5.63 11.82l10.2-10.2a7.22 7.22 0 00-4.57-1.62zm0 14.5a7.25 7.25 0 005.63-11.82l-10.2 10.2A7.22 7.22 0 0010.75 18zm2.5 4c-2.1 0-4.04-.75-5.55-1.99a9.74 9.74 0 004.4.4 7.25 7.25 0 008.32-8.31 9.84 9.84 0 00-.4-4.4A8.75 8.75 0 0113.25 22z" fill={primaryFill} /></svg>;
}

const ProhibitedMultiple24Regular = wrapIcon(rawSvg({}), 'ProhibitedMultiple24Regular');
export default ProhibitedMultiple24Regular;
      