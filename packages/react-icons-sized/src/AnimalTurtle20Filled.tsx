import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.1 4c-1.47 0-2.5.55-3.21 1.38a7.5 7.5 0 00-1.36 2.77L4.27 9H2.5a.5.5 0 00-.5.5c0 1.08.5 2.1 1.3 2.63l-.44 1.07a1.31 1.31 0 001.2 1.81h1.47c.5 0 .97-.29 1.19-.75l.47-1c1.31.18 2.64.18 3.95 0l.48 1c.21.46.67.75 1.18.75h1.45a1.31 1.31 0 001.21-1.8l-.5-1.21h1.7c.68 0 1.34-.52 1.34-1.26V10c0-1.14-.99-2-2.12-2H13.8a6.9 6.9 0 00-1.4-2.63A4.28 4.28 0 009.1 4zm5.57 7l-.57-2h1.78c.66 0 1.12.49 1.12 1v.74c0 .09-.11.26-.33.26h-2zm-2.5 2.08c.65-.14 1.3-.32 1.93-.55l.44 1.05a.31.31 0 01-.3.43H12.8a.31.31 0 01-.28-.18l-.35-.75zm-7.95-.55c.64.23 1.29.41 1.95.55l-.36.75a.31.31 0 01-.28.18H4.07a.31.31 0 01-.29-.43l.44-1.05zM3.97 10l-.34 1.12c-.27-.26-.5-.65-.58-1.12h.92z" fill={primaryFill} /></svg>;
}

const AnimalTurtle20Filled = wrapIcon(rawSvg({}), 'AnimalTurtle20Filled');
export default AnimalTurtle20Filled;
      