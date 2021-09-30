import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 8a.5.5 0 11-1 0 .5.5 0 011 0zm0 2a.5.5 0 11-1 0 .5.5 0 011 0zm-2.5.5a.5.5 0 100-1 .5.5 0 000 1zm4.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 12.5a.5.5 0 100-1 .5.5 0 000 1zm-6.94 2.77a2.5 2.5 0 010-3.54l8.67-8.67a2.5 2.5 0 013.54 0l1.67 1.67a2.5 2.5 0 010 3.54l-8.67 8.67a2.5 2.5 0 01-3.54 0l-1.67-1.67zm.7-2.83a1.5 1.5 0 000 2.12l1.68 1.67a1.5 1.5 0 002.12 0L9.3 14.5 5.5 10.7l-1.73 1.74zM13.8 10L10 6.2 6.2 10l3.8 3.8 3.8-3.8zm.71-.7l1.73-1.74a1.5 1.5 0 000-2.12l-1.67-1.67a1.5 1.5 0 00-2.12 0L10.7 5.5l3.79 3.8zm-3.8 6.61l1.03 1.03a2.5 2.5 0 003.54 0l1.67-1.67a2.5 2.5 0 000-3.54l-1.03-1.02-.7.7 1.02 1.03a1.5 1.5 0 010 2.12l-1.67 1.67a1.5 1.5 0 01-2.12 0l-1.03-1.02-.7.7zM8.6 4.8L7.56 3.77a1.5 1.5 0 00-2.12 0L3.77 5.44a1.5 1.5 0 000 2.12L4.79 8.6l-.7.7-1.03-1.02a2.5 2.5 0 010-3.54l1.67-1.67a2.5 2.5 0 013.54 0L9.29 4.1l-.7.7z" fill={primaryFill} /></svg>;
}

const PatchRegular = wrapIcon(rawSvg({}), 'PatchRegular');
export default PatchRegular;
      