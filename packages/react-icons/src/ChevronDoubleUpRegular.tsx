import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.15 14.35a.5.5 0 010-.7L9.6 8.16a.55.55 0 01.78 0l5.46 5.49a.5.5 0 01-.7.7L10 9.2l-5.15 5.16a.5.5 0 01-.7 0zm0-4a.5.5 0 010-.7L9.6 4.16a.55.55 0 01.78 0l5.46 5.49a.5.5 0 01-.7.7L10 5.2l-5.15 5.16a.5.5 0 01-.7 0z" fill={primaryFill} /></svg>;
}

const ChevronDoubleUpRegular = wrapIcon(rawSvg({}), 'ChevronDoubleUpRegular');
export default ChevronDoubleUpRegular;
      