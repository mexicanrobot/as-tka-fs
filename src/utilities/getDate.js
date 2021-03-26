function getDate() {
    let date = new Date().toString().split(" ");
    date.splice(4);
    return date.join(" ");
};

export default getDate;