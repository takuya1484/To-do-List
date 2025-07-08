const inputEl = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoListEl = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
    todoListEl.innerHTML = '';
    todos.forEach((todo, index) => {
      
        const li = document.createElement('li');

        const text = document.createElement('text');

        //text要素にtextを代入する
       
         text.textContent = todo.text; 

        //削除ボタン
        const delBtn = document.createElement('button');

        delBtn.textContent = '削除';
        delBtn.classList.add('delete-btn');
        
        delBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            renderTodos();
        });

        
        li.appendChild(text);
        li.appendChild(delBtn);
        todoListEl.appendChild(li);
    });
}

function addTodo() {
    
    const text = inputEl.value.trim(); // テキストボックスから取得
    
    if (text) {
        todos.push({ text: text });
        renderTodos();
        
        inputEl.value = ''; //テキストボックスを空白にする
    }
}

//addBtnをクリックでtodoを追加
addBtn.addEventListener('click', addTodo);

//追加要素enterを押すとtodoが追加される
// inputEl.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         addTodo();
//     }
// });

//localstrageの利用も