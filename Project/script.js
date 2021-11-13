let question = {
    title:'gato',
    alternative: [ 'dog','cat','fish','Human'],
    correctAnswer: 1
};

function showQuestion(q){
    //select dom element

    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;

    //selecting by query


    //what is going on here is I am selecting the class name like you would in css
    let alts = document.querySelectorAll('.alternative');
    alts.forEach(function(element/*This is the actual object in the array*/,index/*This is the position in the array*/){
        //for each element set it equal to the text provided by the object question -> array Alternative
        element.textContent = q.alternative[index];
        //each item in the list add an event listener
        element.addEventListener('click',function(){
            //check for the right answer
            if (q.correctAnswer == index){
                console.log('correct Answer!');
            }
            else{
                console.log('wrong answer!');
            }
        })
    })
}

showQuestion(question)



