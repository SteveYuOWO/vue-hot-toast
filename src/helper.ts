import { Id } from "core/type";
import { toast } from "./index.ts";

export function toastLoading(message: string) {
  return toast.loading(message, {
    autoClose: false,
  });
}

export function toastSuccess(message: string, id: Id) {
  toast.update(id, {
    message,
    type: "success",
    autoClose: true,
    duration: 3000,
  });
}

export function toastError(e: string | Error, id: Id) {
  toast.update(id, {
    message: toReadableErrorMessage(e),
    type: "error",
    autoClose: true,
    duration: 3000,
  });
}

export default function toReadableErrorMessage(e: Error | string) {
  if (!e) {
    return "Undefined Error";
  }
  if (typeof e === "string") {
    return e;
  } else if (e instanceof Error) {
    const err = e as any;
    return err.reason ?? err.message;
  } else {
    return JSON.stringify(e);
  }
}
