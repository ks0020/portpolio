const bodyElement = document.getElementById('body');


window.addEventListener('resize', function () {

    if (innerWidth <= 1100) {
        bodyElement.querySelector('.fixed').style.visibility = 'hidden';
    } else {
        bodyElement.querySelector('.fixed').style.visibility = 'visible';
    }

    // if (innerWidth <= 1100) {
    //     bodyElement.getElementById('etcForm').style.marginLeft = '0';
    // } else {
    //     bodyElement.getElementById('etcForm').style.marginLeft = '20rem';
    // }

});



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
