import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.66 12.08l-2.15 1.96a13.09 13.09 0 001.18 2.85 12.54 12.54 0 001.88 2.44l2.77-.87a4 4 0 014.3 1.27l1.58 1.93a3.96 3.96 0 01-.36 5.41c-2.58 2.4-6.55 3.22-9.53.83a27.46 27.46 0 01-9.88-17.08C2.88 7.05 5.58 4.02 8.95 3c2-.62 4.14.44 4.88 2.4l.87 2.33a4 4 0 01-1.04 4.35zM9.53 4.9c-2.71.83-4.48 3.1-4.1 5.6a25.46 25.46 0 009.16 15.83c1.98 1.6 4.83 1.2 6.9-.73.76-.7.84-1.88.18-2.68L20.1 21a2 2 0 00-2.15-.63l-3.34 1.05a1 1 0 01-.97-.2l-.08-.08a10.06 10.06 0 01-.84-.86c-.51-.58-1.18-1.4-1.75-2.4a14.53 14.53 0 01-1.52-3.86l-.02-.1a1 1 0 01.3-.95l2.59-2.37a2 2 0 00.52-2.17l-.87-2.32a1.98 1.98 0 00-2.43-1.2zM20 3a1 1 0 00-1 1v11a1 1 0 102 0v-4h3a4 4 0 000-8h-4zm4 6h-3V5h3a2 2 0 110 4z" fill={primaryFill} /></svg>;
}

const CallPark32Regular = wrapIcon(rawSvg({}), 'CallPark32Regular');
export default CallPark32Regular;
      