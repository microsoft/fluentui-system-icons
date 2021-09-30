import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L5.79 6.5H3.75a.75.75 0 000 1.5h3.54l3.5 3.5H3.75a.75.75 0 000 1.5h8.54l4.86 4.85a.5.5 0 00.7-.7l-15-15zm10.77 9.35l1.5 1.5h1.13a.75.75 0 000-1.5h-2.63zm-5-5l1.5 1.5h6.13a.75.75 0 000-1.5H8.62z" fill={primaryFill} /></svg>;
}

const EqualOffFilled = wrapIcon(rawSvg({}), 'EqualOffFilled');
export default EqualOffFilled;
      