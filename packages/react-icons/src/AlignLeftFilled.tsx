import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 2a.5.5 0 00-.5.5v15a.5.5 0 001 0v-15a.5.5 0 00-.5-.5zM7 11a2 2 0 00-2 2v1c0 1.1.9 2 2 2h5a2 2 0 002-2v-1a2 2 0 00-2-2H7zM5 6c0-1.1.9-2 2-2h8a2 2 0 012 2v1a2 2 0 01-2 2H7a2 2 0 01-2-2V6z" fill={primaryFill} /></svg>;
}

const AlignLeftFilled = wrapIcon(rawSvg({}), 'AlignLeftFilled');
export default AlignLeftFilled;
      