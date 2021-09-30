import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1H4zm5 0a1 1 0 00-1 1v12a1 1 0 001 1h.22l.21-.84a3.2 3.2 0 01.84-1.49L12 12.94V4a1 1 0 00-1-1H9zm8 1v5c-.69.03-1.37.31-1.9.84l-2.1 2.1V4a1 1 0 011-1h2a1 1 0 011 1zm-6.02 11.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" fill={primaryFill} /></svg>;
}

const ColumnTripleEditFilled = wrapIcon(rawSvg({}), 'ColumnTripleEditFilled');
export default ColumnTripleEditFilled;
      