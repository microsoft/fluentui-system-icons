import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9zm3.4 2.04a1.82 1.82 0 00-.34.5l-.03.08a.5.5 0 00.94.34l.02-.05.13-.17c.12-.11.3-.24.65-.24.4 0 .64.23.75.54.1.33.03.72-.24.96-.15.15-.34.28-.58.44l-.04.02c-.22.15-.47.31-.7.51A2.52 2.52 0 006 12.5a.5.5 0 00.5.5H9a.5.5 0 000-1H7.07c.1-.32.29-.56.54-.77.18-.15.39-.3.62-.44l.02-.02c.23-.15.5-.33.72-.54.58-.54.71-1.34.5-2A1.74 1.74 0 007.77 7c-.64 0-1.09.26-1.36.54zM11.5 7a.5.5 0 00-.5.5V10a.5.5 0 00.5.5H13v2a.5.5 0 001 0v-5a.5.5 0 00-1 0v2h-1v-2a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const ShiftsDayFilled = wrapIcon(rawSvg({}), 'ShiftsDayFilled');
export default ShiftsDayFilled;
      