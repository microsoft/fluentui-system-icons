import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.75 4a3.25 3.25 0 013.24 3.07l.01.18v9.5a3.25 3.25 0 01-3.07 3.24l-.18.01h-8.5c-.77 0-1.5-.27-2.09-.76l-.15-.13-5-4.75a3.25 3.25 0 01-.11-4.6L3 9.64l5-4.75a3.25 3.25 0 012.03-.88l.2-.01h8.51zm0 1.5h-8.5c-.4 0-.77.13-1.08.37l-.13.11-5 4.75-.06.06a1.75 1.75 0 00-.05 2.36l.12.12 5 4.75c.28.27.64.43 1.03.47l.17.01h8.5c.92 0 1.67-.7 1.74-1.6l.01-.15v-9.5c0-.92-.7-1.67-1.6-1.74l-.15-.01zm-7.3 2.9l.08.07L14 10.94l2.47-2.47a.75.75 0 011.13.98l-.07.08L15.06 12l2.47 2.47a.75.75 0 01-.98 1.13l-.08-.07L14 13.06l-2.47 2.47a.75.75 0 01-1.13-.98l.07-.08L12.94 12l-2.47-2.47a.75.75 0 01.98-1.13z" fill={primaryFill} /></svg>;
}

const Backspace24Regular = wrapIcon(rawSvg({}), 'Backspace24Regular');
export default Backspace24Regular;
      