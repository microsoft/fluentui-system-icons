import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.02 4.02c2.46 0 3.86 1.57 4.06 3.47h.06a2.82 2.82 0 012.88 2.76 2.82 2.82 0 01-2.88 2.77h-.71l-.01.02-1.49 2.7a.5.5 0 01-.91-.39l.04-.08 1.23-2.25h-1.85l-.01.02-1.49 2.7a.5.5 0 01-.9-.39l.03-.08 1.23-2.25H7.43l-1.48 2.73a.5.5 0 01-.6.23l-.08-.03a.5.5 0 01-.24-.6l.04-.08 1.22-2.25h-.4a2.82 2.82 0 01-2.87-2.77c0-1.46 1.19-2.67 2.7-2.75h.23c.2-1.92 1.6-3.48 4.07-3.48z" fill={primaryFill} /></svg>;
}

const WeatherRainFilled = wrapIcon(rawSvg({}), 'WeatherRainFilled');
export default WeatherRainFilled;
      