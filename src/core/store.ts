import { reactive } from "vue";
import {
  CreateToast,
  ToastOptions,
  ToastProps,
  defaultToastOptions,
  Id,
  ToastSimpleOptions,
  ToastType,
} from "./type";
import { createUUID } from "./uuid";

export const globalState = reactive<{
  notifications: Array<ToastProps>;
}>({
  notifications: [],
});

export const toast: CreateToast = (function () {
  const fn = ((options: ToastOptions) => {
    const _options = Object.assign({ ...defaultToastOptions }, options);
    const id = createUUID();
    globalState.notifications.push(
      ...[
        {
          id,
          ..._options,
        },
      ],
    );
    return id;
  }) as CreateToast;

  fn.update = (id: Id, options: ToastOptions) => {
    const notificationIndex = globalState.notifications.findIndex(
      (notification) => notification.id === id,
    );
    if (notificationIndex === -1) {
      fn(options); // fallback to create new notification
      throw new Error("Can't find toast");
    }
    Object.assign(globalState.notifications[notificationIndex], options);
    return id;
  };

  fn._handleOptions = (type: ToastType, options: ToastOptions) => {
    const newOptions = Object.assign(options ?? ({} as ToastOptions), { type });
    return fn(newOptions);
  };

  fn.loading = (message: string, options?: ToastSimpleOptions) => {
    return fn._handleOptions(
      "loading",
      Object.assign(options ?? {}, { message }) as ToastOptions,
    );
  };

  fn.success = (message: string, options?: ToastSimpleOptions) => {
    return fn._handleOptions(
      "success",
      Object.assign(options ?? {}, { message }) as ToastOptions,
    );
  };

  fn.error = (message: string, options?: ToastSimpleOptions) => {
    return fn._handleOptions(
      "error",
      Object.assign(options ?? {}, { message }) as ToastOptions,
    );
  };

  fn.promise = <T>(
    promise: Promise<T>,
    options: {
      loading: string;
      success: string;
      error: string;
    },
  ) => {
    const id = fn.loading(options.loading);
    return promise
      .then((_) => {
        fn.update(id, {
          message: options.success,
          type: "success",
        });
        return id;
      })
      .catch((e) => {
        fn.update(id, {
          message: options.error,
          type: "error",
        });
        throw e;
      });
  };
  return fn;
})();

export const removeToast = (id: string) => {
  const index = globalState.notifications.findIndex((item) => item.id === id);
  if (index !== -1) globalState.notifications.splice(index, 1);
};
