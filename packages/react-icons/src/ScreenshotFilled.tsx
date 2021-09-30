import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm1.5 2C5.67 5 5 5.67 5 6.5v2a.5.5 0 001 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 000-1h-2zm5 0a.5.5 0 000 1h2c.28 0 .5.22.5.5v2a.5.5 0 001 0v-2c0-.83-.67-1.5-1.5-1.5h-2zM6 11.5a.5.5 0 00-1 0v2c0 .83.67 1.5 1.5 1.5h2a.5.5 0 000-1h-2a.5.5 0 01-.5-.5v-2zm9 0a.5.5 0 00-1 0v2a.5.5 0 01-.5.5h-2a.5.5 0 000 1h2c.83 0 1.5-.67 1.5-1.5v-2z" fill={primaryFill} /></svg>;
}

const ScreenshotFilled = wrapIcon(rawSvg({}), 'ScreenshotFilled');
export default ScreenshotFilled;
      