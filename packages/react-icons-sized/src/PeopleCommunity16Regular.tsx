import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M9.78 4.58a2 2 0 112.43-3.16 2 2 0 01-2.43 3.16zM11 2a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /><path d="M2.5 6h2.67A3 3 0 005 7H2.5a.5.5 0 00-.5.5c0 .82.32 1.42.84 1.83.23.2.52.35.84.46a2.5 2.5 0 00-.53.87 3.73 3.73 0 01-.94-.55A3.25 3.25 0 011 7.5C1 6.67 1.67 6 2.5 6z" fill={primaryFill} /><path d="M6.27 6a2 2 0 001 2.86A2 2 0 0010 7a2 2 0 00-2-2 2 2 0 00-1.73 1zm1.5.03a1 1 0 011.2 1.2 1 1 0 11-1.2-1.2z" fill={primaryFill} /><path d="M13.16 9.33c-.23.2-.52.35-.84.46.24.25.42.54.53.87.34-.14.66-.32.94-.55.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5h-2.67A3 3 0 0111 7h2.5c.28 0 .5.22.5.5 0 .82-.32 1.42-.84 1.83z" fill={primaryFill} /><path d="M10.5 10a1.5 1.5 0 011.5 1.5c0 1.12-.46 2.01-1.21 2.61-.74.6-1.74.89-2.79.89a4.43 4.43 0 01-2.79-.89A3.25 3.25 0 014 11.5 1.5 1.5 0 015.5 10h5zm0 1h-5a.5.5 0 00-.5.5c0 .82.32 1.42.84 1.83.52.43 1.28.67 2.16.67.88 0 1.64-.24 2.16-.67.52-.4.84-1.01.84-1.83a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const PeopleCommunity16Regular = wrapIcon(rawSvg({}), 'PeopleCommunity16Regular');
export default PeopleCommunity16Regular;
      