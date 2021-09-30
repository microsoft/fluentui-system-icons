import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 018 8.33 3.02 3.02 0 00-1.03-.94A7 7 0 1011 16.93v1A8 8 0 1110 2zm6.97 8.64A2 2 0 0117.5 12v1h.5a1 1 0 011 1v4a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4a1 1 0 011-1h.5v-1a2 2 0 013.47-1.36zM14.5 13h2v-1a1 1 0 10-2 0v1zm.35 3.37a.75.75 0 101.3-.74.75.75 0 00-1.3.74zm-1.5-8.72c.18.17.2.44.07.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z" fill={primaryFill} /></svg>;
}

const CheckmarkLockRegular = wrapIcon(rawSvg({}), 'CheckmarkLockRegular');
export default CheckmarkLockRegular;
      