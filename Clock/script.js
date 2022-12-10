function showTime_ind() {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    let mon = a.getMonth();
    let year = a.getFullYear();
    let season = "AM";
    // console.log(h,m,s);

    if (h == 0) {
        h = 12;
        season = "Am";
    }
    if (h > 12) {
        h = h - 12;
        season = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = ` Time: ${h}: ${m}: ${s} ${season} \nDate: ${d} / ${mon} / ${year}`;


    document.getElementById("Myclock").innerText = time;
    document.getElementById("Myclock").innerContent = time;
    setTimeout(showTime_ind, 1000);
}

let i_f1 = function (e) {
    document.getElementById('Myclock').style.display = "block";
}

let i = document.getElementById("ind");
i.addEventListener('click', i_f1);
i.addEventListener('click', showTime_ind())







function showTime_uae() {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    let mon = a.getMonth();
    let year = a.getFullYear();
    let season = "AM";
    // console.log(h,m,s);
    h = h + 1;
    m = m + 30;
    if (m > 60) {
        h = h + 1;
        m = m - 60;
    }
    if (h == 0) {
        h = 12;
        season = "Am";
    }
    if (h > 12) {
        h = h - 12;
        season = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = ` Time: ${h}: ${m}: ${s} ${season} \nDate: ${d} / ${mon} / ${year}`;


    document.getElementById("uae_clock").innerText = time;
    document.getElementById("uae_clock").innerContent = time;
    setTimeout(showTime_uae, 1000);
}
let u_f1 = function (e) {
    document.getElementById('uae_clock').style.display = "block";
}

let u = document.getElementById("uae");
u.addEventListener('click', u_f1);
u.addEventListener('click', showTime_uae)










function showTime_aus() {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    let mon = a.getMonth();
    let year = a.getFullYear();
    let season = "AM";
    // console.log(h,m,s);
    h = h + 5;
    m = m + 30;
    if (h == 0) {
        h = 12;
        season = "Am";
    }
    if (h > 12) {
        h = h - 12;
        season = "PM";
    }
    if (m > 60) {
        h = h + 1;
        m = m - 60;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = ` Time: ${h}: ${m}: ${s} ${season} \nDate: ${d} / ${mon} / ${year}`;


    document.getElementById("aus_clock").innerText = time;
    document.getElementById("aus_clock").innerContent = time;
    setTimeout(showTime_aus, 1000);
}
let a_f1 = function (e) {
    document.getElementById('aus_clock').style.display = "block";
}

let a = document.getElementById("aus");
a.addEventListener('click', a_f1);
a.addEventListener('click', showTime_aus);










function showTime_jap() {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    let mon = a.getMonth();
    let year = a.getFullYear();
    let season = "AM";
   
    h = h + 3;
    m = m + 30;
    if (h == 0) {
        h = 12;
        season = "Am";
    }
    if (h > 12) {
        h = h - 12;
        season = "PM";
    }
    if (m > 60) {
        h = h + 1;
        m = m - 60;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = ` Time: ${h}: ${m}: ${s} ${season} \nDate: ${d} / ${mon} / ${year}`;

    console.log(h,m,s); 
    document.getElementById("jap_clock").innerText = time;
    document.getElementById("jap_clock").innerContent = time;
    setTimeout(showTime_jap, 1000);
}
let j_f1 = function (e) {
    document.getElementById('jap_clock').style.display = "block";
}

let j = document.getElementById("jap");
a.addEventListener('click', j_f1);
a.addEventListener('click', showTime_jap());
