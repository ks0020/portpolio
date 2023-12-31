const bodyElement = document.getElementById('body');

const text = document.querySelector(".hello_typing");
const content = "안녕하세요!\n자신감 넘치는 신입개발자 이석민입니다. \n늘 도전하고, 그 도전을 성공으로 이끌겠습니다!                "
let i = 0;

const typing = function () {
    text.innerHTML += content[i];
    i++;
    if (content[i] === "\n"){
        text.innerHTML += "<br>";
        i++;
    }
    if (i > content.length){
        text.textContent = "";
        i = 0;
    }
};

const adjustFontSize = function () {
    if (window.innerWidth <= 1100) { // 작은 화면
        text.style.fontSize = "1.5rem";
    } else {
        text.style.fontSize = "2rem"; // 기본 크기
    }
};

window.addEventListener('resize', adjustFontSize);

setInterval(typing, 150);

const graphs = document.querySelectorAll('.graph-container ul');

function resetAnimation(graphId) {
    const graph = document.querySelector('.' + graphId);
    graph.classList.remove('animate');
    void graph.offsetWidth;
    graph.classList.add('animate');

}

const coverElement = document.getElementById('cover');
coverElement.show = (f) => {
    coverElement.classList.add('visible');
    coverElement.onclick = f;
}
coverElement.hide = () => {
    coverElement.classList.remove('visible');
};

const skillForm = document.getElementById('skillForm');
const plusForm = document.querySelector('.plusForm');


skillForm.hide = () => {
    skillForm.classList.remove('visible');
};
skillForm.show = () => {
    skillForm.classList.add('visible');
};
plusForm.hide = () => {
    coverElement.hide();
    skillForm.hide();
};
plusForm.show = (f) => {
    skillForm.show();
    plusForm.onclick = f;
};
plusForm.onclick = () => {
    coverElement.show(() => {
        plusForm.hide();
    });
    skillForm.show();
};

const cancelBtn = skillForm.querySelector('.cancel');

cancelBtn.onclick = () => {
    coverElement.hide();
    skillForm.hide();
};

const frontBtn = skillForm.querySelector('.frontBtn');
const backBtn = skillForm.querySelector('.backBtn');
const dbBtn = skillForm.querySelector('.dbBtn');

const frontContainer = skillForm.querySelector('.front-container');
const backContainer = skillForm.querySelector('.back-container');
const dbContainer = skillForm.querySelector('.db-container');

frontBtn.onclick = () => {
    frontContainer.classList.add('visible');
    backContainer.classList.remove('visible');
    dbContainer.classList.remove('visible');
};

backBtn.onclick = () => {
    frontContainer.classList.remove('visible');
    backContainer.classList.add('visible');
    dbContainer.classList.remove('visible');
};

dbBtn.onclick = () => {
    frontContainer.classList.remove('visible');
    backContainer.classList.remove('visible');
    dbContainer.classList.add('visible');
}

// 윈도우 크기 반응형
window.addEventListener('resize', function () {

    // 메뉴와 프로필 이미지 숨기기/보이기
    const fixedMenu = bodyElement.querySelector('.fixed');
    const profileElements = bodyElement.querySelectorAll('.profile');

    if (innerWidth <= 1100) {
        fixedMenu.style.visibility = 'hidden';
        for (const profile of profileElements) {
            profile.style.display = 'none';
        }
    } else {
        fixedMenu.style.visibility = 'visible';
        for (const profile of profileElements) {
            profile.style.display = 'block';
        }
    }
});


window.dispatchEvent(new Event('resize'));