import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7L3.39 4.1A2 2 0 002 6v7c0 1.1.9 2 2 2h5v-1H4a1 1 0 01-1-1V6a1 1 0 011-1h.3l5.7 5.7v6.8a.5.5 0 00.91.29l1.57-2.25 2.78.43 1.89 1.88a.5.5 0 00.7-.7l-15-15zm11.22 12.62l-1.74-.26a.5.5 0 00-.49.2l-.84 1.2v-4.2l3.07 3.06z" fill={primaryFill} /><path d="M16.9 14.78A2 2 0 0018 13V6a2 2 0 00-2-2H6.12l1 1H16a1 1 0 011 1v7a1 1 0 01-.89 1l.8.78z" fill={primaryFill} /></svg>;
}

const CursorHoverOffRegular = wrapIcon(rawSvg({}), 'CursorHoverOffRegular');
export default CursorHoverOffRegular;
      