import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3h8a1 1 0 011 1v5.02c.34.03.68.1 1 .19V4a2 2 0 00-2-2H6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 01-.66-1H6a1 1 0 01-1-1h4.2c-.08-.32-.15-.66-.18-1H5V4a1 1 0 011-1z" fill={primaryFill} /><path d="M7 4a1 1 0 00-1 1v1a1 1 0 001 1h6a1 1 0 001-1V5a1 1 0 00-1-1H7zm6 1v1H7V5h6z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.98-1.97a.45.45 0 00-.45-.03.49.49 0 00-.15.1.51.51 0 00-.14.36v3.08a.5.5 0 00.14.35.45.45 0 00.48.13.52.52 0 00.13-.06l2.3-1.57c.06-.04.12-.1.16-.18a.54.54 0 000-.49.49.49 0 00-.17-.18l-2.3-1.5z" fill={primaryFill} /></svg>;
}

const LearningAppRegular = wrapIcon(rawSvg({}), 'LearningAppRegular');
export default LearningAppRegular;
      