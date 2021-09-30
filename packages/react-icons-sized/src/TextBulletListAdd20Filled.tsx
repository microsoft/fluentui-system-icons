import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.25 5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM7 3.75c0-.41.34-.75.75-.75h9.5a.75.75 0 010 1.5h-9.5A.75.75 0 017 3.75zM7.75 8a.75.75 0 000 1.5h4.46a5.48 5.48 0 014.58 0h.46a.75.75 0 000-1.5h-9.5zm0 5h1.46c-.14.48-.21.98-.21 1.5H7.75a.75.75 0 010-1.5zM4.5 8.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM3.25 15a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const TextBulletListAdd20Filled = wrapIcon(rawSvg({}), 'TextBulletListAdd20Filled');
export default TextBulletListAdd20Filled;
      