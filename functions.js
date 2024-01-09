export const animateArrayVisibility = (array, setIntervalDuration) => {

    for(let i=0; i<array.length; i++){
      setInterval(() => {
        array[i].setAttribute("visible", true);  
      }, setIntervalDuration*i);          
    };
};

export const showPortfolioItem = (item) => {
    for (let i = 0; i <= 2; i++) {
      document.querySelector("#portfolio-item" + i).setAttribute("visible", i === item);
    }
};