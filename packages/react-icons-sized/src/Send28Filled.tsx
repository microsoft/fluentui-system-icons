import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.79 2.77l21.07 10.08a1.25 1.25 0 010 2.26L3.8 25.18a1.25 1.25 0 01-1.75-1.45L4.15 16a.5.5 0 01.42-.37l10.2-1.38a.25.25 0 00.2-.15l.02-.06a.25.25 0 00-.16-.27l-.05-.02-10.2-1.38a.5.5 0 01-.42-.37L2.04 4.23A1.25 1.25 0 013.8 2.77z" fill={primaryFill} /></svg>;
}

const Send28Filled = wrapIcon(rawSvg({}), 'Send28Filled');
export default Send28Filled;
      