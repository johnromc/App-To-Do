const d = document,
input = d.querySelector('input'),
addBtn = d.querySelector('.btn-add'),
ul = d.querySelector('ul'),
empty = d.querySelector('.empty');

addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    const text = input.value;

    if (text !== "") {
        const li = d.createElement('li'),
        p = d.createElement('p');

        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addBtnDelete());
        ul.appendChild(li);

        input.value = '';
        empty.style.display = 'none';
    }
})

function addBtnDelete() {
    const deleteBtn = d.createElement('button');

    deleteBtn.textContent = ('X');
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click',(e)=>{
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = d.querySelectorAll('li');

        if(items.length === 0){
            empty.style.display = 'block';
        }
    })
    return deleteBtn
}

