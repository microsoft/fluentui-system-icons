import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.85 1.15a.5.5 0 00-.7.7 6.6 6.6 0 011.72 4.65 6.6 6.6 0 01-1.72 4.65.5.5 0 00.7.7 7.6 7.6 0 002.03-5.35 7.6 7.6 0 00-2.03-5.35z" fill={primaryFill} /><path d="M13.85 3.15a.5.5 0 00-.7.7c.63.64.97 1.62.97 2.65 0 1.03-.34 2.01-.97 2.65a.5.5 0 00.7.7 4.76 4.76 0 001.28-3.35c0-1.22-.41-2.49-1.28-3.35z" fill={primaryFill} /><path d="M4 7a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /><path d="M1 14a2 2 0 012-2h10a2 2 0 012 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 018 19a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 011 14z" fill={primaryFill} /></svg>;
}

const PersonVoice20Filled = wrapIcon(rawSvg({}), 'PersonVoice20Filled');
export default PersonVoice20Filled;
      