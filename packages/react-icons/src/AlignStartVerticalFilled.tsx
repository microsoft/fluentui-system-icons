import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 3a.5.5 0 000 1h15a.5.5 0 000-1h-15zM6 6a2 2 0 00-2 2v2c0 1.1.9 2 2 2h8a2 2 0 002-2V8a2 2 0 00-2-2H6z" fill={primaryFill} /></svg>;
}

const AlignStartVerticalFilled = wrapIcon(rawSvg({}), 'AlignStartVerticalFilled');
export default AlignStartVerticalFilled;
      