

const footer = document.getElementById("footer");



function show(number){



        if(number == "1"){



            lesson2.style.display = "none";

            lesson3.style.display = "none";

            lesson1.style.display = "block";

            a[0].style.color = "green";

            a[1].style.color = "black";

            a[2].style.color = "black";

            a[3].style.color = "black";

            footer.style.marginTop = "400px";



        }



        else if(number == "2"){



            lesson1.style.display = "none";

            lesson3.style.display = "none";

            lesson2.style.display = "block";

            a[0].style.color = "black";

            a[1].style.color = "green";

            a[2].style.color = "black";

            a[3].style.color = "black";

            footer.style.marginTop = "950px";



        }

        else if(number == "3"){



            lesson1.style.display = "none";

            lesson2.style.display = "none";

            lesson3.style.display = "block";

            a[0].style.color = "black";

            a[1].style.color = "black";

            a[3].style.color = "black";

            a[2].style.color = "green";

            footer.style.marginTop = "950px";

        }

        else if(number == "4"){



            lesson1.style.display = "none";

            lesson2.style.display = "none";

            lesson3.style.display = "none";

            lesson4.style.display = "block";

            a[0].style.color = "black";

            a[1].style.color = "black";

            a[2].style.color = "black";

            a[3].style.color = "green";

            footer.style.marginTop = "400px";

        }



}

