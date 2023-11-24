(function(){
    const myNode = document.createElement("div");
    const digitalClock =document.getElementById('digitalClock');
    digitalClock.appendChild(myNode);
    myNode.innerHTML="Hello";
    // Task 2
    const myDate = new Date();
    console.dir(myDate);
    myNode.innerHTML=myDate.toDateString();
    // show only hours, minutes and seconds
    myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    // Task 3

    const updateClockHands = (myDate) => {
        const seconds = myDate.getSeconds();
        const rotSeconds = seconds * 6 - 90;
        secondHand.style.transform = `rotate(${rotSeconds}deg)`;
    };

    const updateTime = () =>{
        const myDate = new Date();
        myNode.innerHTML = myDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        updateClockHands(myDate);
    };

    // Task 4
    const secondHand = document.getElementById("secondHand");
    const minHand = document.getElementById("minHand");
    const hrHand = document.getElementById("hrHand");
    hrHand.style.backgroundColor = '#0f0';
    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    const minutes = myDate.getMinutes();
    const rotMinutes = minutes * 6 - 90;
    const hours= myDate.getHours();
    const rotHours= hours * 6 - 90;
    secondHand.style.transform = `rotate(${rotSeconds}deg)`;
    minHand.style.transform = `rotate(${rotMinutes}deg)`;
    hrHand.style.transform = `rotate(${rotHours}deg)`;

    
    setInterval(updateTime, 1000);
    updateTime();

})();



