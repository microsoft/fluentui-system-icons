import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.26 1.26c-.3.5-.48 1.08-.48 1.71v11.5C3 19.55 4.46 21 6.25 21h11.5c.63 0 1.21-.18 1.7-.48l1.27 1.26a.75.75 0 001.06-1.06L3.28 2.22zm8.79 10.9l6.2 6.21.06.07c-.18.07-.38.1-.58.1H6.25c-.2 0-.4-.03-.58-.1l5.8-5.69.6-.58zm-.95-.94c-.25.1-.49.26-.7.46l-5.82 5.7c-.06-.18-.1-.38-.1-.59V6.25c0-.2.04-.4.1-.59l6.52 6.52z" fill={primaryFill} /><path d="M19.5 16.32V6.25c0-.97-.78-1.75-1.75-1.75H7.68L6.18 3h11.57C19.55 3 21 4.46 21 6.25v11.57l-1.5-1.5z" fill={primaryFill} /><path d="M15.25 6.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm0 1.5a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const ImageOff24Regular = wrapIcon(rawSvg({}), 'ImageOff24Regular');
export default ImageOff24Regular;
      