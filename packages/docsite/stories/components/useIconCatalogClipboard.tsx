import { Toast, ToastTitle, useId, useToastController } from '@fluentui/react-components';
import * as React from 'react';

export function useIconCatalogClipboard() {
  const toasterId = useId('icon-catalog-toaster');
  const { dispatchToast } = useToastController(toasterId);

  const copyIcon = async (snippet: string) => {
    try {
      await navigator.clipboard.writeText(snippet);
      dispatchToast(
        <Toast>
          <ToastTitle>Icon JSX was copied to the clipboard</ToastTitle>
        </Toast>,
        { intent: 'success' },
      );
    } catch {
      dispatchToast(
        <Toast>
          <ToastTitle>Icon JSX could not be copied to the clipboard</ToastTitle>
        </Toast>,
        { intent: 'error' },
      );
    }
  };

  return { copyIcon, toasterId };
}
