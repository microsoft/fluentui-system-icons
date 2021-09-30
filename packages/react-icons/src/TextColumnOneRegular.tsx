import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 5.5a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9a.5.5 0 00.5-.5z" fill={primaryFill} /><path d="M15 8.5a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9a.5.5 0 00.5-.5z" fill={primaryFill} /><path d="M15 11.5a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9a.5.5 0 00.5-.5z" fill={primaryFill} /><path d="M15 14.5a.5.5 0 00-.5-.5h-9a.5.5 0 000 1h9a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const TextColumnOneRegular = wrapIcon(rawSvg({}), 'TextColumnOneRegular');
export default TextColumnOneRegular;
      