import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 19.5h.97c.22.56.51 1.06.85 1.5H3.75a.75.75 0 01-.75-.75V6.73A2 2 0 014 3h16a2 2 0 011 3.73v4.84c-.6-.25-1.1-.57-1.5-.86V7h-15v12.5H6v-4.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75v4.75zM3.5 5c0 .28.22.5.5.5h16a.5.5 0 000-1H4a.5.5 0 00-.5.5zm4 10.5v4H10v-4H7.5zM6.75 8a.75.75 0 00-.75.75v3.5c0 .41.34.75.75.75h5.33c.2-.58.75-.97 1.33-1.02a5.49 5.49 0 001.76-.48H7.5v-2h9v1.21c.18-.13.34-.25.46-.36.3-.26.67-.38 1.04-.38V8.75a.75.75 0 00-.75-.75H6.75zm11.64 3.1a7.7 7.7 0 004.11 1.88c.28.02.5.24.5.52V17c0 4.22-4.1 5.72-4.87 5.96a.42.42 0 01-.26 0C17.1 22.72 13 21.22 13 17v-3.5c0-.28.22-.5.5-.52a7.71 7.71 0 004.12-1.87.6.6 0 01.77 0z" fill={primaryFill} /></svg>;
}

const BuildingRetailShield24Regular = wrapIcon(rawSvg({}), 'BuildingRetailShield24Regular');
export default BuildingRetailShield24Regular;
      