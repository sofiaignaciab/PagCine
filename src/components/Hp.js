export const CreateSeats = (rows, columns) => {
    let i = 0;
    let k = 'A'
    const ref = 'A'
    const seats = [];

    while (i !== columns) {
        seats.push({
            id: k + JSON.stringify(i + 1),
            inUse: false,
        })
        i++;
        if (i === columns && k !== String.fromCharCode(ref.charCodeAt(0) + (rows - 1))) {
            k = String.fromCharCode(k.charCodeAt(0) + 1)
            i = 0;
        }
    }

    return seats;
}