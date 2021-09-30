import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.3 10.02L11 10H4a2 2 0 00-2 2v1.5C2 15.55 4.09 17 7.5 17c.73 0 1.4-.07 2-.2-.13-.3-.25-.61-.33-.94-.5.1-1.05.14-1.67.14C4.58 16 3 14.9 3 13.5V12a1 1 0 011-1h6.26c.3-.37.65-.7 1.04-.98zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM13 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-2-1a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-6 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm14 9a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const PeopleCheckmark20Regular = wrapIcon(rawSvg({}), 'PeopleCheckmark20Regular');
export default PeopleCheckmark20Regular;
      