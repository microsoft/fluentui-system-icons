import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 3v4a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V3h13zm-10 7.5v7l6.45-3.1a1 1 0 00.55-.9v-3h-7z" fill={primaryFill} /></svg>;
}

const HighlightAccentFilled = wrapIcon(rawSvg({}), 'HighlightAccentFilled');
export default HighlightAccentFilled;
      