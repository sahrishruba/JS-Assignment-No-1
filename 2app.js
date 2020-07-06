// //ch 20 to 25
// function taskno(tasknumber){


//     document.write( "<h1>" + tasknumber+"</h1>" + "<br>" + "<br>" );

// }

// function linebreak(){
//     document.write("<br>" + "<br>");
// }


// //task number 1

// taskno(" Solution no 1");


//  var firstName=prompt("Enter your first name ");
//  var secondName=prompt("Enter your second name ");


//  var fullName= firstName+ " "+ secondName;

 

//   document.write( "Hello " + " " +  fullName);


//   linebreak();


//   //task number 2



//   taskno("Solution no 2");

//   var favPhone=prompt("Enter your favourite mobile phone model: ");



//   document.write("My fav phone is :" + " " + favPhone + "<br>");


//   document.write("length of string is :" + " "+ favPhone.length);


//   //task number 3


//   taskno("Solution no 3");


//   var name="Pakistani"

//   document.write("String: " + " " + name + "<br>");

//   var indx=name.indexOf("n");

//   document.write("Index of 'n' :" + " "+ indx);


//   //task number 4



//   taskno("Solution no 4");

//   var word="Hello World";

//   document.write("String:" + " "+ word + "<br>");

//   var lastindx=word.lastIndexOf("l");

//   document.write("last index of 'l':" + " "+ lastindx);


//   //task number 5


//   taskno("Solution no 5");


//   var word="Pakistani";
//    var charAt3= word.charAt(3);
//    document.write("String" + " " + word + "<br>");

//    document.write("Character at index 3:" +  " " +  charAt3  );

//    //task no  6

//    taskno("Solution no 6");

//    var firstName=prompt("Enter your first name ");
//  var secondName=prompt("Enter your second name ");


//  var fullName= firstName.concat(secondName);

 

//   document.write( "Hello " + " " +  fullName);


// //task no 7


// taskno("Solution no 7");

// var city="Hyderabad";
// var replc=city.replace("Hyder","Islam");
// document.write("city:" + " " + city + "<br>");
// document.write("After Replacement:" + " "+ replc);


// //task no 8

// taskno("Solution no 8");

// var message="Ali and Sami are best friends. They play cricket and football together.";

// var rplc=message.replace(/and/g,"&&");

// document.write("Before replacement:" + " "+ message+ "<br>");

// document.write("After replacement:" + " " + rplc );


// //task no 9 

// taskno("Solution no 9")

// var num="472";
// var afterConv=parseInt(num);

// document.write("Value:" +" " + num + "<br>");
// document.write("Type : String" + "<br>");

// document.write("value:" + " " + afterConv + "<br>");

// document.write("Type : Number");

// //tasknumber 10


// taskno("Solution no 10");

// var userInput=prompt("Enter your input");

// document.write("User Input:" + " " + userInput + "<br>");

// document.write( "Upper case:" + " " + userInput.toUpperCase());

// //task number 11


// taskno("Solution no 11");

// var userInput=prompt("Enter your input to convert it into title case");

// var firstWord=userInput.slice(0,1);
// var lastWord=userInput.slice(1);
// var firstWord=firstWord.toUpperCase();
// var titleCase=firstWord+lastWord;
// document.write("User Input:" + " " + userInput + "<br>");
// document.write( "Title case:" + " " + titleCase);


// //task number 12 

// taskno("Solution no 12");

// var num=35.36;
// document.write("Number:" + " " + num + "<br>");

// var convr=num.toString();
// convr=convr.replace(".",'');

// document.write("Result:" + " " + convr);



// //task number 13


// taskno("Solution no 13");

// var userName=prompt("Enter your user name ");
// var i;

// for(i=0;i<userName.length;i++)
// {
//     if(  userName.slice(i,i+1)==="!" ||  userName.slice(i,i+1)==="," || userName.slice(i,i+1)==="." || userName.slice(i,i+1)==="@" )
//     {
//         alert("enter valid user name ");
        
//         break;
        
//     }

    
    
  
// }

// document.write("check by entering symbol in username prompts to see working or not")


// //task number 14 

// taskno("Solution no 14")

// var A=["cake","apple pie","cookie","chips","patties"]

// var userInput=prompt("Enter your item to search");

// userInput=userInput.toLowerCase();

// var found=false;

// for(i=0;i<A.length;i++)
// {
//      if(A[i]===userInput)
//      {
//           found=true;
//           document.write(userInput + " " + "is available at index " + " " + i + "in our bakery " )
//           break;
//      }
     
// }

// if(found!==true)
// {
//      document.write("we are sorry " + " "+ userInput + " " + " is not available in our bakery " );
// }


// //task number 15


// taskno("Solution no 15")



// var pass=prompt("enter your password");
// var letterNumber= /^[0-9a-zA-Z]+$/;

// document.write("Entered Password:" + " " + pass + " <br>");
// if(!(pass.match(letterNumber)))
// {
//      document.write("Password should be alphanumeric" + "<br>")

//      val=false
// }
//  else if(pass.length>6)
// {
//     document.write("Password should not be more than 6 digits" + " <br>")
//       var val=false
// }
// else if(pass.charAt(0)>=48 ||pass.charAt(0)<=57)
// {
//       document.write("Password should not be started with a number" + "<br>");
//       val=false
// }
// else{


//      document.write("Password is valid")



// }




// if(val===false)
// {
//       document.write("please enter a valid password");
// }



// //task number 16


// taskno("Solution no 16");

// var university="University of Karachi";

// var Res=university.split('');



// for(i=0;i<Res.length;i++)
// {
//      document.write(Res[i]+ "<br>");
// }

// //task number 17


// taskno("Solution no 17");


// var userInput=prompt("Enter your string");
// var res;

// for(i=0;i<userInput.length;i++)
// {
//    res=userInput.slice(i,i+1);
// }

// document.write("User input:" + " " + userInput + "<br>");

// document.write("last char of input:" + " " + res);


// //task number 18


// taskno("Solution no 18 ");

// var text="The quick brown fox jumps over the lazy dog ";
// document.write("Text" + " "+ text + "<br>");

// text=text.toLowerCase();

// var counter=0;

// for(i=0;i<text.length;i++)
// {
//      if(text.slice(i,i+3)==="the")
//      {
//           counter++;
//      }
// }

// document.write("There are" + " " + counter + " " + "occurenc(s) if the word 'the '")

// //ch 26 to 30

// //task no 1
// taskno("Solution no 1");

// var integer=+prompt("Enter your number");
// document.write("Number:" + " "+ integer+"<br>");
// document.write("Round off value:"+" " + Math.round(integer) + "<br>");
// document.write("Floor value:"+" " + Math.floor(integer) + "<br>");
// document.write("Ceil value:"+" " + Math.ceil(integer) + "<br>");

// //task no 2 

// taskno("Solution no 2");



// var floating=parseFloat(prompt("Enter negative value of floating point"));
// document.write("Number:" + " "+ floating+"<br>");
// document.write("Round off value:"+" " + Math.round(floating) + "<br>");
// document.write("Floor value:"+" " + Math.floor(floating) + "<br>");
// document.write("Ceil value:"+" " + Math.ceil(floating) + "<br>");

// //task no 3

// taskno("Solution no 3");

// var num=-4;
// document.write("The absolute value of " + " " + num+ " " + "is " + Math.abs(num) + "<br>");
// var num=5;
// document.write("The absolute value of " + " " + num+ " " + "is " + Math.abs(num) + "<br>");


// //tash no 4

// taskno("Solution no 4");

// var dice= Math.floor( Math.random() * 6 ) +1;

// for(var i=1;i<=2;i++);
// {
//        document.write("random dice value:" + " " +  dice + " <br>"); 
// }


// //task no 5

// taskno("Solution no 5")

// var toss=Math.floor(Math.random()*2) +1;



// if(toss===2)
// {
//        document.write(toss + "<br>");
//        document.write("random coin value : Heads");
// } else
// {
//       document.write(toss + "<br>");
//       document.write("random coin value : tails");
// }

// //task no 6

// taskno("Solution no 6");


// var rndm=Math.floor(Math.random()*100) +1;
// document.write("Random number between 1 and 100:" + " "+ rndm);


// //task no 7

// taskno("Solution no 7");

// var weight=prompt("Enter weight in kilo grams");
// weight=weight.toLowerCase();
// var unitFound;

// for(var i=0;i<weight.length;i++)
// {
//        if(weight.slice(i,i+3)==="kgs"|| weight.slice(i,i+9)==="kilograms")
//        {
              
//               unitFound=true;
//               break;
              
//        }
       
// }
// if(unitFound!==true)
// {
//        alert("plz enter with unit kgs and kilograms");
// }

// if(weight.slice(i,i+3)==="kgs")
// {
// document.write("The weight of user it  :" + parseFloat(weight) + "kgs" + "<br>");
// }
// else if(weight.slice(i,i+9)==="kilograms")
// {
//        document.write("The weight of user is :" + parseFloat(weight)+ "kilograms" + "<br>");
// }


// //task no 8

// taskno("Solution no 8");

// var guess=Math.floor(Math.random()*6)+1;

// guess=guess.toString();

// var userInput=prompt("Enter your input between 1 to 10 to guess");

// if(guess===userInput)
// {
      
//        alert("you guess the right");
       
// }

// else{
//        alert("try again");
// }



// //ch 31 to 34

// //task number 1

// taskno("Solution no 1");

// var date= new Date();
// document.write(date);

// //task number 2

// taskno("Solution no 2");

// var months=["january","februrary","march","april","may","june","july","august","september","october","november","december"];

// var currentMonth=date.getMonth();

// alert("Current Month:" + " "+ months[currentMonth])

// //task number 3


// taskno("Solution no 3");


//  var currentDay=date.toString();
 
// alert("Today is:" + " " + currentDay.slice(0,3));

// //task number 4

// taskno("Solution no 4");

// var funDay=date.getDay();


// if(funDay===0||funDay===6)
// {
//      document.write("Its funday ");
  
// }
// else{
//      document.write("It is not funday ");
// }

// //task number 5
// taskno("Solution no 5");

// var dateCheck=date.getDate();
// if(dateCheck<=15)
// {
//      document.write("First fifteen days of the month");
// }

// else{
//      document.write("last days of the month ");
// }

// //task number 6

// taskno("Solution no 6");

// document.write("Current date:"+ " " + date + "<br>");

// var DateSince1970=date.getTime();
// document.write("Elapsed milliseconds since January 1,1970:"+ " " + DateSince1970 + "<br>");
// document.write("Elapsed minutes since January 1,1970:"+ " "+ (DateSince1970/(1000*60)));


// //task number 7


// taskno("Solution no 7");

// var noon=date.getHours();

// if(noon<12)
// {
//      alert("It is A.M")

// }
// else if( noon>=12)
// {
//      alert("It is P.M");
// }

// //task numebr 8

// taskno("Solution no 8")

// var lastDay= new Date("December 31,2020");

// document.write("Later Date:" + " "+ lastDay);


// //task number 9

// taskno("Solution no 9");

// var today=new Date();
// var pastday=new Date("April 25,2020");
// var today1=today.getTime();
// var pastday1=pastday.getTime();
// var diff=today1-pastday1;
//  diff=diff/(1000*60*60*24);
//  diff=Math.floor(diff);
// document.write(diff+ " " + "days have passed since 1st ramzan ,2020");


// //task number 10

// taskno("Solution no 10");

// var MiliSince2015=new Date("January 1,2015");
// var Since2015=MiliSince2015.getTime();

// var refDate=new Date("December 5,2015 22:50:16");
// var ref=refDate.getTime();

// var diff=ref-Since2015;
// var diff=diff/(1000*60);

// document.write("On reference date" + " " + refDate + "<br>");
// document.write(Math.floor(diff)+ " " + "seconds had passed since beginning  of 2015 ");


// //task number 11

// taskno("Solution no 11");

// var d=new Date();
// document.write("Current date:" + " "+ d + "<br>");
// var dateExt=d.getHours();
// d.setHours(dateExt-1);
// document.write("1 hour ago it was" + " "+ d);


// //task number 12

// taskno("Solution no 12");

// var d=new Date();
// var currentYear=d.getFullYear();

// document.write("Current date:" + " "+ d + "<br>");

// d.setFullYear(currentYear-100);
// document.write("100 years back , it was" + " "+ d);


// //task number 13

// taskno("Solution no 13")

// var userAge=+prompt("Enter your age");
// document.write("Your age is : "+ " "+ userAge +"<br>");

// var d= new Date();
// var currenYear=d.getFullYear();
// userAge=currentYear-userAge;

// document.write("your birth year is "+" "+ userAge);


// //task number 14

// taskno("Solution no 14");

// var customerName,units,chargePerunit=16,netAmount,latePaymentSurcharge=350,grossAmount;

// var months=["january","februrary","march","april","may","june","july","august","september","october","november","december"];




// var d=new Date();
// var currentMonth=d.getMonth();
// currentMonth=months[currentMonth];


// document.write("<h1>" +"K-Electric bill" +"</h1>" + "<br>");

// customerName=prompt("Enter your name");
// units=+prompt("Enter units");
// netAmount=units*chargePerunit;
// grossAmount=netAmount+latePaymentSurcharge;

// document.write("Customer Name:" + " " + "<b>" + customerName  + "</b>" + "<br>");
// document.write("Month:" + " " + "<b>" + currentMonth + "</b>" + "<br>");
// document.write("Number of units:" + " " +"<b>"+ units + "</b>" +"<br>");
// document.write("Charges per unit:" + " " + "<b>" + chargePerunit +"</b>" +"<br>");
// document.write("<br>" + "<br>" + "<br>");
// document.write("Net Amount Payable (within Due Date):" + " " + "<b>" + netAmount+ "</b>" + "<br>");
// document.write("Late payment surcharge:" + " " +"<b>" + latePaymentSurcharge+ "</b>" + "<br>");
// document.write("Gross amount payable (after Due Date):" + "<b>" + grossAmount+"</b>" + "<br>");

// //ch 35 to 38


// //task number 1

// taskno("Solution no 1");

// function currentDate()
// {
//      var d=new Date();
//      document.write(d);
// }

// currentDate();


// //task number 2

// taskno("Solution no 2")

// function greetUser(firstname,lastname)
// {
//      document.write("Hello" + " " + firstname + " " + lastname + ""); 
// }

// greetUser("yasir","khan");


// //task number 3

// taskno("Solution no 3");

// function add()
// {
//       var num1=+prompt("Enter number 1");
//      var num2=+prompt("Enter number 2");

//      return num1+num2;

// }

//  document.write( "Sum  of two number is " + " " + add());



//  //task number 4

//  taskno("Solution no 4")

//  function calc(num1,operator,num2){

//     var total;
            
//     if(operator==="+")
//     {
//          total=num1+num2;
//          return total;
//     }
//     else if( operator==="-")
//     {

//     total=num1-num2;
//          return total;

//  } 

//     else if(operator==="*")
//  {
//     total=num1*num2;
//     return total;

//  }
//  else if(operator==="/")
//  {
//     total=num1/num2;
//     return total;
//  }

// }


// var result=calc(12,"+",2);

// document.write("Result is " + " "+ result);


// //task number 5

// taskno("Solution no 5");

// function itsSquare(arg)
// {
//      return arg*arg;
// }


//  document.write( "Sqaure of num is" + " " +itsSquare(8));


//  //task number 6

//  taskno("Solution no 6");

//  function factorial(num){
//      var answer = 1;
//     if (num == 0 || num == 1){
//       return answer;
//     }else{
//       for(var i = num; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
  

//   var num=3;
//   var factAns=document.write("Factorial of " + num + " " + "is " + factorial(num));



//   //task no 7

//   taskno("Solution no 7");

//   function startEnd(start,end)
//   {
//       var i;

//       for(i=start;i<=end;i++)
//       {
//           document.write(i + " " + "<br>");
//       }
//   }

//   startEnd(1,15);


//   //task number 8

//   taskno("Solution no 8");



// function hypo(base,perpendicular)
// {
//      function square (sq)
//      {
//          return sq*sq;
//      }

//      return Math.sqrt(square(base) + square(perpendicular))
// }

// var a=hypo(2,8);

// document.write("hypotenus is " + " " + a);


// //task no 9 

// taskno("Solution no 9")

// function area(width,height)
// {
//      return width*height;
// }

//  document.write(" Argument as value : " + " " + area(2,3) + "<br>" );

//  var width=2;
//  var height=2;

//   var total =document.write("Argument as variable : " + " "+ area(width,height));


// //   task number 10

//   taskno("Solution no 10 ");


// // var word="civic";
// var check="";



// function palindrome(word)
// {
     
//      for(var i=word.length-1;i>=0;i--)
//      {
//               check+=word[i];
//      }
//      if(word===check)
//      {
//         document.write("Word is palindrome");
//      }

//      else{
//           document.write("word is not palindrome")
          
//      }
// }

// palindrome("civic");


// // task number 11

// taskno("Solution no 11");




// function capital(word) 
// {
//     word = word.split(" ");

//     for (var i = 0, x = word.length; i < x; i++) {
//         word[i] = word[i][0].toUpperCase() + word[i].substr(1);
//     }

//     return word.join(" ");
// }


// document.write( capital("my name is muhammad yasir khan"));


// //task no 12

// taskno("Solution no 12");


// function findlongest(word)
// {
//   var array1 = word.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(findlongest("Web development tutorial"));


// //task no 13

// taskno("Solution no 13");





// function charcount(str, letter) 
// {
//  var Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       Count += 1;
//       }
//   }
//   return Count;
// }

// document.write(charcount("jsresources.com","o"));


// //task  number 14

// taskno("Solution no 14");


// function calcCircumference(radius)
// {
//      return 2*(3.142)*radius
// }

// var radius =3;

// var answer=calcCircumference(radius)
// document.write("The circumference is :" + " " + answer + "<br>");


// function calcArea(radius)
// {
//      return 3.142*(radius*radius);
// }

// answer=calcArea(radius);
// document.write("The ares is " + " "+ answer);
