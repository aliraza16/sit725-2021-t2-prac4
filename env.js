const requestProjects=()=>{
    $.get ('/api/projects',(projects)=>{
        if(projects.length>0){
        console.log(projects)
        listPtojects(Projects)
        }
    })
}

$(document).ready(function(){
    $('#testButton').click(testButtonFunction)
    $.get('/test?user_name="Fantastic User"',(result)=>{
        console.log(result)
    })

    $('.modal').modal();
    requestProjects()
})
    