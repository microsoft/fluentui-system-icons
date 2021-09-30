import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h2a.5.5 0 010 1H5a1 1 0 00-1 1v2a.5.5 0 01-1 0V5zm9.5-1.5c0-.28.22-.5.5-.5h2a2 2 0 012 2v2a.5.5 0 01-1 0V5a1 1 0 00-1-1h-2a.5.5 0 01-.5-.5zm-9 9c.28 0 .5.22.5.5v2a1 1 0 001 1h2a.5.5 0 010 1H5a2 2 0 01-2-2v-2c0-.28.22-.5.5-.5zm13 0c.28 0 .5.22.5.5v2a2 2 0 01-2 2h-2a.5.5 0 010-1h2a1 1 0 001-1v-2c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const FullScreenMaximizeRegular = wrapIcon(rawSvg({}), 'FullScreenMaximizeRegular');
export default FullScreenMaximizeRegular;
      