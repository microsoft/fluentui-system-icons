import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L4 4.71a7.97 7.97 0 00.52 11.12c.2.18.48.17.67-.02.2-.2.19-.55-.03-.75a6.98 6.98 0 01-.45-9.64l1.06 1.06a5.48 5.48 0 00.54 7.6c.18.17.46.15.64-.03.21-.21.18-.57-.04-.78a4.49 4.49 0 01-.43-6.08l2.36 2.35a1.25 1.25 0 001.62 1.62l6.69 6.7a.5.5 0 00.7-.71L16 15.29l-.7-.7-1.07-1.07-.71-.71-2.36-2.35-1.62-1.62-6.69-6.7z" fill={primaryFill} /><path d="M16.62 14.5a7.96 7.96 0 00-.97-10.17.48.48 0 00-.68.01c-.2.2-.19.54.02.75a6.98 6.98 0 01.9 8.68l.73.73z" fill={primaryFill} /><path d="M14.8 12.68a5.47 5.47 0 00-.93-6.59.46.46 0 00-.66.02c-.2.2-.19.55.02.76a4.49 4.49 0 01.83 5.07l.74.74z" fill={primaryFill} /></svg>;
}

const LiveOff20Regular = wrapIcon(rawSvg({}), 'LiveOff20Regular');
export default LiveOff20Regular;
      