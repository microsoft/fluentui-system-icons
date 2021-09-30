import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.53 15.47c.3.3.3.77 0 1.06l-2 2c-.84.84-2.2.85-3.05 0A.75.75 0 016 17.26c.2 0 .4.08.53.22.26.26.68.26.94 0l2-2c.3-.3.77-.3 1.06 0zM13.3 3.53a5.07 5.07 0 017.17 7.17l-9.77 9.77a5.07 5.07 0 01-7.17-7.17l9.77-9.77zm6.11 1.06a3.57 3.57 0 00-5.05 0l-4.35 4.35L15.06 14l4.35-4.35a3.57 3.57 0 000-5.05zM14 15.06L8.95 10 4.6 14.36a3.57 3.57 0 105.05 5.05l4.35-4.35z" fill={primaryFill} /></svg>;
}

const Pill24Regular = wrapIcon(rawSvg({}), 'Pill24Regular');
export default Pill24Regular;
      