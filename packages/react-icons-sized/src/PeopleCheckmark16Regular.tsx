import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 4.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm-4 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM9 5c0 .53.2 1 .53 1.36a5.49 5.49 0 013.13-.24A2 2 0 109 5zm2-1a1 1 0 110 2 1 1 0 010-2zm-4.94 9h.15c-.1-.32-.16-.66-.19-1C3.92 12 3 11.41 3 10.27V9.5c0-.28.22-.5.5-.5h3.1c.18-.36.4-.7.66-1H3.5C2.67 8 2 8.67 2 9.5v.77C2 12.1 3.45 13 6.06 13zm5.44 3a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm2.35-5.65a.5.5 0 00-.7-.7l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3z" fill={primaryFill} /></svg>;
}

const PeopleCheckmark16Regular = wrapIcon(rawSvg({}), 'PeopleCheckmark16Regular');
export default PeopleCheckmark16Regular;
      