import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.35 3.85a.5.5 0 10-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 10.7-.7L4.7 5.5h1.8a.5.5 0 100-1H4.7l.65-.65z" fill={primaryFill} /><path d="M5 0a5 5 0 100 10A5 5 0 005 0zM1 5a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /></svg>;
}

const PresenceOof10Regular = wrapIcon(rawSvg({}), 'PresenceOof10Regular');
export default PresenceOof10Regular;
      