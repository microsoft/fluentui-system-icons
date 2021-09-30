import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.96 5.3a.5.5 0 01-.1.55l-2 2a.5.5 0 01-.36.15h-2.8l-1.35 1.35a1.5 1.5 0 11-.7-.7L12 7.29V4.5a.5.5 0 01.15-.35l2-2a.5.5 0 01.85.35V5h2.5c.2 0 .38.12.46.3zM16.3 6H14.5a.5.5 0 01-.5-.5V3.7l-1 1V7h2.3l1-1zm1.32 1.52a8 8 0 11-5.12-5.13l-.81.81A7.02 7.02 0 003 10a7 7 0 1013.8-1.68l.8-.8zM14.9 9a5.02 5.02 0 01-4.9 6 5 5 0 111-9.9v1.03A4 4 0 1013.87 9h1.03z" fill={primaryFill} /></svg>;
}

const TargetArrow20Regular = wrapIcon(rawSvg({}), 'TargetArrow20Regular');
export default TargetArrow20Regular;
      