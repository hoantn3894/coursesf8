import { toast } from 'react-toastify';

export const toastError = error => {
    let message = null;
    if (typeof error === "object" && error.message) {
        message = error.message;
    }

    if (message) {
        toast.error(message);
    }
}