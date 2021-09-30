import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12zm-4 11V5H4a1 1 0 00-1 1v8a1 1 0 001 1h8z" fill={primaryFill} /></svg>;
}

const DockPanelRightFilled = wrapIcon(rawSvg({}), 'DockPanelRightFilled');
export default DockPanelRightFilled;
      