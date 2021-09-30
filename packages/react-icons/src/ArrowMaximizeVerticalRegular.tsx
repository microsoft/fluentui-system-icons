import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.65 1.4c.2-.2.5-.2.7 0l2.12 2.13a.5.5 0 01-.7.7L10.5 2.96V7.5a.5.5 0 01-1 0V2.96L8.23 4.23a.5.5 0 11-.7-.7L9.65 1.4z" fill={primaryFill} /><path d="M4 10c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11A.5.5 0 014 10z" fill={primaryFill} /><path d="M10.5 17.04V12.5a.5.5 0 00-1 0v4.54l-1.27-1.27a.5.5 0 10-.7.7l2.12 2.13c.2.2.5.2.7 0l2.12-2.12a.5.5 0 00-.7-.71l-1.27 1.27z" fill={primaryFill} /></svg>;
}

const ArrowMaximizeVerticalRegular = wrapIcon(rawSvg({}), 'ArrowMaximizeVerticalRegular');
export default ArrowMaximizeVerticalRegular;
      