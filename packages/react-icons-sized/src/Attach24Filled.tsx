import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 2a6 6 0 014.4 10.08l-.2.2L11.49 21l-.05.04-.06.05a3.71 3.71 0 01-6.15-2.82c0-.9.32-1.76.9-2.42l.15-.17h.01l7.3-7.31a1 1 0 011.4 1.41L7.7 17.1l-.01.01a1.72 1.72 0 002.29 2.55l.12-.1 8.7-8.7.16-.16a4 4 0 00-5.75-5.55l-.16.16-.02.01-9.32 9.33a1 1 0 01-1.42-1.41L11.6 3.9l.05-.04A5.98 5.98 0 0116 2z" fill={primaryFill} /></svg>;
}

const Attach24Filled = wrapIcon(rawSvg({}), 'Attach24Filled');
export default Attach24Filled;
      