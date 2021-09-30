import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2v-5.5c0-.83.67-1.5 1.5-1.5h6.44l1.16-1.16a2.87 2.87 0 012.9-.7V6.61a2 2 0 00-.59-1.41L14.8 3.59A2 2 0 0013.38 3H13v3.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 016 6.5V3H5z" fill={primaryFill} /><path d="M11.94 11l-2.67 2.67c-.4.41-.7.92-.84 1.49l-.37 1.5c-.03.11-.05.23-.06.34H6v-5.5c0-.28.22-.5.5-.5h5.44z" fill={primaryFill} /><path d="M7 3h5v3.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V3z" fill={primaryFill} /><path d="M14.8 9.55l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" fill={primaryFill} /></svg>;
}

const SaveEdit20Filled = wrapIcon(rawSvg({}), 'SaveEdit20Filled');
export default SaveEdit20Filled;
      