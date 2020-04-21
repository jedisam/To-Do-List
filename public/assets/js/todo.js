$(document).ready((e)=>{
    $('form').on('submit',()=>{       
        const item = $('form input')
        const todo = {item:item.val()}
    
        $.ajax({
            type:'POST',
            url:'/todo',
            data:todo,
            success:(data)=>{
                location.reload()
            }
        })
        return false
    })
    $('a').on('click',(e)=>{
    $target = $(e.target)
    const id = $target.attr('data-id')
    $.ajax({
        type:'DELETE',
        url:'/todo/'+id,
        success:(data)=>{
            location.reload()
        }
    })
})

})