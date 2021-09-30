import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.5c0-.28.22-.5.5-.5H4a2 2 0 012 2v10a2 2 0 01-2 2h-.5a.5.5 0 010-1H4a1 1 0 001-1V5a1 1 0 00-1-1h-.5a.5.5 0 01-.5-.5zM9 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h.22l.21-.84a3.2 3.2 0 01.84-1.49L13 11.94V5a2 2 0 00-2-2H9zm6 2v4.94l-1 1V5c0-1.1.9-2 2-2h.5a.5.5 0 010 1H16a1 1 0 00-1 1zm-4.02 10.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" fill={primaryFill} /></svg>;
}

const ColumnEditFilled = wrapIcon(rawSvg({}), 'ColumnEditFilled');
export default ColumnEditFilled;
      