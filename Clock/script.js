function showTime() {
    let a = new Date();
    let h = a.getHours;
    let m = a.getMinutes;
    let s = a.getSeconds;
    let d = a.getDate;
    let mon =a.getMonth
    let year =a.getFullYear
    let season = "AM";

    if (h == 0) {
        h == 12;
        season = "Am";
    }
    if (h > 12) {
        h = h - 12;
        season = "PM";
    }
    // h = (h < 10) ? "0" + h : h;
    // m = (m < 10) ? "0" + m : m;
    // s = (s < 10) ? "0" + s : s;
    let time = ` Time -${h}: ${m}: ${s} :${season} \n Date: ${d} / ${mon} / ${year}`;


    document.querySelector("#Myclock").innerText = time;
    document.querySelector("#Myclock").innerContent = time;
    setTimeout(showTime(), 1000);
}

showTime()