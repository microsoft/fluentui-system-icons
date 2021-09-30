import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 2.5a.5.5 0 10-1 0V3H4.75A2.75 2.75 0 002 5.75v6.5A2.75 2.75 0 004.75 15h1.82l-1.49 2.23a.5.5 0 00.84.55L7.77 15H10c.12-1.12 1.08-2 2.24-2h.51A3 3 0 1118 11V5.75A2.75 2.75 0 0015.25 3H10.5v-.5zM5 6.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm.5 4.5h4a.5.5 0 010 1h-4a.5.5 0 010-1zM5 9c0-.27.22-.5.5-.5h5a.5.5 0 010 1h-5A.5.5 0 015 9zm8 2a2 2 0 114 0 2 2 0 01-4 0zm-.75 3c-.7 0-1.25.56-1.25 1.25a24.13 24.13 0 000 .4c.02.1.03.21.07.35a3 3 0 00.46 1.04c.54.78 1.58 1.46 3.47 1.46 1.88 0 2.93-.68 3.47-1.46a3 3 0 00.53-1.7v-.1c0-.68-.56-1.24-1.25-1.24h-5.5z" fill={primaryFill} /></svg>;
}

const ChartPersonFilled = wrapIcon(rawSvg({}), 'ChartPersonFilled');
export default ChartPersonFilled;
      