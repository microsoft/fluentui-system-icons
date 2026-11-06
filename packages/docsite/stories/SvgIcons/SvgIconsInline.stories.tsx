import * as React from 'react';
import mailMarkup from '@fluentui/svg-icons/icons/mail_24_regular.svg?raw';

export const Inline = (): React.ReactElement => (
  <span
    role="img"
    aria-label="Mail"
    style={{ display: 'inline-flex', width: '24px', height: '24px', fill: 'currentColor' }}
    dangerouslySetInnerHTML={{ __html: mailMarkup }}
  />
);
Inline.storyName = 'Trusted inline SVG';
Inline.parameters = {
  docs: {
    description: {
      story:
        'Only trusted SVG markup imported from the installed package is inserted here. Explicit `fill: currentColor` makes monochrome artwork follow text color. In plain HTML or server templates, include the SVG markup directly; no React wrapper is required. Never insert untrusted SVG or HTML this way.',
    },
  },
};
