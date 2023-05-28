export function dateСonverter(data) {
    const dateNew = data.split(".");
    console.log(dateNew);
    const date = new Date(Date.now());

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    // const yearDif = date.getDay();
    console.log(day, month, year);
    console.log(Number("09"));
    if (
        day === Number(dateNew[0]) &&
        month === Number(dateNew[1]) &&
        year === Number(dateNew[2])
    ) {
        return "today";
    } else if (
        year < Number(dateNew[2]) ||
        (year === Number(dateNew[2]) && month < Number(dateNew[1])) ||
        (year === Number(dateNew[2]) &&
            month === Number(dateNew[1]) &&
            day < Number(dateNew[0]))
    ) {
        return "tomorrow";
    } else if (
        year > Number(dateNew[2]) ||
        (year === Number(dateNew[2]) && month > Number(dateNew[1])) ||
        (year === Number(dateNew[2]) &&
            month === Number(dateNew[1]) &&
            day > Number(dateNew[0]))
    ) {
        return "yesterday";
    }
}
// const date = new Date(data);

// const dateNow = new Date();
// const yearDif = dateNow.getFullYear() - date.getFullYear();
// if (yearDif === 0) {
//     const dayDif = dateNow.getDate() - date.getDate();
//     if (dayDif === 0) {
//         const hourDif = dateNow.getHours() - date.getHours();
//         if (hourDif === 0) {
//             const minutesDif = dateNow.getMinutes() - date.getMinutes();

//             if (minutesDif >= 0 && minutesDif < 5) return "1 минуту назад";
//             if (minutesDif >= 5 && minutesDif < 10) return "5 минут назад";
//             if (minutesDif >= 10 && minutesDif < 30) {
//                 return "10 минут назад";
//             }
//             return "30 минут назад";
//         }
//         return `${date.getHours()}:${date.getMinutes()}`;
//     }

//     return date.toLocaleString("default", {
//         month: "long",
//         day: "numeric"
//     });

// return (
//     date.getFullYear() + "." + (date.getMonth() + 1) + "_" + date.getDate()
// );
