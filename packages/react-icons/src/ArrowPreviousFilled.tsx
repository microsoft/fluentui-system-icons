import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.75c-.38 0-.7.28-.74.65l-.01.1v9a.75.75 0 001.5.1V5.5A.75.75 0 006 4.75zm8.28.22a.75.75 0 00-.98-.07l-.08.07-4.5 4.5a.75.75 0 00-.07.98l.07.08 4.5 4.5a.75.75 0 001.13-.98l-.07-.08L10.31 10l3.97-3.97c.3-.3.3-.77 0-1.06z" fill={primaryFill} /></svg>;
}

const ArrowPreviousFilled = wrapIcon(rawSvg({}), 'ArrowPreviousFilled');
export default ArrowPreviousFilled;
      