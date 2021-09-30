import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.86 2.15a.5.5 0 10-.71.7l4.1 4.1-3.4.49a1 1 0 00-.55 1.7l3.13 3.05-.74 4.3a1 1 0 001.45 1.05L10 15.51l3.86 2.03a1 1 0 001.45-1.05l-.1-.57 1.94 1.93a.5.5 0 00.7-.7l-15-15zM13.99 14.7l.34 1.96-3.86-2.03a1 1 0 00-.93 0l-3.87 2.03.74-4.3a1 1 0 00-.29-.89L3 8.43l4.12-.6L14 14.7z" fill={primaryFill} /><path d="M13.88 11.47a1 1 0 00-.13.16l.88.88-.05-.32 3.12-3.05a1 1 0 00-.56-1.7l-4.31-.63L10.9 2.9a1 1 0 00-1.8 0L7.76 5.63l.74.75L10 3.34l1.93 3.91c.15.3.43.5.75.55l4.32.63-3.12 3.04z" fill={primaryFill} /></svg>;
}

const StarOff20Regular = wrapIcon(rawSvg({}), 'StarOff20Regular');
export default StarOff20Regular;
      