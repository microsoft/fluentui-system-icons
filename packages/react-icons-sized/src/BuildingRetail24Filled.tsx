import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 11.5v-2h9v2h-9z" fill={primaryFill} /><path d="M4 3a2 2 0 00-1 3.73v13.52c0 .41.34.75.75.75H6v-5.25c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75V21h8.75c.41 0 .75-.34.75-.75V6.73A2 2 0 0020 3H4zm-.5 2c0-.28.22-.5.5-.5h16a.5.5 0 010 1H4a.5.5 0 01-.5-.5zm3.25 3h10.5c.41 0 .75.34.75.75v3.5c0 .41-.34.75-.75.75H6.75a.75.75 0 01-.75-.75v-3.5c0-.41.34-.75.75-.75zm8 7h2.5c.41 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75h-2.5a.75.75 0 01-.75-.75v-2.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M10 16.5V21H7.5v-4.5H10z" fill={primaryFill} /></svg>;
}

const BuildingRetail24Filled = wrapIcon(rawSvg({}), 'BuildingRetail24Filled');
export default BuildingRetail24Filled;
      