import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 9.5a.5.5 0 01-.5.5H16v2a2 2 0 01-2 2h-1a2 2 0 01-2-2v-2H9v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4H2.5a.5.5 0 010-1H4V5c0-1.1.9-2 2-2h1a2 2 0 012 2v4h2V7c0-1.1.9-2 2-2h1a2 2 0 012 2v2h1.5c.28 0 .5.22.5.5z" fill={primaryFill} /></svg>;
}

const AlignCenterHorizontalFilled = wrapIcon(rawSvg({}), 'AlignCenterHorizontalFilled');
export default AlignCenterHorizontalFilled;
      