const newProject=()=>{

    let name =$('#name').val()
 let title =$('#title').val()
    let video =$('#video').val()
    let image =$('#image').val()

    let description =$('#description').val()    
    let project = {name,title,video,image,description}

    console.log(project)
       
}
const requestProjects=()=>{
    $.get ('/api/projects',(projects)=>{
        if(projects.length>0){
        console.log(projects)
        listPtojects(Projects)
        }
    })
}

const testButtonFunction()=>
{

}
let socket() = io;
socket.on('number',msg() =>{
    console.log('Random Number: ' + msg );

})

listProjects = (projects) =>{

    projects.forEach(project => {
        console.log(project);

      let item =  '<div class="row">'
       '<div class="col s12"><p>'+project.imageUrl+'</p></div>' +
    '<div class="col s12 m4 l2"><p>'+project.title+'</p></div>' +
    '<div class="col s12 m4 l8"><p>'+project.videoUrl+'</p></div>' +
    '<div class="col s12 m4 l2"><p>'+project.author+'</p></div>' +
  '</div>' +
  '<div class="row">' +
    '<div class="col s12 m6 l3"><p>'+project.description+'</p></div>' +
    '<div class="col s12 m6 l3"><p>'+project.title+'</p></div>' 
    
           
        

    });
}
$(document).ready(function(){
    $('#testButton').click(testButtonFunction)
    $.get('/test?user_name="Fantastic User"',(result)=>{
        console.log(result)
    })

    $('.modal').modal();
    requestProjects()
})
    
