let input = document.getElementById("content"); /** 입력 */
const add = document.getElementById("add");  /** 추가 버튼 */
let catalog = document.getElementById("catalog"); /** 목록 */

/** 내용 기록 */
function addList() {
    if (input.value == '') {
        alert("입력한 내용이 없습니다");
    } else {
        const list = document.createElement("li"); // li 추가  
        const del = document.createElement("button"); // x 추가 
        del.innerText = "🗑️";
        list.innerHTML = input.value; // 입력한 내용대로 li 생성
        catalog.appendChild(list); // 목록에 list 추가 
        list.appendChild(del); // list에 del 생성 

        // 입력 후 
        input.value = "";
        input.focus();

        // 부모 요소 지우기 
        function deleteList(event) {
            const list = event.target.parentElement;
            list.remove();
        }
        del.addEventListener("click", deleteList);

        // li 더블클릭 완료 해제 토글
        list.addEventListener('dblclick', () => {
            list.classList.toggle("complete");
        })
    }
};

/** 버튼 클릭 이벤트 */
add.addEventListener("click", addList);

/** 엔터 추가 이벤트 */
input.addEventListener("keydown", (event) => {
    if (!event.isComposing && event.key === "Enter") {
        event.preventDefault();
        addList();
    }
});
