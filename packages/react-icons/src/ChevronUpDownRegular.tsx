import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.91 7.22a.5.5 0 01-.76.63L10 3.71 5.85 7.85l-.07.06a.5.5 0 01-.63-.76l4.5-4.5.07-.06a.5.5 0 01.63.06l4.5 4.5.06.07zM5.1 12.78a.5.5 0 01.76-.63L10 16.29l4.15-4.14.07-.06a.5.5 0 01.63.76l-4.5 4.5-.07.06a.5.5 0 01-.63-.06l-4.5-4.5-.06-.07z" fill={primaryFill} /></svg>;
}

const ChevronUpDownRegular = wrapIcon(rawSvg({}), 'ChevronUpDownRegular');
export default ChevronUpDownRegular;
      