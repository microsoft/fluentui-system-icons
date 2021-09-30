import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.5 16a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM14 2.25c2 0 3.64 1.57 3.74 3.55l.01.2h5.5a.75.75 0 01.1 1.5H22.2l-.63 7.83a6.47 6.47 0 00-1.48-.3l.6-7.53H7.32l1.21 14.93a2.25 2.25 0 002.25 2.07h2.96c.29.55.65 1.06 1.08 1.5h-4.04a3.75 3.75 0 01-3.74-3.45L5.8 7.5H4.75a.75.75 0 01-.74-.65L4 6.75c0-.38.28-.7.65-.74l.1-.01h5.5A3.75 3.75 0 0114 2.25zm3.02 16.77a.5.5 0 000 .71l1.77 1.77-1.76 1.77a.5.5 0 10.7.7l1.77-1.76 1.77 1.77a.5.5 0 10.7-.71l-1.76-1.77 1.77-1.77a.5.5 0 00-.7-.7l-1.78 1.76-1.77-1.77a.5.5 0 00-.7 0zM14 3.75c-1.2 0-2.17.93-2.24 2.1l-.01.15h4.5v-.15A2.25 2.25 0 0014 3.75z" fill={primaryFill} /></svg>;
}

const DeleteDismiss28Regular = wrapIcon(rawSvg({}), 'DeleteDismiss28Regular');
export default DeleteDismiss28Regular;
      