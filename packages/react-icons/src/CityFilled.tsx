import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 2c.28 0 .5.22.5.5V4h1c.83 0 1.5.67 1.5 1.5v2.55a2.5 2.5 0 00-2 2.45V18h-2V8a2 2 0 00-2-2v-.5C8 4.67 8.67 4 9.5 4h1V2.5c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M8.64 7.24c-.28-.2-.48-.2-.64-.15a.77.77 0 00-.14.06L4.73 9.03A1.5 1.5 0 004 10.32v6.18c0 .83.67 1.5 1.5 1.5H9V8a1 1 0 00-.36-.76z" fill={primaryFill} /><path d="M15.5 9h-1c-.83 0-1.5.68-1.5 1.5V18h3.5c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-1z" fill={primaryFill} /></svg>;
}

const CityFilled = wrapIcon(rawSvg({}), 'CityFilled');
export default CityFilled;
      