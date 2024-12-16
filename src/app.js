import { showSwal, showToast } from "./utils.js";
let usersInfo = [
    {
        firstname: "Ali",
        lastname: "Rezaei",
        userId: 1234567890,
        nationalCode: 1234567890,
        location: "Tehran",
        lat: 35.6892,
        lon: 51.3890,
        purchases: {
            milk: 5,  // 5 عدد شیر
            bread: 3, // 3 عدد نان
            cheese: 2 // 2 عدد پنیر
        }
    },
    {
        firstname: "Sara",
        lastname: "Mohammadi",
        userId: 1234567891,
        nationalCode: 1234567891,
        location: "Isfahan",
        lat: 32.6546,
        lon: 51.6680,
        purchases: {
            milk: 2,  // 2 عدد شیر
            butter: 5  // 5 عدد کره
        }
    },
    {
        firstname: "Amir",
        lastname: "Farhadi",
        userId: 1234567892,
        nationalCode: 1234567892,
        location: "Shiraz",
        lat: 29.6299,
        lon: 52.5311,
        purchases: {
            bread: 7,  // 7 عدد نان
            cheese: 3  // 3 عدد پنیر
        }
    },
    {
        firstname: "Niloofar",
        lastname: "Peyman",
        userId: 1234567893,
        nationalCode: 1234567893,
        location: "Mashhad",
        lat: 36.2605,
        lon: 59.6168,
        purchases: {
            milk: 4,  // 4 عدد شیر
            bread: 2,  // 2 عدد نان
            yogurt: 6  // 6 عدد ماست
        }
    },
    {
        firstname: "Reza",
        lastname: "Karimi",
        userId: 1234567894,
        nationalCode: 1234567894,
        location: "Tabriz",
        lat: 38.0962,
        lon: 46.2990,
        purchases: {
            milk: 6,  // 6 عدد شیر
            cheese: 5  // 5 عدد پنیر
        }
    },
    {
        firstname: "Leila",
        lastname: "Zeynali",
        userId: 1234567895,
        nationalCode: 1234567895,
        location: "Ahvaz",
        lat: 31.3155,
        lon: 48.6692,
        purchases: {
            butter: 3,  // 3 عدد کره
            milk: 7  // 7 عدد شیر
        }
    },
    {
        firstname: "Mohammad",
        lastname: "Ebrahimi",
        userId: 1234567896,
        nationalCode: 1234567896,
        location: "Kerman",
        lat: 30.2832,
        lon: 57.0786,
        purchases: {
            cheese: 8,  // 8 عدد پنیر
            yogurt: 4  // 4 عدد ماست
        }
    },
    {
        firstname: "Fatemeh",
        lastname: "Khosravi",
        userId: 1234567897,
        nationalCode: 1234567897,
        location: "Yazd",
        lat: 31.8974,
        lon: 54.3642,
        purchases: {
            milk: 5,  // 5 عدد شیر
            bread: 3  // 3 عدد نان
        }
    },
    {
        firstname: "Saeed",
        lastname: "Nasiri",
        userId: 1234567898,
        nationalCode: 1234567898,
        location: "Karaj",
        lat: 35.8321,
        lon: 50.9917,
        purchases: {
            butter: 6,  // 6 عدد کره
            milk: 4  // 4 عدد شیر
        }
    },
    {
        firstname: "Mina",
        lastname: "Ghaffari",
        userId: 1234567899,
        nationalCode: 1234567899,
        location: "Rasht",
        lat: 37.2824,
        lon: 49.5911,
        purchases: {
            bread: 5,  // 5 عدد نان
            cheese: 4  // 4 عدد پنیر
        }
    }
];

const $ = document
const usersTable = $.querySelector(".users__table tbody")

window.addEventListener("load", async () => {
    getUsersTable()
})
function getUsersTable() {
    usersTable.innerHTML = `
    ${usersInfo.map((user, index) => {
        return `
           <tr class="" id="${user.userId}" onclick="userInfoHandler(event)">

                            <th scope="row" class="">${index + 1}</th>
                            <td class="px-5 py-5">${user.firstname}</td>
                            <td class="px-5 py-5">${user.lastname}</td>
                            <td class="px-5 py-5">${user.userId}</td>
                            <td class="px-4 py-5">
                                <a href="javascript:void(0)" class="view"><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="view size-6 text-blue-200">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </a>
                            </td>
                            <td class="px-5 py-5"><a href="javascript:void(0)" class="location "><svg
                                        class="location text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                </a></td>
                            <td class="px-4 py-5">
                                <a href="javascript:void(0)" class="edit">ویرایش</a>
                            </td>
                            <td class="px-4 py-5">
                                <a href="javascript:void(0)" class="remove">حذف</a>
                            </td>
                            <td class="px-5 py-5"><a href="javascript:void(0)" class="doc text-gray-300"><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="doc">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>


                                </a></td>
                        </tr>
  `

    }).join('')}

    `
}

window.userInfoHandler = userInfoHandler
function userInfoHandler(e) {
    e.preventDefault()

    let targetUserId = e.currentTarget.id

    const userTargetInfo = usersInfo.find(user => user.userId == targetUserId)
    console.log(userTargetInfo);

    if (e.target.classList.contains('remove')) {
        showSwal('آیا از حذف کاربر مورد نظر اطمینان دارید؟', "error", ["بله", "خیر"], async (res) => {
            if (res.isConfirmed) {
                removeTarget(targetUserId, "users", "کاربر")

                usersInfo = [...usersInfo].filter(course => course._id !== targetUserId)
                getUsersTable()
            }
        })

    } else if (e.target.classList.contains("edit")) {

        swal.fire({
            title: "ویرایش کاربر",
            html:
                `<div class="contain-input-swal"><lable>نام </lable> <input id="swalFirstName" class="swal2-input" value="${userTargetInfo.firstname}"></div>` +
                `<div class="contain-input-swal"><lable>نام خانوادگی</lable> <input id="swalLastName" class="swal2-input" value="${userTargetInfo.lastname}"></div>` +
                `<div class="contain-input-swal"><lable>کد ملی </lable> <input id="swalId" class="swal2-input"  value="${userTargetInfo.userId}"></div>`,
            confirmButtonText: 'تصحیح اطلاعات',
            showCancelButton: true,
            cancelButtonText: 'لغو',

            preConfirm: async () => {
                const swalFirstNameValue = $.getElementById('swalFirstName').value
                const swalLastNameValue = $.getElementById('swalLastName').value
                const swalIdValue = $.getElementById('swalId').value

                const UpdateInfo = {
                    firstname: swalFirstNameValue,
                    lastname: swalLastNameValue,
                    userId: swalIdValue,
                }

                UpdateTarget(
                    targetUserId,
                    UpdateInfo
                )

            }

        });
    } else if (e.target.classList.contains("view")) {

        swal.fire({
            title: "مشاهده کاربر",
            html:
                `<div class="contain-input-swal"><lable>نام </lable> <input id="swalFirstName" class="swal2-input" value="${userTargetInfo.firstname}" readonly></div>` +
                `<div class="contain-input-swal"><lable>نام خانوادگی</lable> <input id="swalLastName" class="swal2-input" value="${userTargetInfo.lastname}" readonly></div>` +
                `<div class="contain-input-swal"><lable>کد ملی </lable> <input id="swalId" class="swal2-input"  value="${userTargetInfo.userId}" readonly></div>`,
            showCancelButton: false,
            showConfirmButton: false,

        });
    } else if (e.target.classList.contains("location")) {


        Swal.fire({
            title: `${userTargetInfo.firstname} ${userTargetInfo.lastname} - موقعیت جغرافیایی`,

            html: `<div id="location-map" style="width: 100%; height: 400px;"></div>`,
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: 'بستن',
            didOpen: () => {
                const map = L.map('location-map').setView([userTargetInfo.lat, userTargetInfo.lon], 13);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                const marker = L.marker([userTargetInfo.lat, userTargetInfo.lon]).addTo(map);

                marker.bindPopup(`
                    <b>${userTargetInfo.firstname} ${userTargetInfo.lastname}</b><br>
                    موقعیت: ${userTargetInfo.location}<br>
                    شناسه کاربری: ${userTargetInfo.userId}<br>
                    کد ملی: ${userTargetInfo.nationalCode}
                `).openPopup();
            }
        });
    } else if (e.target.classList.contains("doc")) {
        Swal.fire({
            title: `${userTargetInfo.firstname} ${userTargetInfo.lastname} - سوابق خرید`,
            html: `<canvas id="purchase-chart" style="width: 100%; height: 400px;"></canvas>`,
            showCancelButton: true,
            cancelButtonText: 'بستن',
            didOpen: () => {
                const ctx = document.getElementById('purchase-chart').getContext('2d');
                const labels = Object.keys(userTargetInfo.purchases);
                const data = Object.values(userTargetInfo.purchases);

                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'تعداد خریدها',
                            data: data,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        });
    }
}

function UpdateTarget(id, bodyObj) {
    let sameUser = [...usersInfo].some(user => {
        if (user.userId == bodyObj.userId) {

            return true
        }
    })

    let validation = bodyObj.firstname.trim() && bodyObj.lastname.trim() && Number(bodyObj.userId.trim())
    if (sameUser && id !== bodyObj.userId) {
        console.log(bodyObj.userId, id);

        showToast("کد ملی وارد شده تکراری میباشد .", "error");

    } else if (!validation) {

        showToast("لطفا اطلاعات خود را به طور کامل و صحیح وارد کنید.", "error");

    } else {
        usersInfo = [...usersInfo].map(user => {
            if (user.userId === id) {
                return bodyObj
            }
            return user
        })
        getUsersTable()
        showToast(`اطلاعات کاربر مورد نظر با موفقیت ویرایش شد.`, "success");
    }



}

function removeTarget(id) {

    usersInfo = [...usersInfo].filter(user => user.userId != id)
    getUsersTable()
    showToast(`کاربر مد نظر با موفقیت حذف شد.`, "success");

}


