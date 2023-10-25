export type ToastType = "success" | "loading" | "error"
export interface ToastProps {
  /**
   * toast id
   */
  id: string;
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
}

export type ToastOptions = Partial<Omit<ToastProps, "id">>;

export type CreateToast = {
  (options: ToastOptions): void;
};

export const defaultToastOptions = {
  type: "info",
  message:
    "Here's your toast.",
  autoClose: true,
  duration: 3000,
};
