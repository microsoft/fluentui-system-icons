import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.9 14.05c.65.18 1.1.78 1.1 1.45v17a1.5 1.5 0 11-3 0V19.67a15.4 15.4 0 01-2.73 2.12 1.5 1.5 0 01-1.54-2.58c1.37-.82 2.5-1.94 3.3-2.88a15.94 15.94 0 001.17-1.59l.01-.01a1.5 1.5 0 011.7-.68zM21 14a1.5 1.5 0 00-1.48 1.29l-1 7a1.5 1.5 0 001.62 1.7l5.01-.45a3.99 3.99 0 11.36 7.96h-.92c-1.26 0-2.47-.5-3.36-1.4l-.67-.66a1.5 1.5 0 00-2.12 2.12l.67.67a7.75 7.75 0 005.48 2.27h.92a6.99 6.99 0 10-.63-13.95l-3.13.28.55-3.83H30a1.5 1.5 0 000-3h-9zm15.56 10.44a1.5 1.5 0 00-2.12 2.12L36.88 29l-2.44 2.44a1.5 1.5 0 002.12 2.12L39 31.12l2.44 2.44a1.5 1.5 0 002.12-2.12L41.12 29l2.44-2.44a1.5 1.5 0 00-2.12-2.12L39 26.88l-2.44-2.44zM16.5 32.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /></svg>;
}

const Multiplier15X48Filled = wrapIcon(rawSvg({}), 'Multiplier15X48Filled');
export default Multiplier15X48Filled;
      