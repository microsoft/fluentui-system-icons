import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8.83l.87 1a.5.5 0 00.76-.66l-1.75-2a.5.5 0 00-.76 0l-1.75 2a.5.5 0 00.76.65l.87-1v3.68a.5.5 0 001 0V8.83zM4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zM3 6a1 1 0 011-1h12a1 1 0 011 1v5h-5.5v1.5a1.5 1.5 0 11-3 0V11H3V6z" fill={primaryFill} /></svg>;
}

const PanelBottomExpandFilled = wrapIcon(rawSvg({}), 'PanelBottomExpandFilled');
export default PanelBottomExpandFilled;
      