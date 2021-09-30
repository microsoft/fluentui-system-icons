import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.6 5.2a.5.5 0 01.8 0l4.5 6a.5.5 0 01-.4.8h-9a.5.5 0 01-.4-.8l4.5-6zm1.6-.6c-.6-.8-1.8-.8-2.4 0l-4.5 6A1.5 1.5 0 005.5 13h9a1.5 1.5 0 001.2-2.4l-4.5-6zM4 15a.5.5 0 000 1h12a.5.5 0 100-1H4z" fill={primaryFill} /></svg>;
}

const ArrowEjectRegular = wrapIcon(rawSvg({}), 'ArrowEjectRegular');
export default ArrowEjectRegular;
      