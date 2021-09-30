import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.82 10.5l1 .87a.5.5 0 01-.66.76l-2-1.75a.5.5 0 010-.76l2-1.75a.5.5 0 01.66.76l-1 .87h3.68a.5.5 0 010 1H6.82zM18 14a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12a2 2 0 012 2v8zm-2 1a1 1 0 001-1V6a1 1 0 00-1-1h-3v10h3zm-4 0V5H4a1 1 0 00-1 1v8a1 1 0 001 1h8z" fill={primaryFill} /></svg>;
}

const PanelRightExpandRegular = wrapIcon(rawSvg({}), 'PanelRightExpandRegular');
export default PanelRightExpandRegular;
      