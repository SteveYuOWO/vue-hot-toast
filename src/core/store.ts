import { reactive } from 'vue';
import { CreateToast, ToastOptions, ToastProps, defaultToastOptions } from './type';
import { createUUID } from './uuid';

export const globalState = reactive<{
  notifications: Array<ToastProps>
}>({
  notifications: []
});


export const toast: CreateToast = (options: ToastOptions) => {
  const _options = Object.assign({ ...defaultToastOptions }, options);

  globalState.notifications.push(
    ...[
      {
        id: createUUID(),
        ..._options,
      },
    ]
  );
};

export const removeToast = (id: string) => {
  const index = globalState.notifications.findIndex((item) => item.id === id);
  if (index !== -1) globalState.notifications.splice(index, 1);
};
