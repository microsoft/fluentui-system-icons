import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.97 6.66a.5.5 0 01-.94-.32c-.01.03 0 0 0 0a1.66 1.66 0 01.06-.16l.18-.38A5.15 5.15 0 016 3a5.15 5.15 0 014.96 3.3l.02.1.02.1s.08.33-.34.47a.5.5 0 01-.63-.31l-.01-.02a2.14 2.14 0 00-.17-.38A4.15 4.15 0 006 4a4.15 4.15 0 00-4.02 2.64v.02z" fill={primaryFill} /><path d="M6 5a2 2 0 100 4 2 2 0 000-4zM5 7a1 1 0 112 0 1 1 0 01-2 0z" fill={primaryFill} /></svg>;
}

const EyeShow12Regular = wrapIcon(rawSvg({}), 'EyeShow12Regular');
export default EyeShow12Regular;
      