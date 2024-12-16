const showSwal = (title, icon, [confirmButtonText, cancelButtonText], callback) => {
    Swal
        .fire({
            title,
            icon,
            confirmButtonText,
            cancelButtonText,
            showCancelButton: true,
        })
        .then((result) => {
            callback ? callback(result) : null;
        });
};
const showToast = (title, icon, callback) => {
    Swal
        .fire({
            position: "center",
            icon,
            title,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        })
        .then((result) => {
            setTimeout(() => {
                callback ? callback(result) : null;
            }, 500);
        });
};
export { showSwal, showToast }