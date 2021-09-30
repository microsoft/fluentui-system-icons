import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 4.5c-.97 0-1.75.78-1.75 1.75v3h4.75V4.5h-3zm4.5 0v4.75h4.75v-3c0-.97-.78-1.75-1.75-1.75h-3zm4.75 6.25h-4.75v4.75h3c.97 0 1.75-.78 1.75-1.75v-3zM9.25 15.5v-4.75H4.5v3c0 .97.78 1.75 1.75 1.75h3zM3 6.25C3 4.45 4.46 3 6.25 3h7.5C15.55 3 17 4.46 17 6.25v7.5c0 1.8-1.46 3.25-3.25 3.25h-7.5A3.25 3.25 0 013 13.75v-7.5z" fill={primaryFill} /></svg>;
}

const BorderAllFilled = wrapIcon(rawSvg({}), 'BorderAllFilled');
export default BorderAllFilled;
      