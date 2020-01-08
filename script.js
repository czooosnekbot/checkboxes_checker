const groupToggler = document.querySelector('#groupToggler')
const groupId = document.querySelectorAll('#groupId')

groupToggler.addEventListener('click', (e) => {
    if (groupToggler.checked) {
        for (i=0;i<=(groupId.length - 1);i++) {
            groupId[i].checked = true
        }
    } else {
        for (i=0;i<=(groupId.length - 1);i++) {
            groupId[i].checked = false
        }
    }
})