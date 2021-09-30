import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 6V3H3v3c0 .28.22.5.5.5h13A.5.5 0 0017 6zm-4.55 1l-2.4 4.78a.5.5 0 10.9.44L13.56 7 13 6.5l-.55.5zM10 17.5c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5z" fill={primaryFill} /></svg>;
}

const InkingToolAccentFilled = wrapIcon(rawSvg({}), 'InkingToolAccentFilled');
export default InkingToolAccentFilled;
      