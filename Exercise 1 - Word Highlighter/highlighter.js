let paragraph = document.getElementById('myParagraph');
const array = paragraph.outerHTML.split(' ');
const arr = array.filter(item => item !== '');

function mode(arr){
  return arr.sort((a,b) =>
        arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
  ).pop(); // 'be'
}

const highlight = array.map(item => {
  if(item === 'be') {
    return `<span style="background-color:blue;">${item}</span>`
  }else{
    return item
  }
})

let newParagraph = highlight.join(' ');
paragraph.innerHTML = newParagraph;
