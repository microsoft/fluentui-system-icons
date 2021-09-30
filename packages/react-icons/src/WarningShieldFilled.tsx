import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.69 1.85L1.13 13.78A1.5 1.5 0 002.44 16h7.94a7.27 7.27 0 01-.38-2.12v-2.79c0-.75.59-1.42 1.4-1.42.9 0 1.73-.35 2.56-1.2L10.3 1.85a1.5 1.5 0 00-2.62 0zM9 5.75c.41 0 .75.34.75.75v4a.75.75 0 01-1.5 0v-4c0-.41.34-.75.75-.75zm.75 7a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm7.25-2.4a4.63 4.63 0 01-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0013 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 00-.4-.33 4.24 4.24 0 01-1.6-.32z" fill={primaryFill} /></svg>;
}

const WarningShieldFilled = wrapIcon(rawSvg({}), 'WarningShieldFilled');
export default WarningShieldFilled;
      