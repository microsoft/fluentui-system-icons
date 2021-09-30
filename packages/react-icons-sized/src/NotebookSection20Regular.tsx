import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2.5a.5.5 0 00-1 0V3H8a2 2 0 00-2 2v10c0 1.1.9 2 2 2h5v.5a.5.5 0 001 0v-15zM13 16H8a1 1 0 01-1-1V5a1 1 0 011-1h5v12z" fill={primaryFill} /></svg>;
}

const NotebookSection20Regular = wrapIcon(rawSvg({}), 'NotebookSection20Regular');
export default NotebookSection20Regular;
      