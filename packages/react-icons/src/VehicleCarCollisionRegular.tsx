import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 4a.5.5 0 000 1h.44c.69 0 1.29.47 1.45 1.14L4.86 8H2.5a.5.5 0 000 1h3c.83 0 1.5.67 1.5 1.5v1.7a.8.8 0 01-.14.46 2.5 2.5 0 10.12 1.17A1.8 1.8 0 008 12.2v-1.7a2.5 2.5 0 00-2.1-2.47L5.36 5.9A2.5 2.5 0 002.94 4H2.5zm.5 9.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm12.4-7.67c.25-.5.77-.83 1.34-.83h.76a.5.5 0 000-1h-.76a2.5 2.5 0 00-2.24 1.38l-1.34 2.7-2.27.56A2.5 2.5 0 009 11.06v1.14c0 1 .8 1.8 1.8 1.8h.25a2.5 2.5 0 004.9 0h1.55a.5.5 0 000-1h-1.55a2.5 2.5 0 00-4.9 0h-.25a.8.8 0 01-.8-.8v-1.14c0-.69.47-1.29 1.14-1.45L13.56 9h3.94a.5.5 0 000-1h-3.2l1.1-2.17zM12 13.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-5-7v-1a.5.5 0 011 0v1a.5.5 0 01-1 0zm2.85 1.35l1-1a.5.5 0 00-.7-.7l-1 1a.5.5 0 10.7.7z" fill={primaryFill} /></svg>;
}

const VehicleCarCollisionRegular = wrapIcon(rawSvg({}), 'VehicleCarCollisionRegular');
export default VehicleCarCollisionRegular;
      