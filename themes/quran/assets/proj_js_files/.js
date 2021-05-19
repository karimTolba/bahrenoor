$(document).ready(function(){

	window.addEventListener('scroll' , function(){

		let st = window.scrollY;

          	let top_container = document.getElementById("top_container");

          if (st >= 0){
              // downscroll code
            
              top_container.style.position = "fixed";
              top_container.style.backgroundColor = "white";
              top_container.style.top = "50px"; 
              top_container.style.width = "100%";
		console.log(top_container);
		

          } else{

              // upscroll code
             
              top_container.style.position = "static";
              top_container.style.backgroundColor = "white";
              top_container.style.width = "100%";




          }
	});


});


var main_array;  

$.ajax({

  url : 'http://mp3quran.net/api/_arabic.php',

  dataType : 'json' ,

  async: false,

  success : function(data){



    main_array = data;



  },



});



console.log(main_array);



var reciter_name = document.getElementById("reciter_name");



var reciter_id = document.getElementById("reciter_id");



var id_text = reciter_id.innerText;



var surahs = [

            {

              "name": "الفاتحة",

              "id": 1

            },

            {

              "name": "البقرة",

              "id": 2

            },

            {

              "name": "آل عمران",

              "id": 3

            },

            {

              "name": "النساء",

              "id": 4

            },

            {

              "name": "المائدة",

              "id": 5

            },

            {

              "name": "الانعام",

              "id": 6

            },

            {

              "name": "الاعراف",

              "id": 7

            },

            {

              "name": "الانفال",

              "id": 8

            },

            {

              "name": "التوبة",

              "id": 9

            },

            {

              "name": "يونس",

              "id": 10

            },

            {

              "name": "هود",

              "id": 11

            },

            {

              "name": "يوسف",

              "id": 12

            },

            {

              "name": "الرعد",

              "id": 13

            },

            {

              "name": "ابراهيم",

              "id": 14

            },

            {

              "name": "الحجر",

              "id": 15

            },

            {

              "name": "النحل",

              "id": 16

            },

            {

              "name": "الاسراء",

              "id": 17

            },

            {

              "name": "الكهف",

              "id": 18

            },

            {

              "name": "مريم",

              "id": 19

            },

            {

              "name": "طه",

              "id": 20

            },

            {

              "name": "الانبياء",

              "id": 21

            },

            {

              "name": "الحج",

              "id": 22

            },

            {

              "name": "المؤمنون",

              "id": 23

            },

            {

              "name": "النور",

              "id": 24

            },

            {

              "name": "الفرقان",

              "id": 25

            },

            {

              "name": "الشعراء",

              "id": 26

            },

            {

              "name": "النمل",

              "id": 27

            },

            {

              "name": "القصص",

              "id": 28

            },

            {

              "name": "العنكبوت",

              "id": 29

            },

            {

              "name": "الروم",

              "id": 30

            },

            {

              "name": "لقمان",

              "id": 31

            },

            {

              "name": "السجدة",

              "id": 32

            },

            {

              "name": "الاحزاب",

              "id": 33

            },

            {

              "name": "سبأ",

              "id": 34

            },

            {

              "name": "فاطر",

              "id": 35

            },

            {

              "name": "ياسين",

              "id": 36

            },

            {

              "name": "الصفات",

              "id": 37

            },

            {

              "name": "ص",

              "id": 38

            },

            {

              "name": "الزمر",

              "id": 39

            },

            {

              "name": "غافر",

              "id": 40

            },

            {

              "name": "فصلت",

              "id": 41

            },

            {

              "name": "الشورى",

              "id": 42

            },

            {

              "name": "الزخرف",

              "id": 43

            },

            {

              "name": "الدخان",

              "id": 44

            },

            {

              "name": "الجاسية",

              "id": 45

            },

            {

              "name": "الحاقة",

              "id": 46

            },

            {

              "name": "محمد",

              "id": 47

            },

            {

              "name": "الفتح",

              "id": 48

            },

            {

              "name": "الحجرات",

              "id": 49

            },

            {

              "name": "ق",

              "id": 50

            },

            {

              "name": "الذاريات",

              "id": 51

            },

            {

              "name": "الطور",

              "id": 52

            },

            {

              "name": "النجم",

              "id": 53

            },

            {

              "name": "القمر",

              "id": 54

            },

            {

              "name": "الرحمن",

              "id": 55

            },

            {

              "name": "الواقعة",

              "id": 56

            },

            {

              "name": "الحديد",

              "id": 57

            },

            {

              "name": "المجادلة",

              "id": 58

            },

            {

              "name": "الحشر",

              "id": 59

            },

            {

              "name": "الممتحنه",

              "id": 60

            },

            {

              "name": "الصف",

              "id": 61

            },

            {

              "name": "الجمعه",

              "id": 62

            },

            {

              "name": "المنافقون",

              "id": 63

            },

            {

              "name": "التغابن",

              "id": 64

            },

            {

              "name": "الطلاق",

              "id": 65

            },

            {

              "name": "التحريم",

              "id": 66

            },

            {

              "name": "الملك",

              "id": 67

            },

            {

              "name": "القلم",

              "id": 68

            },

            {

              "name": "الحاقه",

              "id": 69

            },

            {

              "name": "المعارج",

              "id": 70

            },

            {

              "name": "نوح",

              "id": 71

            },

            {

              "name": "الجن",

              "id": 72

            },

            {

              "name": "المزمل",

              "id": 73

            },

            {

              "name": "المدثر",

              "id": 74

            },

            {

              "name": "القيامة",

              "id": 75

            },

            {

              "name": "الانسان",

              "id": 76

            },

            {

              "name": "المرسلات",

              "id": 77

            },

            {

              "name": "النبأ",

              "id": 78

            },

            {

              "name": "النازعات",

              "id": 79

            },

            {

              "name": "عبس",

              "id": 80

            },

            {

              "name": "التكوير",

              "id": 81

            },

            {

              "name": "الانفطار",

              "id": 82

            },

            {

              "name": "المطففين",

              "id": 83

            },

            {

              "name": "الانشقاق",

              "id": 84

            },

            {

              "name": "البروج",

              "id": 85

            },

            {

              "name": "الطارق",

              "id": 86

            },

            {

              "name": "العلق",

              "id": 87

            },

            {

              "name": "الغاشية",

              "id": 88

            },

            {

              "name": "الفجر",

              "id": 89

            },

            {

              "name": "البلد",

              "id": 90

            },

            {

              "name": "الشمس",

              "id": 91

            },

            {

              "name": "الليل",

              "id": 92

            },

            {

              "name": "الضحى",

              "id": 93

            },

            {

              "name": "الشرح",

              "id": 94

            },

            {

              "name": "التين",

              "id": 95

            },

            {

              "name": "العلق",

              "id": 96

            },

            {

              "name": "القدر",

              "id": 97

            },

            {

              "name": "البينه",

              "id": 98

            },

            {

              "name": "الزلزلة",

              "id": 99

            },

            {

              "name": "العاديات",

              "id": 100

            },

            {

              "name": "القارعة",

              "id": 101

            },

            {

              "name": "التكاثر",

              "id": 102

            },

            {

              "name": "العصر",

              "id": 103

            },

            {

              "name": "الهمزة",

              "id": 104

            },

            {

              "name": "الفيل",

              "id": 105

            },

            {

              "name": "قريش",

              "id": 106

            },

            {

              "name": "المعون",

              "id": 107

            },

            {

              "name": "الكوثر",

              "id": 108

            },

            {

              "name": "الكافرون",

              "id": 109

            },

            {

              "name": "النصر",

              "id": 110

            },

            {

              "name": "المسد",

              "id": 111

            },

            {

              "name": "الاخلاص",

              "id": 112

            },

            {

              "name": "الفلق",

              "id": 113

            },

            {

              "name": "الناس",

              "id": 114

            }

          ]



new Vue ({



      el : "#app",	
     

     data() {



       return {



        id : id_text , 

        result : this.surah(id_text) ,

        ind_number : 0,

        f_server : "" ,

        server_name :this.server(id_text), 

        lastScrollTop : 0 , 

        start_audio_num : 0,

        flag : 0,

        flag_play_list : false ,

        flag_back_forward : false



       }



     }



  ,



    methods : {



        click_play_list : function (){



          

           var play_list_button = this.$refs.play_list_button;



           var repeat = this.$refs.repeat;



           var aud = this.$refs.aud;



          if(this.flag_play_list === false){



            this.play_list();



            this.flag_play_list = true;



            aud.loop = false;



            repeat.style.backgroundColor = "#343a40";



            play_list_button.style.backgroundColor = "orange";



          }



          else{



            clearTimeout(this.flag);



            this.flag_play_list = false;



            play_list_button.style.backgroundColor = "#343a40";



          }





        },





        play_list : function(){

 

          var aud = this.$refs.aud;



          var sur_name = this.$refs.sur_name;



          var play_pause_btn = this.$refs.play_pause_btn;



          var play_pause_button = this.$refs.play_pause_button;



          var right = this.$refs.right;



          var contain = this.$refs.contain;

           

          right.style.paddingTop = "50px";

              

          contain.style.height = "170px";



           if(aud.src === ""){

     

            sur_name.innerHTML = this.result[this.start_audio_num].name;



            aud.setAttribute('src' , this.server_name + "/" + this.sur_num(this.result[this.start_audio_num].ind) + ".mp3");



            aud.load();



            aud.play();



            this.ind_number = this.start_audio_num;

            this.f_server = this.server_name;

        

            play_pause_btn.className = "fa fa-pause";

            play_pause_button.className = "btn btn-md btn-danger btn_control";             





          }



          if(aud.currentTime === aud.duration){



            if(this.result[this.start_audio_num].name === this.result[this.result.length - 1].name)

              

            this.start_audio_num = -1;



            this.start_audio_num+=1;



            sur_name.innerHTML = this.result[this.start_audio_num].name;



            aud.setAttribute('src' , this.server_name + "/" + this.sur_num(this.result[this.start_audio_num].ind) + ".mp3");



            aud.load();



            aud.play();



            this.ind_number = this.start_audio_num;

            this.f_server = this.server_name;

        

            play_pause_btn.className = "fa fa-pause";

            play_pause_button.className = "btn btn-md btn-danger btn_control";



          }



          this.flag = setTimeout(this.play_list , 1000);



        },

        handleScroll : function (){



          var st = window.scrollY;



          var top_container = this.$refs.top_container;



          if (st > this.lastScrollTop){

              // downscroll code

            

              top_container.style.position = "fixed";

              top_container.style.backgroundColor = "white";

              top_container.style.top = "57px"; 

              top_container.style.width = "100%";



          } else{



              // upscroll code

             

              top_container.style.position = "static";

              top_container.style.backgroundColor = "white";

              top_container.style.width = "100%";









          }

      

        }



      ,



        change : function (id){



            var array = main_array.reciters;



            var reciters_array = [];

                        

            for(var i = 0 ;i < array.length ; i++){



                if(array[i].id === id){



                    reciters_array.push(array[i]);



                }





            }  

            

            console.log(reciters_array);



            return reciters_array;





        } ,



        surah : function(id){



            var surah_names = [];



            var surahs_new = [];



            var array = main_array.reciters;



            for(var i = 0 ;i < array.length ; i++){



                if(parseInt(array[i].id) === parseInt(id)){



                  var suras = array[i].suras;



                }



            }



            surahs_new = suras.split(",");



            surahs.map(function(elem){



                for(var x = 0 ; x < surahs_new.length ; x++){



                    if(elem.id === parseInt(surahs_new[x])){



                      surah_names.push({



                        ind : elem.id ,

                        name  : elem.name , 

                        rec_id : id



                      });



                    }

 

                }



            });



            return surah_names;





            },



            

            search : function(id){    

              

            var surah_names = [];



            var surahs_new = [];



            var new_surah_names = [];



            var search = this.$refs.search;



            var suras;



            var array = main_array.reciters;



            for(var i = 0 ;i < array.length ; i++){



                if(array[i].id === id){



                  suras = array[i].suras;



                }       



            }



            console.log(suras);



            surahs_new = suras.split(",");



            console.log(surahs_new);



            surahs.map(function(elem){



                for(var x = 0 ; x < surahs_new.length ; x++){



                    if(elem.id === parseInt(surahs_new[x])){



                      surah_names.push({



                        ind : elem.id ,

                        name  : elem.name



                      });



                    }

 

                }



              



            });



            for(var x = 0;x < surah_names.length ; x++){

  

              if(surah_names[x].name.toLowerCase().includes(search.value.toLowerCase())){



                new_surah_names.push(surah_names[x]);



              }





            }



              this.result = new_surah_names;





            },



            server : function (id){



              var array = main_array.reciters;



              // var server_name;



              for(var x = 0 ; x < array.length ; x++){



                if(parseInt(array[x].id) === parseInt(id)){



                  server_name = array[x].Server;



                }





              }

              

              return server_name;





            },



            sur_num : function (sur_id){



              if(sur_id < 10){



                var d_sur_id =  "00" +  sur_id;



                return d_sur_id;



              }



              else if(sur_id >= 10 && sur_id < 100){



                var s_sur_id =  "0" +  sur_id;



                return s_sur_id; 





              }



              else{



                return sur_id;



              }



            },

            select : function(server , ind , name , ind_num){



              var aud = this.$refs.aud;

              var sur_name = this.$refs.sur_name;

              var right = this.$refs.right;

              var contain = this.$refs.contain;

              var play_pause_btn = this.$refs.play_pause_btn;

              var play_pause_button = this.$refs.play_pause_button;





              sur_name.innerHTML = name;



              right.style.paddingTop = "50px";

              

              contain.style.height = "170px";



              aud.setAttribute('src' , server + "/" + this.sur_num(ind) + ".mp3");



              aud.load();



              aud.play();



              play_pause_btn.className = "fa fa-pause";

              play_pause_button.className = "btn btn-md btn-danger btn_control";







              this.ind_number = ind_num;

              this.start_audio_num = ind_num;

              this.f_server = server;





            },

             repeat : function (){



              var aud = this.$refs.aud;



              var repeat = this.$refs.repeat;



              var play_list_button = this.$refs.play_list_button;



              if(aud.loop === false){



                aud.loop = true;



                repeat.style.backgroundColor = "orange";     



                if(this.flag){



                  clearTimeout(this.flag);



                  play_list_button.style.backgroundColor = "#343a40";



                  this.flag_play_list = false;



                }   

                

                



              }



              else{



                aud.loop = false;



                repeat.style.backgroundColor = "#343a40";





              }



             },

              play_pause_audio : function (){



                var aud = this.$refs.aud;

                var sur_name = this.$refs.sur_name;

                var right = this.$refs.right;

                var contain = this.$refs.contain;

                var play_pause_btn = this.$refs.play_pause_btn;

                var play_pause_button = this.$refs.play_pause_button;
		
		var table_container = this.$refs.table_container;





                right.style.paddingTop = "50px";

              

                contain.style.height = "170px"

		
		table_container.style.paddingTop = "190px";





                if(aud.src === ""){



                  sur_name.innerHTML = this.result[0].name;

                

                  aud.setAttribute('src' , this.server_name + "/" + this.sur_num(this.result[0].ind) + ".mp3");



                  aud.load();



                  this.ind_number = 0;

                  this.f_server = this.server_name;



                }



                if(play_pause_btn.className === "fa fa-play"){



                    aud.play();

                    this.flag_back_forward = true;

                    play_pause_btn.className = "fa fa-pause";

                    play_pause_button.className = "btn btn-md btn-danger btn_control";



                }

                else{



                    aud.pause();

                    this.flag_back_forward = false;

                    play_pause_btn.className = "fa fa-play";

                    play_pause_button.className = "btn btn-md btn-success btn_control";





                  }



              },

              

              loaded :function(){



                 var aud = this.$refs.aud;  

                var duration  = this.$refs.duration;



                var spare_h;

                var spare_m;

                var spare_s;

                

                if((aud.duration / 3600) < 10)



                  spare_h = "0";



                else

                  

                  spare_h = "";



                if(((aud.duration % 3600) / 60) < 10)



                  spare_m = "0";



                else

                  

                  spare_m = "";

                 

                if(((aud.duration % 60)) < 10)



                  spare_s = "0";



                else

                  

                  spare_s = "";  



                duration.innerHTML = spare_h + ((aud.duration / 3600).toString())[0] + " : " + spare_m + Math.floor(((aud.duration % 3600) / 60)) +  " : "  + spare_s + Math.floor((aud.duration % 60));



              }

              ,

             seek : function (event){



                var seek_slider = this.$refs.seek_slider;



                var aud = this.$refs.aud;



                var percent = event.offsetX / seek_slider.offsetWidth;



                aud.currentTime = percent * aud.duration;

                

                event.target.value = Math.floor(percent / 100);



             },

            progess : function (){



              

              var seek_slider = this.$refs.seek_slider;



              var aud = this.$refs.aud;



              var percentage = Math.floor((100 / aud.duration) * aud.currentTime);



              seek_slider.value = percentage;



              this.showCurrentTime();



            }, 

            forward : function (){



              var right = this.$refs.right;

		var table_container = this.$refs.table_container; 

              var contain = this.$refs.contain;

              var play_pause_btn = this.$refs.play_pause_btn;

              var play_pause_button = this.$refs.play_pause_button;

              var aud = this.$refs.aud;

              var sur_name = this.$refs.sur_name;

              var showCurrent = this.$refs.showCurrent;

              var seek_slider = this.$refs.seek_slider;

              var f_res;



              showCurrent.innerHTML = "00 : 00 : 00";



              if(this.result[this.ind_number] === this.result[this.result.length - 1] || this.f_server === ""){ 



                this.ind_number = -1;



              }



              if((this.f_server === "") || (this.flag_back_forward === false)){



                this.f_server = this.server_name;



                right.style.paddingTop = "50px";

              

                contain.style.height = "170px";

		
		table_container.style.paddingTop = "170px";


                play_pause_btn.className = "fa fa-play";

                play_pause_button.className = "btn btn-md btn-success btn_control";



                  this.ind_number += 1;



              this.start_audio_num = this.ind_number;



              if(this.result){



                for(var s = 0 ; s < this.result.length ; s++){



                  if(this.result[this.ind_number]){



                    f_res = this.result[this.ind_number];



                  }





                }



              }



              sur_name.innerHTML = f_res.name;



              aud.setAttribute('src' , this.f_server + "/" + this.sur_num(f_res.ind) + ".mp3");



              aud.load();



              seek_slider.value = 0;



              }  

              else{



              this.ind_number += 1;



              this.start_audio_num = this.ind_number;



              if(this.result){



                for(var x = 0 ; x < this.result.length ; x++){



                  if(this.result[this.ind_number]){



                    f_res = this.result[this.ind_number];



                  }




                }



              }



              sur_name.innerHTML = f_res.name;



              aud.setAttribute('src' , this.f_server + "/" + this.sur_num(f_res.ind) + ".mp3");



              play_pause_btn.className = "fa fa-pause";

              play_pause_button.className = "btn btn-md btn-danger btn_control";



              aud.load();



              aud.play();



              }





            },

            backward : function (){



              var right = this.$refs.right;

              var contain = this.$refs.contain;

              var play_pause_btn = this.$refs.play_pause_btn;

              var play_pause_button = this.$refs.play_pause_button;

              var aud = this.$refs.aud;

              var sur_name = this.$refs.sur_name;

              var seek_slider = this.$refs.seek_slider;

              var showCurrent = this.$refs.showCurrent;

              var f_res;



              showCurrent.innerHTML = "00 : 00 : 00";



              if(this.result[this.ind_number] === this.result[0] || this.f_server === ""){



                this.ind_number = this.result.length;



              }

      

              if(this.f_server === "" || this.flag_back_forward === false){



                this.f_server = this.server_name;



                right.style.paddingTop = "50px";

              

                contain.style.height = "170px";



                play_pause_btn.className = "fa fa-play";

                play_pause_button.className = "btn btn-md btn-success btn_control";



              this.ind_number -= 1;



              this.start_audio_num = this.ind_number;



              if(this.result){



                for(var s = 0 ; s < this.result.length ; s++){



                  if(this.result[this.ind_number]){



                    f_res = this.result[this.ind_number];



                  }





                }



              }



              sur_name.innerHTML = f_res.name;



              aud.setAttribute('src' , this.f_server + "/" + this.sur_num(f_res.ind) + ".mp3");



              aud.load();



              seek_slider.value = 0;



              }

              else{  



              this.flag_back_forward = true;  



              this.ind_number -= 1;



              this.start_audio_num = this.ind_number;



              if(this.result){



                for(var x = 0 ; x < this.result.length ; x++){



                  if(this.result[this.ind_number]){



                    f_res = this.result[this.ind_number];



                  }





                }



              }



              sur_name.innerHTML = f_res.name;



              aud.setAttribute('src' , this.f_server + "/" + this.sur_num(f_res.ind) + ".mp3");



              play_pause_btn.className = "fa fa-pause";

              play_pause_button.className = "btn btn-md btn-danger btn_control";



              aud.load();



              aud.play();



              }





            },



            displayCurrentTime : function (seconds){



                var spare_s;



                var spare_m;



                var spare_h;



                var hours = Math.floor(seconds / 3600);          



                var minutes = Math.floor((seconds / 60) - hours * 60);



                if(Math.floor(seconds) < 3600)



                    seconds = Math.floor(seconds - (minutes * 60)); 



                else



                    seconds = ((Math.floor(seconds - (minutes * 60))) - (hours * 3600));





                if(seconds < 10)



                    spare_s = "0";



                else

                    spare_s = ""; 



                if(minutes < 10)



                    spare_m  = "0";



                else



                    spare_m = "";



                if(hours < 10)



                    spare_h  = "0";



                else



                    spare_h = "";     



                return spare_h + hours + " : " + spare_m  + minutes + " : " + spare_s + seconds;



            } ,



            showCurrentTime : function (){





              var showCurrent = this.$refs.showCurrent;



              var aud = this.$refs.aud;



              showCurrent.innerHTML = this.displayCurrentTime(aud.currentTime);





            } ,

            end : function (){



              var play_pause_btn = this.$refs.play_pause_btn;

              var play_pause_button = this.$refs.play_pause_button;

              var aud = this.$refs.aud;



        

              aud.pause();

              play_pause_btn.className = "fa fa-play";

              play_pause_button.className = "btn btn-md btn-success btn_control";





            }

 

            } 

    });