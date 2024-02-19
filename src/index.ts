import Toaster from "./components/Toaster.vue";
import { toast } from "./core/store";
import { Id } from "./core/type";
import { toastSuccess, toastError, toastLoading } from "./helper";
export { Toaster, toast, toastSuccess, toastError, toastLoading };
export type { Id };
