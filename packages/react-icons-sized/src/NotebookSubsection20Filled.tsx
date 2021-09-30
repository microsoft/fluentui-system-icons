import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 5.5A3.5 3.5 0 017.5 2H10c.82 0 1.54.4 2 1H7.5A2.5 2.5 0 005 5.5V15a2.5 2.5 0 01-1-2V5.5z" fill={primaryFill} /><path d="M13.5 2h-.07c-.24.05-.43.3-.43.6V4H7.5C6.67 4 6 4.67 6 5.5v10c0 .83.67 1.5 1.5 1.5H13V17.48c.04.3.25.52.5.52.28 0 .5-.27.5-.6V2.52c-.04-.3-.25-.52-.5-.52z" fill={primaryFill} /></svg>;
}

const NotebookSubsection20Filled = wrapIcon(rawSvg({}), 'NotebookSubsection20Filled');
export default NotebookSubsection20Filled;
      