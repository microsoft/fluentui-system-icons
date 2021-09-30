import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.08 5.68c.28-1.63 2-2.58 3.53-1.95l.36.14a.75.75 0 10.56-1.38l-.36-.15A4.08 4.08 0 009.6 5.43L9 9H5.74a.75.75 0 000 1.5h2.98l-.5 2.96a2.58 2.58 0 01-3.92 1.75l-.16-.1a.75.75 0 00-.8 1.27l.16.1c2.46 1.55 5.7.1 6.2-2.77l.55-3.21h2.99a.75.75 0 100-1.5h-2.74l.57-3.32z" fill={primaryFill} /></svg>;
}

const FStopFilled = wrapIcon(rawSvg({}), 'FStopFilled');
export default FStopFilled;
      