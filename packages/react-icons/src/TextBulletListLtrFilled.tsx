import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.25 7a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM7 5.75c0-.41.34-.75.75-.75h9.5a.75.75 0 010 1.5h-9.5A.75.75 0 017 5.75zM7.75 10a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zm0 5a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zM4.5 10.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM3.25 17a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
}

const TextBulletListLtrFilled = wrapIcon(rawSvg({}), 'TextBulletListLtrFilled');
export default TextBulletListLtrFilled;
      