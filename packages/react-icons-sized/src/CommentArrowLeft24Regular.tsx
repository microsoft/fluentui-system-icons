import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.02 3c-.3.46-.53.97-.7 1.5H5.24c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75h6.24c.97 0 1.75-.78 1.75-1.75v-2.48a6.52 6.52 0 001.5-1.08v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 01-2-1V18h-.75A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77zm5.48-2a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-1.28 2.59l-.07.06-2.53 2.53-.03.04-.04.07-.03.08-.02.08v.14l.02.06.03.06.03.06.04.05 2.53 2.53a.5.5 0 00.76-.63l-.06-.07L15.21 7h5.29a.5.5 0 00.5-.41V6.5a.5.5 0 00-.41-.5H15.2l1.65-1.65a.5.5 0 00.06-.63l-.06-.07a.5.5 0 00-.63-.06z" fill={primaryFill} /></svg>;
}

const CommentArrowLeft24Regular = wrapIcon(rawSvg({}), 'CommentArrowLeft24Regular');
export default CommentArrowLeft24Regular;
      