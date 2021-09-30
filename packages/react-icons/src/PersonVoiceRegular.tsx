import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.85 1.15a.5.5 0 00-.7.7 6.6 6.6 0 011.72 4.65 6.6 6.6 0 01-1.72 4.65.5.5 0 00.7.7 7.6 7.6 0 002.03-5.35 7.6 7.6 0 00-2.03-5.35z" fill={primaryFill} /><path d="M13.85 3.15a.5.5 0 00-.7.7c.63.64.97 1.62.97 2.65 0 1.03-.34 2.01-.97 2.65a.5.5 0 00.7.7 4.76 4.76 0 001.28-3.35c0-1.22-.41-2.49-1.28-3.35z" fill={primaryFill} /><path d="M4 7a4 4 0 118 0 4 4 0 01-8 0zm4-3a3 3 0 100 6 3 3 0 000-6z" fill={primaryFill} /><path d="M1 14a2 2 0 012-2h10a2 2 0 012 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 018 19a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 011 14zm2-1a1 1 0 00-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 008 18c1.74 0 3.26-.36 4.33-1.05A3.36 3.36 0 0014 14a1 1 0 00-1-1H3z" fill={primaryFill} /></svg>;
}

const PersonVoiceRegular = wrapIcon(rawSvg({}), 'PersonVoiceRegular');
export default PersonVoiceRegular;
      