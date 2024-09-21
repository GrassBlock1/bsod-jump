let i = 0;

// a progress make it looks like a real loading
function progress() {
    if (i === 0) {
        i = 1;
        const elem = document.getElementById("progress");
        let progress = 0;
        const id = setInterval(frame, 500);

        function frame() {
            if (progress >= 100) {
                clearInterval(id);
                i = 0;
                elem.outerHTML = "";
            } else {
                progress+=10;
                elem.innerHTML = progress + "% 已完成";
            }
        }
    }
}

function randomError() {
   const errorList = ["INACCESSIBLE_BOOT_DEVICE","NEVER_GONNA_GIVE_YOU_UP","NVIDIA_FXXK_YOU","AMDGPU_RESET_BEGIN","RICKROLLED_AGAIN","PLAYED_GENSHIN_IMPACT","ATE_YOGURT_MAHUA"]
   const errorCodeElem = document.getElementById("error")
   errorCodeElem.innerHTML = errorList[Math.floor(Math.random() * errorList.length)];
}

progress();
randomError();

// redirect
//setTimeout(function() {
//    const oldUrl = document.location.href;
//    const newUrl = new URL(oldUrl);
//    if (document.location.host.split(".")[0] === 'lab' || document.location.host.split(".")[0] === 'blog')
//    {
//        newUrl.hostname = 'lab.gb0.dev';
//    } else {
//        newUrl.hostname = 'gb0.dev';
//    }
//    window.location.href = newUrl.href;
//}, 5000); // 5 秒后重定向