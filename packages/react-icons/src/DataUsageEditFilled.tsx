import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 2a2 2 0 00-2 2v10c0 1.1.9 2 2 2h5.48c.15-.5.42-.96.8-1.33l1.84-1.85a.5.5 0 01-.12-.32v-7a.5.5 0 011 0v6.44l2.1-2.1c.27-.27.57-.47.9-.6V4a2 2 0 00-2-2H4zm5 7c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5zM5 7.5a.5.5 0 011 0v5a.5.5 0 01-1 0v-5zm5.98 7.88l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.82 4.83a2.2 2.2 0 01-1.03.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" fill={primaryFill} /></svg>;
}

const DataUsageEditFilled = wrapIcon(rawSvg({}), 'DataUsageEditFilled');
export default DataUsageEditFilled;
      