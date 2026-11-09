import { Toast, ToastTitle, useId, useToastController } from '@fluentui/react-components';
import * as React from 'react';

export function useIconCatalogClipboard(contentLabel = 'Icon JSX') {
  const toasterId = useId('icon-catalog-toaster');
  const { dispatchToast } = useToastController(toasterId);

  const copyIcon = async (snippet: string) => {
    try {
      await navigator.clipboard.writeText(snippet);
      dispatchToast(
        <Toast>
          <ToastTitle>{contentLabel} was copied to the clipboard</ToastTitle>
        </Toast>,
        { intent: 'success' },
      );
    } catch {
      dispatchToast(
        <Toast>
          <ToastTitle>{contentLabel} could not be copied to the clipboard</ToastTitle>
        </Toast>,
        { intent: 'error' },
      );
    }
  };

  return { copyIcon, toasterId };
}
