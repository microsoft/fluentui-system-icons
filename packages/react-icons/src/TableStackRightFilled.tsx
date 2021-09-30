import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 3.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zM3 15v-2h4v4H5a2 2 0 01-2-2zm5 2v-4h4v3.5a.5.5 0 01-.5.5H8zm0-5h4V8H8v4zM3 8v4h4V8H3zm9-1H8V3h3.5c.28 0 .5.22.5.5V7zM3 7V5c0-1.1.9-2 2-2h2v4H3z" fill={primaryFill} /></svg>;
}

const TableStackRightFilled = wrapIcon(rawSvg({}), 'TableStackRightFilled');
export default TableStackRightFilled;
      