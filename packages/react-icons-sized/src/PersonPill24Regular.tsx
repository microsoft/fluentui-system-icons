import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.16 20.48c.06.53.24 1.05.52 1.52-2.99-.06-5.26-.97-6.78-2.74a3.75 3.75 0 01-.9-2.43v-.58C4 15 5.01 14 6.25 14h9.28l-1.5 1.5H6.25a.75.75 0 00-.75.75v.58c0 .53.2 1.05.54 1.46 1.12 1.31 2.81 2.05 5.12 2.19zM12 2a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm10.03 9.47a2.87 2.87 0 00-4.06 0l-5 5a2.87 2.87 0 104.06 4.06l5-5a2.87 2.87 0 000-4.06zm-3 1.06a1.37 1.37 0 111.94 1.94L19 17.94 17.06 16l1.97-1.97zm-2 4.94c.3.3.3.77 0 1.06l-1 1a.75.75 0 11-1.06-1.06l1-1c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const PersonPill24Regular = wrapIcon(rawSvg({}), 'PersonPill24Regular');
export default PersonPill24Regular;
      