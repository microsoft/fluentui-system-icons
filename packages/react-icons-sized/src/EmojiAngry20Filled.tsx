import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.5-1.5a.5.5 0 00.26-.93l-2.5-1.5a.5.5 0 00-.52.86l1.22.73a1 1 0 101.54.84zm5 0a1 1 0 00-.46-.84l1.22-.73a.5.5 0 00-.52-.86l-2.5 1.5a.5.5 0 00.26.93 1 1 0 102 0zm.06 4.89c.34-.3.07-.72.06-.73a2.05 2.05 0 00-.23-.23 4.06 4.06 0 00-.67-.49 5.3 5.3 0 00-2.72-.69 5.3 5.3 0 00-2.72.7 4.08 4.08 0 00-.9.7c-.18.23-.17.55.06.74a.5.5 0 00.7-.07l.02-.03c.03-.03.06-.07.12-.11.1-.1.27-.24.5-.37a4.31 4.31 0 012.22-.56 4.3 4.3 0 012.22.56 3.07 3.07 0 01.64.5c.18.22.5.27.7.08z" fill={primaryFill} /></svg>;
}

const EmojiAngry20Filled = wrapIcon(rawSvg({}), 'EmojiAngry20Filled');
export default EmojiAngry20Filled;
      