import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 4h11a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm11 1.5H4a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h11a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5zM4.56 16a2 2 0 001.94 1.5h9a4 4 0 004-4v-5A2 2 0 0018 6.56v6.94a2.5 2.5 0 01-2.5 2.5H4.56zm2.5 2.5A2 2 0 009 20h7.25A5.75 5.75 0 0022 14.25V11a2 2 0 00-1.5-1.94v5.19c0 2.35-1.9 4.25-4.25 4.25H7.06z" fill={primaryFill} /></svg>;
}

const Stack24Regular = wrapIcon(rawSvg({}), 'Stack24Regular');
export default Stack24Regular;
      