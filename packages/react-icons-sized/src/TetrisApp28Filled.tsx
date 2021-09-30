import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 3.25C9 2.56 9.56 2 10.25 2H15v6H9V3.25zM3.25 9C2.56 9 2 9.56 2 10.25v3.5c0 .69.56 1.25 1.25 1.25H8V9H3.25zM15 9H9v6h4.75c.69 0 1.25-.56 1.25-1.25V9zm5.75-7H16v6h4.75C21.44 8 22 7.44 22 6.75v-3.5C22 2.56 21.44 2 20.75 2zM5 20.26c0-.7.56-1.26 1.26-1.26H11v6H6.26C5.56 25 5 24.44 5 23.74v-3.48zM18 25v-6h-6v6h6zm7-6v4.75c0 .69-.56 1.25-1.25 1.25H19v-6h6zm-4.5-7c-.83 0-1.5.67-1.5 1.5V18h6v-4.5c0-.83-.67-1.5-1.5-1.5h-3z" fill={primaryFill} /></svg>;
}

const TetrisApp28Filled = wrapIcon(rawSvg({}), 'TetrisApp28Filled');
export default TetrisApp28Filled;
      