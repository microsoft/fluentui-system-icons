import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.7 2.23a1 1 0 011.3.95v6.03c-.32-.1-.66-.16-1-.19V6.18L8 8.37v7.13a2.5 2.5 0 11-1-2V5.37a1 1 0 01.7-.96l7-2.18zM8 7.32l7-2.19V3.18L8 5.37v1.95zM5.5 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13.5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.26-.44l-3-1.65a.5.5 0 00-.74.44v3.3c0 .38.4.62.74.44l3-1.65a.5.5 0 000-.88z" fill={primaryFill} /></svg>;
}

const MusicNote2PlayRegular = wrapIcon(rawSvg({}), 'MusicNote2PlayRegular');
export default MusicNote2PlayRegular;
      