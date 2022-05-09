$(document).ready(function(){
    // $('.taskInput').hide();
    $('.addTask').hide();
    $('.add').on('click',function(){
        $('.taskInput').show();
       
    })
    $('.add').on('click',function(){
        var task=$('.taskInput').val();
        $('ul').append(`<li class="taskList">${task}</li>`);
        $('.addTask').hide();
        $('.add').show();
        alert('new task in your list')

    })
   $('.remove').on('click',function(){
    alert('double click to delete')
$('li').on('dblclick',function(){
   
$(this).remove()
})
})

$('.done').on('click',function(){
    $('li').on('click',function(){
    $(this).css('text-decoration','line-through')
    })
    })
        //  projects

     $('.addProject').on('click',function(){
         var project=$('.inputProject').val()
         $('.projects ol').append(`<li>${project}</li>`)
         $('.projects ol li').on('click',function(){
            $('.projects').find('ol li.active').removeClass('active')
         $(this).addClass('active')
        
            
            
                })
     })


})