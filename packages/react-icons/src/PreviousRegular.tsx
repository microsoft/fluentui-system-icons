import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 16.5a.5.5 0 001 0v-13a.5.5 0 00-1 0v13z" fill={primaryFill} /><path d="M15.06 16.64c.83.55 1.94-.04 1.94-1.04V4.4c0-1-1.11-1.6-1.94-1.04l-8.4 5.6c-.74.5-.74 1.59 0 2.08l8.4 5.6zM16 15.6c0 .2-.22.32-.39.2l-8.4-5.6a.25.25 0 010-.4l8.4-5.6c.17-.12.39 0 .39.2v11.2z" fill={primaryFill} /></svg>;
}

const PreviousRegular = wrapIcon(rawSvg({}), 'PreviousRegular');
export default PreviousRegular;
      