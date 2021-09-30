import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 15.02h7a.5.5 0 01.09 1H6.5a.5.5 0 01-.09-.99h.09zm-2-2h11c.27 0 .5.23.5.5a.5.5 0 01-.41.5H4.5a.5.5 0 01-.5-.5.5.5 0 01.41-.49h.1zm5.5-10c2.46 0 3.86 1.58 4.07 3.48h.06A2.82 2.82 0 0117 9.26a2.82 2.82 0 01-2.87 2.76H5.87A2.82 2.82 0 013 9.26C3 7.8 4.2 6.6 5.7 6.5h.23c.2-1.91 1.6-3.48 4.07-3.48zm0 1a3.04 3.04 0 00-3.09 3.03c0 .28-.25.5-.54.5h-.55c-1 0-1.82.77-1.82 1.73 0 .97.81 1.74 1.82 1.74h8.36c1 0 1.82-.77 1.82-1.74 0-.96-.81-1.73-1.82-1.73h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0010 4.02z" fill={primaryFill} /></svg>;
}

const WeatherFogRegular = wrapIcon(rawSvg({}), 'WeatherFogRegular');
export default WeatherFogRegular;
      