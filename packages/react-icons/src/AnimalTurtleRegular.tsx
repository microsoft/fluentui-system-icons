import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.1 4c-1.47 0-2.5.55-3.21 1.38a7.5 7.5 0 00-1.36 2.77L4.27 9H2.5a.5.5 0 00-.5.5c0 1.08.5 2.1 1.3 2.63l-.44 1.07a1.31 1.31 0 001.2 1.81h1.47c.5 0 .97-.29 1.19-.75l.47-1c1.31.18 2.64.18 3.95 0l.48 1c.21.46.67.75 1.18.75h1.45a1.31 1.31 0 001.21-1.8l-.5-1.21h1.7c.68 0 1.34-.52 1.34-1.26V10c0-1.14-.99-2-2.12-2H13.8a6.9 6.9 0 00-1.4-2.63A4.28 4.28 0 009.1 4zm5.57 7l-.57-2h1.78c.66 0 1.12.49 1.12 1v.74c0 .09-.11.26-.33.26h-2zm-.57 1.53l.44 1.05a.31.31 0 01-.3.43H12.8a.31.31 0 01-.28-.18l-.35-.75c.65-.14 1.3-.32 1.93-.55zm-7.93.55l-.36.75a.31.31 0 01-.28.18H4.07a.31.31 0 01-.29-.43l.44-1.05c.64.23 1.29.41 1.95.55zm-2.54-1.96c-.27-.26-.5-.65-.58-1.12h.92l-.34 1.12zM5.5 8.44c.27-.91.6-1.77 1.15-2.4A3.03 3.03 0 019.1 5c1.2 0 2 .43 2.56 1.05.59.63.96 1.5 1.23 2.39l.9 3.14c-3 1.09-6.25 1.1-9.25 0l.95-3.14z" fill={primaryFill} /></svg>;
}

const AnimalTurtleRegular = wrapIcon(rawSvg({}), 'AnimalTurtleRegular');
export default AnimalTurtleRegular;
      