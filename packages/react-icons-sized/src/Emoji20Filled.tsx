import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 110 16 8 8 0 010-16zM7.15 12.43a.5.5 0 10-.7.7 5.01 5.01 0 006.9.2l.2-.2.06-.07a.5.5 0 00-.7-.7l-.06.07-.18.17a4.01 4.01 0 01-5.52-.17zM12.5 7.5a1 1 0 100 2 1 1 0 000-2zm-5 0a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const Emoji20Filled = wrapIcon(rawSvg({}), 'Emoji20Filled');
export default Emoji20Filled;
      