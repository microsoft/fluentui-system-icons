import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.96 11.48c1.2.57 1.75 1.95 1.42 3.4l-.44 1.87a1.25 1.25 0 01-1.42.95l-3.15-.52a.75.75 0 01-.6-.58l-.79-3.51a.75.75 0 00-.5-.55l-.23.71.24-.71h-.01l-.02-.01a3.64 3.64 0 00-.27-.08 12.13 12.13 0 00-5.63-.18 12.12 12.12 0 00-1.02.26h-.02l.23.72-.24-.71a.75.75 0 00-.5.55l-.77 3.51c-.07.3-.31.53-.61.58l-3.15.52c-.65.11-1.27-.3-1.42-.95l-.43-1.86c-.33-1.45.23-2.83 1.43-3.4a21.14 21.14 0 0117.9 0zm-6.35 2.37l.69 3.08c.2.89.92 1.58 1.82 1.73l3.15.52c1.44.24 2.8-.68 3.13-2.1l.44-1.87c.45-1.97-.27-4.14-2.23-5.08a22.64 22.64 0 00-19.19 0c-1.97.93-2.7 3.12-2.25 5.1l.43 1.86a2.75 2.75 0 003.13 2.1l3.15-.53c.9-.15 1.62-.84 1.82-1.73l.69-3.08A11.03 11.03 0 0114 13.5a10.54 10.54 0 012.61.35z" fill={primaryFill} /></svg>;
}

const CallEnd28Regular = wrapIcon(rawSvg({}), 'CallEnd28Regular');
export default CallEnd28Regular;
      