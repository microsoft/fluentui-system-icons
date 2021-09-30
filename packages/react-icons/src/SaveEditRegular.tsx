import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h3l.06-.35.16-.65H6v-4.5c0-.28.22-.5.5-.5h5.44l1-1H6.5c-.83 0-1.5.67-1.5 1.5V16a1 1 0 01-1-1V5a1 1 0 011-1h1v2.5C6 7.33 6.67 8 7.5 8h4c.83 0 1.5-.67 1.5-1.5V4h.38a1 1 0 01.7.3l1.63 1.61a1 1 0 01.29.71V8c.34-.01.68.03 1 .13v-1.5a2 2 0 00-.59-1.42L14.8 3.59A2 2 0 0013.38 3H5zm2 3.5V4h5v2.5a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M14.8 9.55l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" fill={primaryFill} /></svg>;
}

const SaveEditRegular = wrapIcon(rawSvg({}), 'SaveEditRegular');
export default SaveEditRegular;
      