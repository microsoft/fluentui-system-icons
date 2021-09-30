import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.5c0-.28.22-.5.5-.5H4a2 2 0 012 2v10a2 2 0 01-2 2h-.5a.5.5 0 010-1H4a1 1 0 001-1V5a1 1 0 00-1-1h-.5a.5.5 0 01-.5-.5zM9 4a1 1 0 00-1 1v10a1 1 0 001 1h.47l-.04.16-.21.84H9a2 2 0 01-2-2V5c0-1.1.9-2 2-2h2a2 2 0 012 2v6.94l-1 1V5a1 1 0 00-1-1H9zm6 1v4.94l-1 1V5c0-1.1.9-2 2-2h.5a.5.5 0 010 1H16a1 1 0 00-1 1zm-4.02 10.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" fill={primaryFill} /></svg>;
}

const ColumnEdit20Regular = wrapIcon(rawSvg({}), 'ColumnEdit20Regular');
export default ColumnEdit20Regular;
      