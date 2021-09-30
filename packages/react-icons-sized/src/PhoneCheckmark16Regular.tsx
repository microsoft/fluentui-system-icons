import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 10.98v2.27c0 .41-.34.75-.75.75h-4.5a.75.75 0 01-.75-.75V2.75c0-.41.34-.75.75-.75h.5c.32-.38.68-.72 1.09-1H5.75C4.78 1 4 1.78 4 2.75v10.5c0 .97.78 1.75 1.75 1.75h4.5c.97 0 1.75-.78 1.75-1.75v-2.46c-.32.1-.66.16-1 .19zM6.5 12.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1H7a.5.5 0 01-.5-.5zm4-2.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-5.65l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 11.7-.7l.65.64 2.65-2.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const PhoneCheckmark16Regular = wrapIcon(rawSvg({}), 'PhoneCheckmark16Regular');
export default PhoneCheckmark16Regular;
      