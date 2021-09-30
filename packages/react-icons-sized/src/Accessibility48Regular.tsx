import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4a6.25 6.25 0 00-6 8.04l-5.58-2.12a4.37 4.37 0 00-3.14 8.16L17 21.1v5.42l-4.52 11.6a4.33 4.33 0 108.11 3.06l3.41-9.3 3.43 9.29a4.33 4.33 0 108.09-3.07L31 26.5v-5.4l7.7-2.98a4.4 4.4 0 00-3.15-8.2L30 12.02A6.25 6.25 0 0024 4zm-3.75 6.25a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm16.19 2a1.9 1.9 0 011.35 3.55l-8.5 3.28c-.47.2-.79.65-.79 1.17v6.5c0 .16.03.31.09.45l4.6 11.8a1.83 1.83 0 11-3.42 1.3l-3.44-9.33a2.48 2.48 0 00-4.66 0l-3.43 9.35a1.83 1.83 0 11-3.43-1.3l4.6-11.82c.06-.14.09-.3.09-.45v-6.5c0-.51-.32-.98-.8-1.16l-8.51-3.34a1.87 1.87 0 011.34-3.5l10.26 3.89c1.42.54 3 .54 4.42 0l10.23-3.88z" fill={primaryFill} /></svg>;
}

const Accessibility48Regular = wrapIcon(rawSvg({}), 'Accessibility48Regular');
export default Accessibility48Regular;
      