import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 14.5l.22-1.5h1.24l-.22 1.5h-1.24z" fill={primaryFill} /><path d="M14.5 18c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9zm-.57-6.44l-.07.44h.64a.5.5 0 110 1h-.78l-.22 1.5h.5a.5.5 0 110 1h-.65l-.16 1.07a.5.5 0 01-.99-.14l.14-.93H11.1l-.16 1.07a.5.5 0 01-.99-.14l.14-.93H9.5a.5.5 0 010-1h.74l.22-1.5H10a.5.5 0 010-1h.6l.09-.59a.5.5 0 11.99.15l-.07.44h1.24l.09-.59a.5.5 0 11.99.15z" fill={primaryFill} /></svg>;
}

const DocumentPageBottomRightFilled = wrapIcon(rawSvg({}), 'DocumentPageBottomRightFilled');
export default DocumentPageBottomRightFilled;
      