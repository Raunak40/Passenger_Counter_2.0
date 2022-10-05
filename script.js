const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const countEl = document.getElementById("count-el")
let previousEntriesEl = document.getElementById("previous-entries-el")
let count = 0

incrementBtn.addEventListener('click',function(){
    count += 1
    countEl.innerText = count
})

saveBtn.addEventListener('click', function(){
    previousEntriesEl.innerText += " " +count +" - "
})