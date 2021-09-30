import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 5a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /><path d="M3.5 8a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /><path d="M3 11.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3.5 14a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /></svg>;
}

const TextColumnOneWideRegular = wrapIcon(rawSvg({}), 'TextColumnOneWideRegular');
export default TextColumnOneWideRegular;
      