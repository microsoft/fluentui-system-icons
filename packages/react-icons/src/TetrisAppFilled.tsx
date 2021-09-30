import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.75c0-.41.34-.75.75-.75H11v4H7V2.75zM2.75 7a.75.75 0 00-.75.75v2.5c0 .41.34.75.75.75H6V7H2.75zM11 7H7v4h3.25c.41 0 .75-.34.75-.75V7zm4.25-5H12v4h3.25c.41 0 .75-.34.75-.75v-2.5a.75.75 0 00-.75-.75zM4 14.75c0-.41.34-.75.75-.75H8v4H4.75a.75.75 0 01-.75-.75v-2.5zM13 18v-4H9v4h4zm5-4v3.25c0 .41-.34.75-.75.75H14v-4h4zm-3.25-5a.75.75 0 00-.75.75V13h4V9.75a.75.75 0 00-.75-.75h-2.5z" fill={primaryFill} /></svg>;
}

const TetrisAppFilled = wrapIcon(rawSvg({}), 'TetrisAppFilled');
export default TetrisAppFilled;
      