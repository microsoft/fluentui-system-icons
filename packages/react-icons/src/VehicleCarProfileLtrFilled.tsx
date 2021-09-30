import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.98 13.84c.6-.27 1.02-.88 1.02-1.59v-1.21a2.5 2.5 0 00-1.86-2.42l-2.09-.56-1.54-2.77A2.5 2.5 0 0010.32 4H6.94a2.5 2.5 0 00-2.37 1.7l-.82 2.48A2.5 2.5 0 002 10.56v1.69c0 .7.42 1.32 1.02 1.6a2.5 2.5 0 004.93.15h4.1a2.5 2.5 0 004.93-.16zM6.94 5H8v3H4.86l.66-1.97A1.5 1.5 0 016.94 5zm4.7.77L12.86 8H9V5h1.32c.55 0 1.05.3 1.31.77zM4 13.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm9 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={primaryFill} /></svg>;
}

const VehicleCarProfileLtrFilled = wrapIcon(rawSvg({}), 'VehicleCarProfileLtrFilled');
export default VehicleCarProfileLtrFilled;
      