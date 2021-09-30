import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.76 3.37A3.16 3.16 0 002 5.19c0 1.08.53 2.03 1.35 2.61a7 7 0 001.36 6.78l-1.56 1.57a.5.5 0 00.7.7l1.57-1.56a6.97 6.97 0 009.16 0l1.57 1.56a.5.5 0 00.7-.7l-1.56-1.57a6.97 6.97 0 001.35-6.8 3.17 3.17 0 10-4.41-4.42 7 7 0 00-4.47 0zM5.16 3c.66 0 1.25.3 1.65.77a7.03 7.03 0 00-3.06 3.07A2.2 2.2 0 015.17 3zm8.02.76A2.16 2.16 0 0117 5.18c0 .66-.3 1.25-.76 1.65a7.03 7.03 0 00-3.06-3.07zM9.5 6c.28 0 .5.22.5.5V10h2.5a.5.5 0 010 1h-3a.5.5 0 01-.5-.5v-4c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const ClockAlarmFilled = wrapIcon(rawSvg({}), 'ClockAlarmFilled');
export default ClockAlarmFilled;
      