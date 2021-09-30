import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31.6 6.84a1.25 1.25 0 00-2.1.91v5.47a18.14 18.14 0 00-7.02 1.58c-4.4 2-8.92 6.37-9.97 15.56a1.25 1.25 0 002.07 1.07c4.34-3.85 8.4-5.5 11.34-6.21a17.71 17.71 0 013.58-.5v5.53a1.25 1.25 0 002.1.91l12-11.25a1.25 1.25 0 000-1.82l-12-11.25zM6 14.25C6 10.8 8.8 8 12.25 8h8.25a1.25 1.25 0 110 2.5h-8.25a3.75 3.75 0 00-3.75 3.75v21.5a3.75 3.75 0 003.75 3.75h21.5a3.75 3.75 0 003.75-3.75V33.5a1.25 1.25 0 112.5 0v2.25C40 39.2 37.2 42 33.75 42h-21.5A6.25 6.25 0 016 35.75v-21.5z" fill={primaryFill} /></svg>;
}

const Share48Filled = wrapIcon(rawSvg({}), 'Share48Filled');
export default Share48Filled;
      