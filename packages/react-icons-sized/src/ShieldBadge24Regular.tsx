import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 5A2.75 2.75 0 002 7.75v4.5A2.75 2.75 0 004.75 15H11v-1.5H4.75c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v1.33c.46.55 1 .9 1.5 1.13V7.75A2.75 2.75 0 0017.25 5H4.75zM17 9.25a.75.75 0 00-.61.32h-.01a5.64 5.64 0 01-.96.95c-.65.51-1.56.98-2.67.98a.75.75 0 00-.75.75V15c0 1.64.44 2.95 1.3 3.98a7.98 7.98 0 003.44 2.22c.17.07.35.07.52 0 1.4-.52 2.6-1.2 3.44-2.22A5.97 5.97 0 0022 15v-2.75a.75.75 0 00-.75-.75 4.37 4.37 0 01-2.67-.97 5.64 5.64 0 01-.96-.95v-.01a.75.75 0 00-.62-.32zm-.67 2.47c.26-.2.49-.4.67-.59a6.02 6.02 0 003.5 1.81V15c0 1.36-.35 2.3-.95 3.02A6.22 6.22 0 0117 19.7a6.22 6.22 0 01-2.55-1.68A4.48 4.48 0 0113.5 15v-2.05c1.2-.17 2.16-.71 2.83-1.23zm.06-2.15z" fill={primaryFill} /></svg>;
}

const ShieldBadge24Regular = wrapIcon(rawSvg({}), 'ShieldBadge24Regular');
export default ShieldBadge24Regular;
      