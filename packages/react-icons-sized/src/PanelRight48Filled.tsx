import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 12.75A4.75 4.75 0 018.75 8h30.5A4.75 4.75 0 0144 12.75v22.5A4.75 4.75 0 0139.25 40H8.75A4.75 4.75 0 014 35.25v-22.5zm4.75-2.25c-1.24 0-2.25 1-2.25 2.25v22.5c0 1.24 1 2.25 2.25 2.25H29v-27H8.75z" fill={primaryFill} /></svg>;
}

const PanelRight48Filled = wrapIcon(rawSvg({}), 'PanelRight48Filled');
export default PanelRight48Filled;
      