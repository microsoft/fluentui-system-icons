import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 6a4 4 0 118 0 4 4 0 01-8 0z" fill={primaryFill} /><path d="M2 13a2 2 0 012-2h6.26a5.48 5.48 0 00-.05 6.94c-.4.04-.8.06-1.21.06a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 012 13z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" fill={primaryFill} /></svg>;
}

const PersonDeleteFilled = wrapIcon(rawSvg({}), 'PersonDeleteFilled');
export default PersonDeleteFilled;
      