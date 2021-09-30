import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7h-.25c.11.23.25.5.37.83.28.74.52 1.82.08 2.76-.4.86-1.1 1.08-1.63 1.22l-.1.02c-.5.13-.75.2-.93.46-.17.26-.12.58.04 1.12l.04.12c.07.21.14.46.18.69.05.28.06.63-.11.97-.18.34-.41.57-.69.72-.26.14-.53.2-.75.24l-.08.01c-.41.07-.65.12-.87.35-.18.2-.28.51-.34.94l-.05.54v.1c-.02.2-.04.41-.09.6v.02a6.98 6.98 0 008.86 1.25 3.56 3.56 0 01-.27-.31c-.27-.34-.61-.91-.5-1.57.06-.31.23-.58.4-.8a5.68 5.68 0 01.7-.7c.15-.14.28-.25.39-.37a.9.9 0 00.2-.26c.07-.23-.02-.4-.13-.5-.1-.06-.3-.13-.6.07l-.33.19c-.09.04-.2.1-.34.12a.6.6 0 01-.54-.18.73.73 0 01-.18-.37 2.58 2.58 0 01-.03-.28v-.07l-.02-.23c-.02-.22-.06-.5-.15-.83-.12-.49-.44-.89-.76-1.3l-.14-.18c-.16-.2-.37-.48-.44-.77a.9.9 0 01.03-.55c.07-.19.2-.33.35-.44a18.6 18.6 0 001.74-1.66c.3-.31.58-.6.77-.82h.01A6.97 6.97 0 0010 3z" fill={primaryFill} /></svg>;
}

const EarthFilled = wrapIcon(rawSvg({}), 'EarthFilled');
export default EarthFilled;
      