import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 9a2.5 2.5 0 012.5 2.34v5.16a.5.5 0 01-1 .09V14H3v2.5a.5.5 0 01-1 .09V11.5A2.5 2.5 0 014.34 9H15.5zm-9-6h7A2.5 2.5 0 0116 5.34V8h-2v-.5a.5.5 0 00-.41-.5H11a.5.5 0 00-.5.41V8h-1v-.5a.5.5 0 00-.41-.5H6.5a.5.5 0 00-.5.41V8H4V5.5A2.5 2.5 0 016.34 3h.16z" fill={primaryFill} /></svg>;
}

const Bed20Filled = wrapIcon(rawSvg({}), 'Bed20Filled');
export default Bed20Filled;
      