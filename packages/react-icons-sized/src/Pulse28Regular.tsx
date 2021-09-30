import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.02 3c.35.01.64.25.71.59l3.9 17.79L18.8 8.52a.75.75 0 011.43.03l1.35 4.95h3.68a.75.75 0 010 1.5H21a.75.75 0 01-.72-.55l-.84-3.07-4.23 13.1a.75.75 0 01-1.44-.07L9.9 6.81l-2.18 7.65A.75.75 0 017 15H2.75a.75.75 0 010-1.5h3.68l2.85-9.96c.1-.33.4-.55.74-.54z" fill={primaryFill} /></svg>;
}

const Pulse28Regular = wrapIcon(rawSvg({}), 'Pulse28Regular');
export default Pulse28Regular;
      