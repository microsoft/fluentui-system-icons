import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 3.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13z" fill={primaryFill} /><path d="M4.94 3.36A1.25 1.25 0 003 4.4v11.2c0 1 1.11 1.6 1.94 1.04l8.4-5.6c.74-.5.74-1.59 0-2.08l-8.4-5.6zM4 4.4c0-.2.22-.32.39-.2l8.4 5.6c.15.1.15.3 0 .4l-8.4 5.6a.25.25 0 01-.39-.2V4.4z" fill={primaryFill} /></svg>;
}

const NextRegular = wrapIcon(rawSvg({}), 'NextRegular');
export default NextRegular;
      