import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5.5-.5a1 1 0 100-2 1 1 0 000 2zm6-1a1 1 0 10-2 0 1 1 0 002 0zm.06 4.89c.38-.35.07-.72.06-.73a2.02 2.02 0 00-.23-.23 4.06 4.06 0 00-.67-.49 5.3 5.3 0 00-2.72-.69 5.3 5.3 0 00-2.72.7 4.08 4.08 0 00-.9.7l-.01.03h-.01l.39.32-.39-.31a.5.5 0 00.78.63l.02-.03c.03-.03.06-.07.12-.11.1-.1.27-.24.5-.37a4.31 4.31 0 012.22-.56 4.3 4.3 0 012.22.56 3.07 3.07 0 01.64.5.5.5 0 00.7.08z" fill={primaryFill} /></svg>;
}

const EmojiSadFilled = wrapIcon(rawSvg({}), 'EmojiSadFilled');
export default EmojiSadFilled;
      