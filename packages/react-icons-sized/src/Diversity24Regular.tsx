import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3h-2a3 3 0 01-3-3V6zM5.55 3.9c.6-1.2 2.3-1.2 2.9 0l2.37 4.71A1.64 1.64 0 019.37 11H4.63c-1.22 0-2-1.3-1.45-2.39L5.55 3.9zm1.39.62c-.01 0-.03.01-.05.05L4.52 9.3a.14.14 0 00-.02.07.16.16 0 00.07.13.1.1 0 00.06.01h4.74a.1.1 0 00.06-.01l.05-.05a.16.16 0 00.02-.08c0-.01 0-.04-.02-.07L7.11 4.57c-.02-.04-.04-.05-.05-.05A.13.13 0 007 4.5c-.03 0-.05 0-.06.02zM11 17a4 4 0 11-8 0 4 4 0 018 0zm-1.5 0a2.5 2.5 0 00-3.66-2.22l3.38 3.38c.18-.35.28-.74.28-1.16zM7 19.5c.42 0 .81-.1 1.16-.28l-3.38-3.38A2.5 2.5 0 007 19.5zm9.52-6.38c.3-.16.66-.16.96 0l2.97 1.53a1 1 0 01.55.89v2.92a1 1 0 01-.55.89l-2.97 1.53c-.3.16-.66.16-.96 0l-2.97-1.53a1 1 0 01-.55-.89v-2.92a1 1 0 01.55-.89l2.97-1.53zm-2.02 2.73v2.3l2.5 1.3 2.5-1.3v-2.3l-2.5-1.3-2.5 1.3z" fill={primaryFill} /></svg>;
}

const Diversity24Regular = wrapIcon(rawSvg({}), 'Diversity24Regular');
export default Diversity24Regular;
      