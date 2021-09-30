import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 25a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H2.75zM5 19.25A2.75 2.75 0 007.75 22h2.5A2.75 2.75 0 0013 19.25V5.75A2.75 2.75 0 0010.25 3h-2.5A2.75 2.75 0 005 5.75v13.5zm10 0A2.75 2.75 0 0017.75 22h2.5A2.75 2.75 0 0023 19.25v-8a2.75 2.75 0 00-2.75-2.75h-2.5A2.75 2.75 0 0015 11.25v8z" fill={primaryFill} /></svg>;
}

const AlignBottom28Filled = wrapIcon(rawSvg({}), 'AlignBottom28Filled');
export default AlignBottom28Filled;
      