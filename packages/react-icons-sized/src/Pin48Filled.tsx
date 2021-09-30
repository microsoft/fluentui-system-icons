import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31.82 5.55l10.63 10.63a4.75 4.75 0 01-1.23 7.61l-10.55 5.27c-.3.15-.51.4-.62.71l-2.69 7.77a2.75 2.75 0 01-4.54 1.05L17 32.77 7.77 42H6v-1.77L15.23 31l-5.82-5.82a2.75 2.75 0 011.05-4.54l7.77-2.69c.3-.1.56-.33.7-.62l5.28-10.55a4.75 4.75 0 017.6-1.23z" fill={primaryFill} /></svg>;
}

const Pin48Filled = wrapIcon(rawSvg({}), 'Pin48Filled');
export default Pin48Filled;
      