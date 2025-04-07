document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });


const multiply = (a,b) => {
    return a*b;
}

const yell = (str) => {
    console.log(String(str).toUpperCase());
}

function longerThan(a,b){
    return a.length > b.length;
}
