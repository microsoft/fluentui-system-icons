import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 1c.28 0 .5.22.5.5v17a.5.5 0 01-1 0v-17c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const DividerTallRegular = wrapIcon(rawSvg({}), 'DividerTallRegular');
export default DividerTallRegular;
      