import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.8 13H4a2 2 0 00-2 2v1.73C2.17 20.04 5.79 21 8.5 21c1.03 0 2.19-.14 3.24-.49A6.47 6.47 0 0112.8 13zm.2-6.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm8 1a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm2 10a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0l-3.65 3.64-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const PeopleCheckmark24Filled = wrapIcon(rawSvg({}), 'PeopleCheckmark24Filled');
export default PeopleCheckmark24Filled;
      