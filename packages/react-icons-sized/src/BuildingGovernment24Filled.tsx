import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 2h-3.75a.75.75 0 00-.75.75v3.32A7 7 0 005 13h-.75C3.01 13 2 14 2 15.25v6c0 .41.34.75.75.75H10c.14 0 .25-.11.25-.25v-3c0-.28.22-.5.5-.5h2.5c.28 0 .5.22.5.5v3c0 .14.11.25.25.25h7.25c.41 0 .75-.34.75-.75v-6c0-1.24-1-2.25-2.25-2.25H19a7 7 0 00-6.5-6.98V5h3a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5zm0 9.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 011.5 0zM11.75 11c.41 0 .75.34.75.75v2a.75.75 0 01-1.5 0v-2c0-.41.34-.75.75-.75zm-2.25.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 011.5 0zM5.75 15.5c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75zm13.25.75v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const BuildingGovernment24Filled = wrapIcon(rawSvg({}), 'BuildingGovernment24Filled');
export default BuildingGovernment24Filled;
      