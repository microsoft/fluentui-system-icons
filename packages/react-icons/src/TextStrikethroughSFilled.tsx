import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 3.7c1-.7 2.33-1.2 3.75-1.2a6.4 6.4 0 015.1 2.3.75.75 0 01-1.2.9A4.92 4.92 0 0010 4c-1.08 0-2.12.38-2.88.92C6.33 5.5 6 6.1 6 6.5c0 .78.38 1.29 1.11 1.71.18.1.38.2.59.29H5.16a3.16 3.16 0 01-.66-2c0-1.1.8-2.11 1.75-2.8zM16.5 10a.75.75 0 010 1.5h-1.66c.4.52.66 1.18.66 2 0 1.36-.87 2.38-1.91 3.01a7.06 7.06 0 01-3.59.99 7.52 7.52 0 01-3-.5 4.8 4.8 0 01-2.12-1.83.75.75 0 111.24-.84c.43.65.9 1.05 1.48 1.3.6.25 1.35.37 2.4.37.97 0 2.02-.28 2.8-.76.8-.5 1.2-1.1 1.2-1.74 0-.78-.38-1.29-1.11-1.71a5.4 5.4 0 00-.59-.29H3.5a.75.75 0 010-1.5h13z" fill={primaryFill} /></svg>;
}

const TextStrikethroughSFilled = wrapIcon(rawSvg({}), 'TextStrikethroughSFilled');
export default TextStrikethroughSFilled;
      