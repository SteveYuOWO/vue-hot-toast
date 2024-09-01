export type ToastType = "success" | "loading" | "error";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "middle-center";

export interface ToastProps {
  /**
   * toast id
   */
  id: Id;
  /**
   * toast type
   */
  type: ToastType;
  /**
   * toast message
   */
  message: string;
  /**
   * auto close the toast
   */
  autoClose: boolean;
  /**
   * duration unit: millisecond
   */
  duration: number;
  /**
   * Icon to be displayed alongside the toast message.
   */
  icon?: string;
  /**
   * Position of the toast on the screen.
   */
  position?: ToastPosition;
}

export type Id = string;
export type ToastOptions = Partial<Omit<ToastProps, "id">>;
export type ToastSimpleOptions = Partial<Omit<ToastProps, "id" | "message">>;

export interface CreateToast {
  (options: ToastOptions): Id;
  update: (id: Id, options: ToastOptions) => string;
  _handleOptions: (type: ToastType, options: ToastOptions) => string;
  success: (message: string, options?: ToastSimpleOptions) => string;
  loading: (message: string, options?: ToastSimpleOptions) => string;
  error: (message: string, options?: ToastSimpleOptions) => string;
  promise: <T>(
    promise: Promise<T>,
    options: {
      loading: string;
      success: string;
      error: string;
      position?: ToastPosition;
    },
  ) => Promise<string>;
}

export const defaultToastOptions = {
  type: "info",
  message: "Here's your toast.",
  autoClose: true,
  duration: 3000,
  position: "top-center",
};
