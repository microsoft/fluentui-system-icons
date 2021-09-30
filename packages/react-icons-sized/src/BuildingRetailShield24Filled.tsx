import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 11.5v-2h9v1.21c-.36.27-.81.55-1.33.79H7.5zM18 8.75v1.22c.37 0 .74.12 1.04.38.4.34 1.1.86 1.96 1.22V6.73A2 2 0 0020 3H4a2 2 0 00-1 3.73v13.52c0 .41.34.75.75.75H6v-5.25c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75V21h1.82A6.5 6.5 0 0112 17v-3.5c0-.18.03-.35.08-.5H6.75a.75.75 0 01-.75-.75v-3.5c0-.41.34-.75.75-.75h10.5c.41 0 .75.34.75.75zM3.5 5c0-.28.22-.5.5-.5h16a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM10 16.5V21H7.5v-4.5H10zm12.5-3.52a7.7 7.7 0 01-4.11-1.87.6.6 0 00-.77 0c-.69.58-2.21 1.7-4.12 1.87a.54.54 0 00-.5.52V17c0 4.22 4.1 5.72 4.87 5.96.09.03.17.03.26 0C18.9 22.72 23 21.22 23 17v-3.5c0-.28-.22-.5-.5-.52z" fill={primaryFill} /></svg>;
}

const BuildingRetailShield24Filled = wrapIcon(rawSvg({}), 'BuildingRetailShield24Filled');
export default BuildingRetailShield24Filled;
      