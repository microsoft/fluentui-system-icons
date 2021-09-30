import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.34 4.07c1.2-.32 2.43.39 2.76 1.6l2.75 10.28c.33 1.2-.39 2.43-1.59 2.76l-4.6 1.23c-1.2.32-2.43-.4-2.75-1.6L6.16 8.06A2.25 2.25 0 017.75 5.3l4.59-1.23zm2.35 11.2a.75.75 0 00-.92-.52l-1.93.52-.1.03a.75.75 0 00.49 1.42l1.93-.52.1-.04a.75.75 0 00.43-.88z" fill={primaryFill} /><path d="M18.68 2.4c.2-.37.65-.5 1.02-.3a4.9 4.9 0 011.72 6.49.75.75 0 01-1.34-.7l.05-.09a3.4 3.4 0 00-1.16-4.39.75.75 0 01-.3-1.02z" fill={primaryFill} /><path d="M17.5 4.44a.75.75 0 011.05-.14 2.6 2.6 0 01.9 1.32c.11.44.09.88-.02 1.29l-.05.18-.05.13a.75.75 0 01-1.41-.49l.05-.14v-.06c.06-.18.07-.37.03-.52a.93.93 0 00-.17-.31 1.37 1.37 0 00-.15-.18l-.04-.03a.75.75 0 01-.14-1.05z" fill={primaryFill} /><path d="M2.54 15.41a.75.75 0 011.34.66l-.1.2-.1.28a3.54 3.54 0 00.6 3.36c.26.32.51.54.68.65l.07.04a.75.75 0 11-.75 1.3 5.04 5.04 0 01-1.74-6.49z" fill={primaryFill} /><path d="M4.67 16.76a.75.75 0 011.42.47l-.05.15-.01.05c-.05.18-.06.37-.02.53a1.38 1.38 0 00.32.5l.04.02a.75.75 0 01-.92 1.19 2.6 2.6 0 01-.88-1.33c-.12-.43-.1-.87 0-1.28l.06-.17.04-.13z" fill={primaryFill} /></svg>;
}

const PhoneShake24Filled = wrapIcon(rawSvg({}), 'PhoneShake24Filled');
export default PhoneShake24Filled;
      