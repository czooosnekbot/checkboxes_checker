const groupToggler = document.querySelector('#groupToggler')
const groupId = document.querySelectorAll('#groupId')

groupToggler.addEventListener('click', (e) => {
    if (groupToggler.checked) {
        groupId.forEach(function (checkbox) {
            checkbox.checked = true
        })
    } else {
        groupId.forEach(function (checkbox) {
            checkbox.checked = false
        })
    }
})