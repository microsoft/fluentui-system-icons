import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 6a.5.5 0 000 1h2a.5.5 0 000-1h-2z" fill={primaryFill} /><path d="M5.75 7.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M9 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /><path d="M2 4.5c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v11a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-11zM3 5v4h14V5H3zm5 5H6v3.5a.5.5 0 01-1 0V10H3v5h14v-5h-2v3.5a.5.5 0 01-1 0V10h-2v3.5a.5.5 0 01-1 0V10H9v3.5a.5.5 0 01-1 0V10z" fill={primaryFill} /></svg>;
}

const Midi20Regular = wrapIcon(rawSvg({}), 'Midi20Regular');
export default Midi20Regular;
      