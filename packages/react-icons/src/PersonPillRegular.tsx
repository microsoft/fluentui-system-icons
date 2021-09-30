import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm5.88 5H5A2 2 0 003 13c0 1.7.83 2.97 2.13 3.8 1.1.7 2.52 1.08 4.06 1.17a3.61 3.61 0 01-.28-1.02 7.35 7.35 0 01-3.24-1A3.36 3.36 0 014 13a1 1 0 011-1h6.88l1-1zm5.47-.35a2.62 2.62 0 00-3.7 0l-4 4a2.62 2.62 0 003.7 3.7l4-4a2.62 2.62 0 000-3.7zm-3 .7a1.62 1.62 0 112.3 2.3L16 15.29 13.7 13l1.65-1.65zm-1.5 4.3c.2.2.2.5 0 .7l-1 1a.5.5 0 01-.7-.7l1-1c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const PersonPillRegular = wrapIcon(rawSvg({}), 'PersonPillRegular');
export default PersonPillRegular;
      