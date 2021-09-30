import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.3 3c.4.03.7.35.7.75v5.5a.75.75 0 01-1.5 0V6.11l-.31.23a.75.75 0 01-.83-1.25 2.84 2.84 0 001.16-1.5.75.75 0 01.79-.59zm-7.1 12.07a.79.79 0 01-.2-.55V6.61c0-.22.07-.42.21-.58a.76.76 0 01.57-.24c.22 0 .41.08.56.24.15.16.22.36.22.58v2.35a2.6 2.6 0 011.8-.71c.88 0 1.6.32 2.13.98.54.65.8 1.5.8 2.54 0 1.03-.26 1.89-.8 2.54-.54.65-1.26.98-2.14.98a2.5 2.5 0 01-1.84-.72.74.74 0 01-.77.72c-.2 0-.4-.06-.54-.22zm1.8-1.76c.3.37.68.55 1.14.55.49 0 .86-.18 1.13-.53.28-.36.43-.88.43-1.56s-.15-1.2-.43-1.56a1.33 1.33 0 00-1.13-.54c-.46 0-.83.19-1.13.56-.3.38-.46.88-.46 1.54s.16 1.16.46 1.54zm-10.25 1.2c0 .22.08.4.24.54H2c.16.14.36.2.57.2a.8.8 0 00.5-.16c.14-.1.23-.25.3-.43l.74-2.02h3.27l.76 2.02a.8.8 0 00.8.59c.2 0 .4-.06.56-.2a.69.69 0 00.25-.53c0-.13-.03-.26-.09-.4L6.71 6.44a1.1 1.1 0 00-.36-.51.97.97 0 00-.59-.18c-.22 0-.43.06-.6.18-.18.12-.3.3-.38.51l-2.94 7.68c-.06.14-.09.27-.09.4zm5.13-3.3H4.62l1.13-3.1 1.13 3.1z" fill={primaryFill} /></svg>;
}

const TextFootnote20Filled = wrapIcon(rawSvg({}), 'TextFootnote20Filled');
export default TextFootnote20Filled;
      