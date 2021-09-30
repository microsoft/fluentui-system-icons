import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l2.21-2.27a5.54 5.54 0 01-.05-1.38l-2.88 2.94a.09.09 0 01-.03.03l-.05-.01a.07.07 0 01-.03-.03v-.01-.03l1.33-5.3a.5.5 0 00-.49-.62h-1.9a.06.06 0 01-.07-.08l2.25-7.87c.01-.03.03-.05.06-.05h5.25c.04 0 .07.04.06.08l-1.5 4.25a.5.5 0 00.48.67h3.3l.03.04v.05l-.01.03-.9.91a5.56 5.56 0 011.38.03l.23-.24c.65-.68.19-1.82-.76-1.82H12.2l1.26-3.6c.23-.69-.28-1.4-1-1.4H7.2zm7.29 17a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-5.65l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 2.65-2.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const FlashCheckmarkRegular = wrapIcon(rawSvg({}), 'FlashCheckmarkRegular');
export default FlashCheckmarkRegular;
      