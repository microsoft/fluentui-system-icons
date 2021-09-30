import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm-.5 2a.5.5 0 01.5.41V10h2.5a.5.5 0 01.09 1H9.5a.5.5 0 01-.5-.41V5.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const ClockRegular = wrapIcon(rawSvg({}), 'ClockRegular');
export default ClockRegular;
      