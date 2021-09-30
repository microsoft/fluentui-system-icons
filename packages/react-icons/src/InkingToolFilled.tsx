import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.52 15a6.2 6.2 0 00-.02.5c0 .58.07 1.16.27 1.62.21.47.6.88 1.23.88s1.02-.41 1.23-.88c.2-.46.27-1.04.27-1.62 0-.17 0-.34-.02-.5H8.52z" fill={primaryFill} /><path d="M2.5 5.5v-3c0-.28.22-.5.5-.5h14c.28 0 .5.22.5.5v3c0 .83-.67 1.5-1.5 1.5H4a1.5 1.5 0 01-1.5-1.5z" fill={primaryFill} /><path d="M4.75 8l2.72 5.45a1 1 0 00.9.55h3.26a1 1 0 00.9-.55L15.25 8H4.75z" fill={primaryFill} /></svg>;
}

const InkingToolFilled = wrapIcon(rawSvg({}), 'InkingToolFilled');
export default InkingToolFilled;
      