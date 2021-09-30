import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.31 1.85a1.5 1.5 0 00-2.62 0L1.13 13.78A1.5 1.5 0 002.44 16h7.94a6.7 6.7 0 01-.26-1H2.44a.5.5 0 01-.44-.74L8.56 2.33a.5.5 0 01.88 0l3.73 6.8c.27-.18.53-.4.79-.66L10.3 1.85zM9 6c.28 0 .5.22.5.5v4a.5.5 0 11-1 0v-4c0-.28.22-.5.5-.5zm0 7.5A.75.75 0 109 12a.75.75 0 000 1.5zm7-3.74a4.63 4.63 0 002 .86c.2.03.4.05.6.05.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 01-.26 0A6.66 6.66 0 0113 18a4.96 4.96 0 01-1.56-2 6.05 6.05 0 01-.44-2.15v-2.77a.4.4 0 01.4-.41 4.5 4.5 0 003.32-1.55.39.39 0 01.56 0c.24.25.48.46.72.64z" fill={primaryFill} /></svg>;
}

const WarningShield20Regular = wrapIcon(rawSvg({}), 'WarningShield20Regular');
export default WarningShield20Regular;
      