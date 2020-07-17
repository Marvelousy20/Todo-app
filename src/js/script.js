const add = document.getElementById('add') ;
const wrapper = document.getElementById('wrapper')
const clear = document.getElementById('btnD')
const ul = document.querySelector('ul') ;



const myDate = document.getElementById('date')

function getDate(d = new Date()) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] ;
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December']

    let day = days[d.getDay()] 
    let month = months[d.getMonth()]
    const year = d.getFullYear()

    return `${day}-${month}-${year}` ;
}

myDate.innerText = `Enter your tasks for ${getDate()}` ;

add.addEventListener('click', addTask = () =>  {
    const text = document.getElementById('text') ;
    let li = document.createElement('li') ;
    const edit = document.createElement('i')
    const remove = document.createElement('i')
    const spacer = document.createElement('div')
    
    spacer.className = 'spacer'
    edit.classList = 'fa fa-pencil'
    remove.classList = 'fa fa-trash-o'



    li.innerText = text.value ;
    
    if(text.value.length === 0) {
        alert('Sorry, you need to enter a task')
    }
    
    else {
        li.appendChild(spacer)
        li.appendChild(edit) ;
        li.appendChild(remove) ;
        ul.appendChild(li) ;
        ul.appendChild(clear)
        wrapper.appendChild(ul); 
        li.id = 'list-items'
    
    
        clear.style.display = 'block'
        text.value = ''
        
        remove.addEventListener('click', () => {
            if(confirm('are you sure you want to remove task?')) {
                deleteTasks();
            }
        })
    
        clear.addEventListener('click', () => {
            clearTasks()
        })
        
        edit.addEventListener('click', (e) => {
            let prevState = li.innerText;
            text.value = prevState;
            console.log(prevState)
            
            text.addEventListener('change', (event) => {
                let newState = event.target.value ;
                if (li.innerText !== newState) {
                    li.innerText = newState;
                    li.style.display = 'none'
                    console.log(prevState)
                }
            }) 
        })    
      
        function deleteTasks() {
            li.style.display = 'none';
        }
    
        function clearTasks() {
            ul.innerText = ''
        }

        console.log(li.children.length)
    }
})

function enterKey() {
    let x = event.which || event.keyCode;
    if(x === 13) {
        addTask()
    }
}