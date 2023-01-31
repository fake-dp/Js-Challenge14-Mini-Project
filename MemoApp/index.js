const container = document.getElementById("container");
const addMeomoBtn = document.createElement("button");
const memoList = document.createElement("div");
addMeomoBtn.innerText = "add Memo";
addMeomoBtn.className = "addBtn";
container.appendChild(addMeomoBtn);
container.appendChild(memoList);
memoList.className = "memolist";

const memos = JSON.parse(localStorage.getItem("memos"));

if (memos) {
  memos.forEach((memo) => addNewMemo(memo));
}

addMeomoBtn.addEventListener("click", () => addNewMemo());

function addNewMemo(text = "") {
  const memo = document.createElement("div");
  memo.classList.add("memo");

  if (text === "") {
    memo.innerHTML = `
<div class="btnWrapper">
  <button class="edit">저장</button>
  <button class="delete">삭제</button>
</div>
  <div class="text ${text ? "" : "hide"}"></div>
  <textarea class="${text ? "hide" : ""}">
  `;
  } else if (memos) {
    memo.innerHTML = `
    <div class="btnWrapper">
      <button class="edit">수정</button>
      <button class="delete">삭제</button>
    </div>
      <div class="text ${text ? "" : "hide"}"></div>
      <textarea class="${text ? "hide" : ""}">
      `;
  }

  const deleteBtn = memo.querySelector(".delete");
  const editBtn = memo.querySelector(".edit");
  const memoText = memo.querySelector(".text");
  const textArea = memo.querySelector("textarea");
  textArea.value = text;
  memoText.innerText = text;

  // delete btn
  deleteBtn.addEventListener("click", () => {
    memo.remove();
    updateMemo();
  });

  // edit btn
  editBtn.addEventListener("click", (e) => {
    if (e.target.innerText === "수정") {
      memoText.classList.add("hide");
      textArea.classList.remove("hide");
      editBtn.innerText = "저장";
    } else if (e.target.innerText === "저장") {
      memoText.classList.remove("hide");
      textArea.classList.add("hide");
      editBtn.innerText = "수정";
    }
  });

  // create
  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    memoText.innerText = value;
    updateMemo();
  });

  memoList.appendChild(memo);
}

// localupdate
function updateMemo() {
  const memoText = document.querySelectorAll("textarea");
  const memos = [];
  memoText.forEach((memo) => memos.push(memo.value));
  localStorage.setItem("memos", JSON.stringify(memos));
}
