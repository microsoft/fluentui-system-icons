import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 4.81c0-1.09-1.3-1.66-2.1-.9L9.45 8.52c-.33.3-.75.48-1.2.48H5.25A3.25 3.25 0 002 12.26v3.49C2 17.55 3.46 19 5.25 19h3.01c.45 0 .87.17 1.2.47l4.94 4.63c.8.74 2.1.18 2.1-.92V4.81z" fill={primaryFill} /><path d="M21.66 6.24A1 1 0 0020 7v5.03l-.36-.3a1 1 0 10-1.28 1.54l.88.73-.88.73a1 1 0 001.28 1.54l.36-.3V21a1 1 0 001.66.75l4-3.5a1 1 0 00-.02-1.52L22.36 14l3.28-2.73a1 1 0 00.02-1.52l-4-3.5zm1.8 11.28L22 18.8v-2.5l1.46 1.22zM22 9.2l1.46 1.28L22 11.7V9.2z" fill={primaryFill} /></svg>;
}

const SpeakerBluetooth28Filled = wrapIcon(rawSvg({}), 'SpeakerBluetooth28Filled');
export default SpeakerBluetooth28Filled;
      