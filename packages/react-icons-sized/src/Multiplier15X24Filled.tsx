import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 7.9a1 1 0 00-1.85-.52l-.08.12c-.4.67-.84 1.4-2.08 2.14A1 1 0 003 11.36c.38-.23.7-.46.99-.69V16a1 1 0 102 0V7.9zm5-.9a1 1 0 00-.99.86l-.5 3.5a1 1 0 001.15 1.13l1.82-.29a1.53 1.53 0 11.24 3.05h-.28a1.8 1.8 0 01-1.2-.45l-.33-.3A1 1 0 109.6 16l.34.3c.7.61 1.59.95 2.51.95h.28a3.53 3.53 0 10-.56-7.03l-.48.08.19-1.3H15a1 1 0 000-2h-4zm7.7 5.3a1 1 0 10-1.4 1.4l.79.8-.8.8a1 1 0 001.42 1.4l.79-.79.8.8a1 1 0 101.4-1.42l-.79-.79.8-.8a1 1 0 00-1.42-1.4l-.79.79-.8-.8zM8.5 16.24a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const Multiplier15X24Filled = wrapIcon(rawSvg({}), 'Multiplier15X24Filled');
export default Multiplier15X24Filled;
      