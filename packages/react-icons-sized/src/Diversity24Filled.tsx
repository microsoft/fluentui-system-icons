import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 3a3 3 0 00-3 3v2a3 3 0 003 3h2a3 3 0 003-3V6a3 3 0 00-3-3h-2zm-10.45.9c.6-1.2 2.3-1.2 2.9 0l2.37 4.71A1.64 1.64 0 019.37 11H4.63c-1.22 0-2-1.3-1.45-2.39L5.55 3.9zm5.38 13.86c-.1.54-.32 1.05-.62 1.49l-5.56-5.56A3.98 3.98 0 017 13a4 4 0 013.93 4.75v.01zm-3.24 3.18a4 4 0 01-4.62-4.69v-.01c.1-.54.32-1.05.62-1.49l5.56 5.56a3.98 3.98 0 01-1.56.63zm8.83-7.82c.3-.16.66-.16.96 0l2.97 1.53a1 1 0 01.55.89v2.92a1 1 0 01-.55.89l-2.97 1.53c-.3.16-.66.16-.96 0l-2.97-1.53a1 1 0 01-.55-.89v-2.92a1 1 0 01.55-.89l2.97-1.53z" fill={primaryFill} /></svg>;
}

const Diversity24Filled = wrapIcon(rawSvg({}), 'Diversity24Filled');
export default Diversity24Filled;
      