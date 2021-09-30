import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 4.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm-4 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" fill={primaryFill} /><path d="M9 5c0 .53.2 1 .53 1.36a5.49 5.49 0 013.13-.24A2 2 0 109 5zm2-1a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /><path d="M6.06 13h.15c-.1-.32-.16-.66-.19-1C3.92 12 3 11.41 3 10.27V9.5c0-.28.22-.5.5-.5h3.1c.18-.36.4-.7.66-1H3.5C2.67 8 2 8.67 2 9.5v.77C2 12.1 3.45 13 6.06 13z" fill={primaryFill} /><path d="M16 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.4-2.8a3.5 3.5 0 00-4.9 4.9l4.9-4.9zm1.4 2.8c0-.79-.26-1.51-.7-2.1l-4.9 4.9a3.5 3.5 0 005.6-2.8z" fill={primaryFill} /></svg>;
}

const PeopleProhibited16Regular = wrapIcon(rawSvg({}), 'PeopleProhibited16Regular');
export default PeopleProhibited16Regular;
      