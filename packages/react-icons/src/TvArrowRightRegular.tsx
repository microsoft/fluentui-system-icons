import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35A.5.5 0 0017 5.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 5H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /><path d="M17 13v-2.6c.36-.18.7-.4 1-.66V13a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h5.2c-.08.32-.15.66-.18 1H4a1 1 0 00-1 1v7a1 1 0 001 1h12a1 1 0 001-1z" fill={primaryFill} /><path d="M5 16.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const TvArrowRightRegular = wrapIcon(rawSvg({}), 'TvArrowRightRegular');
export default TvArrowRightRegular;
      