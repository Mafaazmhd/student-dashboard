let dsat = 10;
let dsaa = 6;
let cnt = 8;
let cna = 7;
let ost = 14;
let osa = 12;
let dmst = 10;
let dmsa = 9;
let months = new Map();
months.set("January", 1);
months.set("February", 2);
months.set("March", 3);
months.set("April", 4);
months.set("May", 5);
months.set("June", 6);
months.set("July", 7);
months.set("August", 8);
months.set("September", 9);
months.set("October", 10);
months.set("November", 11);
months.set("December", 12);

let dsav = document.getElementById("dsabar");
let cnv = document.getElementById("cnbar");
let osv = document.getElementById("osbar");
let dmsv = document.getElementById("dbmsbar");

function color(){
    if(Math.trunc((dsaa/dsat)*100) < 75){
        dsav.style.color = "red";
    }
    if(Math.trunc((cna/cnt)*100) < 75){
        cnv.style.color = "red";
    }
    if(Math.trunc((osa/ost)*100) < 75){
        osv.style.color = "red";
    }
    if(Math.trunc((dmsa/dmst)*100) < 75){
        dmsv.style.color = "red";
    }
}

function count(){
    document.getElementById("dsa+").innerHTML = dsaa;
    document.getElementById("dsa-").innerHTML = dsat - dsaa;
    document.getElementById("cn+").innerHTML = cna;
    document.getElementById("cn-").innerHTML = cnt - cna;
    document.getElementById("os+").innerHTML = osa;
    document.getElementById("os-").innerHTML = ost - osa;
    document.getElementById("dbms+").innerHTML = dmsa;
    document.getElementById("dbms-").innerHTML = dmst - dmsa;
}

function attset(){
    dsav.innerHTML = Math.trunc((dsaa/dsat)*100) + "%";
    cnv.innerHTML = Math.trunc((cna/cnt)*100) + "%";
    osv.innerHTML = Math.trunc((osa/ost)*100) + "%";
    dmsv.innerHTML = Math.trunc((dmsa/dmst)*100) + "%";
    color();
    count();
}

function update(subject, info){
    if(subject === 0 && info === 0){
        dsat++;
    }else if(subject === 0 && info === 1){
        dsat++;
        dsaa++;
    }else if(subject === 0 && info === 2){
        dsat--;
    }else if(subject === 0 && info === 3){
        dsaa--;
        dsat--;
    }else if(subject === 1 && info === 0){
        cnt++;
    }else if(subject === 1 && info === 1){
        cnt++;
        cna++;
    }else if(subject === 1 && info === 2){
        cnt--;
    }else if(subject === 1 && info === 3){
        cna--;
        cnt--;
    }else if(subject === 2 && info === 0){
        ost++;
    }else if(subject === 2 && info === 1){
        ost++;
        osa++;
    }else if(subject === 2 && info === 2){
        ost--;
    }else if(subject === 2 && info === 3){
        osa--;
        ost--;
    }else if(subject === 3 && info === 0){
        dmst++;
    }else if(subject === 3 && info === 1){
        dmst++;
        dmsa++;
    }else if(subject === 3 && info === 2){
        dmst--;
    }else if(subject === 3 && info === 3){
        dmsa--;
        dmst--;
    }
    attset();
}

function dates(index){
    let today = new Date();
    let date = document.getElementById(index + "day").innerText;
    document.getElementById(index + "event").innerHTML = date - today.getDate() + " days left for the event";
}

attset();

document.getElementById("cnatt-").addEventListener("click", () => update(1, 3));
document.getElementById("cnatt+").addEventListener("click", () => update(1, 1));
document.getElementById("cnabs-").addEventListener("click", () => update(1, 2));
document.getElementById("cnabs+").addEventListener("click", () => update(1, 0));
document.getElementById("osatt-").addEventListener("click", () => update(2, 3));
document.getElementById("osatt+").addEventListener("click", () => update(2, 1));
document.getElementById("osabs-").addEventListener("click", () => update(2, 2));
document.getElementById("osabs+").addEventListener("click", () => update(2, 0));
document.getElementById("dbmsatt-").addEventListener("click", () => update(3, 3));
document.getElementById("dbmsatt+").addEventListener("click", () => update(3, 1));
document.getElementById("dbmsabs-").addEventListener("click", () => update(3, 2));
document.getElementById("dbmsabs+").addEventListener("click", () => update(3, 0));
document.getElementById("dsaatt-").addEventListener("click", () => update(0, 3));
document.getElementById("dsaatt+").addEventListener("click", () => update(0, 1));
document.getElementById("dsaabs-").addEventListener("click", () => update(0, 2));
document.getElementById("dsaabs+").addEventListener("click", () => update(0, 0));

let today = new Date();
let date = today.getDate() + '-' + (today.getUTCMonth() + 1) + '-' + today.getFullYear();
document.getElementById("current-date").innerHTML = date;
dates("1");
dates("2");
dates("3");
dates("4");
dates("5");
dates("6");