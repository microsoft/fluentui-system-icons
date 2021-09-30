import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.7 18.48L4.63 6.38a1.25 1.25 0 111.76-1.76l37 37a1.25 1.25 0 01-1.76 1.76L29.52 31.3l-2.16 6.25a2.75 2.75 0 01-4.54 1.05L17 32.77 7.77 42H6v-1.77L15.23 31l-5.82-5.82a2.75 2.75 0 011.05-4.54l6.25-2.16zm10.86 10.85l-8.89-8.89-7.4 2.56a.25.25 0 00-.1.41L24.6 36.82c.13.13.35.08.41-.1l2.56-7.4zm12.54-7.78l-8.83 4.42 1.86 1.86 8.09-4.04a4.75 4.75 0 001.23-7.6L31.82 5.54a4.75 4.75 0 00-7.61 1.23l-4.04 8.09 1.86 1.86 4.42-8.83a2.25 2.25 0 013.6-.58l10.63 10.63a2.25 2.25 0 01-.58 3.6z" fill={primaryFill} /></svg>;
}

const PinOff48Regular = wrapIcon(rawSvg({}), 'PinOff48Regular');
export default PinOff48Regular;
      