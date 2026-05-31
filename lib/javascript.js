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

function show(index){
    if(document.getElementById(index+"s").innerText === "show less"){
        //const elements = document.querySelectorAll('.grade');
        //elements.forEach(element => {
        //    element.remove();
        //});
        document.getElementById(index+"p").style.display = 'none';
        document.getElementById(index+"s").innerText = "show more.";
        return;
    }
    if(document.getElementById(index+"s").innerText === "show more."){
        document.getElementById(index+"p").style.display = 'flex';
        document.getElementById(index+"s").innerText = "show less";
        return;
    }
    document.getElementById(index+"s").innerText = "show less";
    if(index == "dsa"){
        for(let i = 0; i<dsa.length; i++){
            const child = document.createElement('div');
            child.innerHTML = "<div class=grade>" + dsa[i] + "</div>";
            dsap.appendChild(child);
        }
    }else if(index == "cn"){
        for(let i = 0; i<cn.length; i++){
            const child = document.createElement('div');
            child.innerHTML = "<div class=grade>" + cn[i] + "</div>";
            cnp.appendChild(child);
        }
    }else if(index == "os"){
        for(let i = 0; i<os.length; i++){
            const child = document.createElement('div');
            child.innerHTML = "<div class=grade>" + os[i] + "</div>";
            osp.appendChild(child);
        }
    }else if(index == "dbms"){
        for(let i = 0; i<dbms.length; i++){
            const child = document.createElement('div');
            child.innerHTML = "<div class=grade>" + dbms[i] + "</div>";
            dbmsp.appendChild(child);
        }
    }
}

function get(index){

    let a = document.getElementById(index+"name").value;
    let b = document.getElementById(index+"mark").value;
    let c = document.getElementById(index+"total").value;
    let newele = a + " <br> " + b + " out of " + c;
    document.getElementById(index+"over").classList.add('hidden');
    document.getElementById(index+"b").style.display = 'flex';
    document.getElementById(index+"name").value = "";
    document.getElementById(index+"mark").value = "";
    document.getElementById(index+"total").value = "";
    //if(document.getElementById(index+"name").value === "" || document.getElementById(index+"mark").value === "" || document.getElementById(index+"total").value === ""){
    //    return;        
    //}


    if(index === "dsa"){
        dsa.push(newele);
    }else if(index === "cn"){
        cn.push(newele);
    }else if(index === "os"){
        os.push(newele);
    }else if(index === "dbms"){
        dbms.push(newele);
    }

    if(document.getElementById(index+"s").innerText === "show less"){
        const child = document.createElement('div');
        child.innerHTML = "<div class=grade>" + newele + "</div>";
        document.getElementById(index+"p").appendChild(child);
    }else if(document.getElementById(index+"s").innerText === "show more."){
        document.getElementById(index+"p").style.display = 'flex';
        const child = document.createElement('div');
        child.innerHTML = "<div class=grade>" + newele + "</div>";
        document.getElementById(index+"p").appendChild(child);
    }
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

let dsa = ["quiz 1 <br> 7 out of 10", "CAT 1 <br> 41 out of 50", "quiz 2 <br> 8 out of 10", "quiz 3 <br> 6 out of 10", "Seminar <br> 22 out of 25", "Assignment 1 <br> 9 out of 10", "Assignment 2 <br> 8 out of 10"];
let cn = ["quiz 1 <br> 6 out of 10", "quiz 2 <br> 7 out of 10", "CAT 1 <br> 35 out of 50"];
let os = ["quiz 1 <br> 9 out of 10", "Seminar <br> 20 out of 25", "CAT 1 <br> 45 out of 50", "viva <br> 19 out of 20"];
let dbms = ["quiz 1 <br> 8 out of 10", "CAT 1 <br> 40 out of 50", "quiz 2 <br> 9 out of 10", "quiz 3 <br> 6 out of 10", "Seminar <br> 23 out of 25", "viva <br> 19 out of 20"];

let dsap = document.getElementById("dsap");
let cnp = document.getElementById("cnp");
let osp = document.getElementById("osp");
let dbmsp = document.getElementById("dbmsp");

let dsas = document.getElementById("dsas");
let cns = document.getElementById("cns");
let oss = document.getElementById("oss");
let dbmss = document.getElementById("dbmss");

dsas.addEventListener("click", ()=>show("dsa"));
cns.addEventListener("click", ()=>show("cn"));
oss.addEventListener("click", ()=>show("os"));
dbmss.addEventListener("click", ()=>show("dbms"));


document.getElementById("dsab").addEventListener("click", ()=>{
    document.getElementById("dsaover").classList.remove('hidden');
    document.getElementById("dsab").style.display = 'none';
});
document.getElementById("cnb").addEventListener("click", ()=>{
    document.getElementById("cnover").classList.remove('hidden');
    document.getElementById("cnb").style.display = 'none';
});
document.getElementById("osb").addEventListener("click", ()=>{
    document.getElementById("osover").classList.remove('hidden');
    document.getElementById("osb").style.display = 'none';
});
document.getElementById("dbmsb").addEventListener("click", ()=>{
    document.getElementById("dbmsover").classList.remove('hidden');
    document.getElementById("dbmsb").style.display = 'none';
});

document.getElementById("dsac").addEventListener("click", ()=>get("dsa"));
document.getElementById("cnc").addEventListener("click", ()=>get("cn"));
document.getElementById("osc").addEventListener("click", ()=>get("os"));
document.getElementById("dbmsc").addEventListener("click", ()=>get("dbms"));

let imgs = ["images/1740655243.jpeg", "images/hq720.jpg", "images/1765785696phpCfpAwL.jpeg"];
let j =0;
let img = document.getElementById("act");
img.src = imgs[j];

document.getElementById("a").addEventListener("click", ()=>{
    j = (j + 1) % 3;
    img.src = imgs[j];
});