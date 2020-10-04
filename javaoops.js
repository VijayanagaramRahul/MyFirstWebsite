function scrollWin()
{
  window.scrollTo(0,0);
}


function Encapsulation() { /* it is the function of JAVA BUZZWORDS */
    document.getElementById('disappearallbuttons').innerHTML =`
    <div class="container" id="disappearEncapsulation" > <h3 align="center"> Encapsulation </h3>
 
   </div>
<button  type ="button"  style="width:25%;" align="center" onclick="Abstraction(); scrollWin()" class="btn btn-primary">Next</button>

</div> `;
}

/*  function of JAVA BUZZWORDS completed here */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */



/* it is the function of Abstraction starts here */
function Abstraction(){
    document.getElementById('disappearEncapsulation').innerHTML =`<div id="disappearjavaAbstraction">


    <button  type ="button"  style="width:25%;" align="center" onclick="Polymorphisim(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function  Abstraction(){
    document.getElementById('disappearallbuttons','disappearEncapsulation').innerHTML =`<div id="disappearjavaAbstraction">
    <h3 align="center"> Abstraction</h3>

    <button  type ="button"  style="width:25%;" align="center" onclick="Polymorphisim(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of Abstraction completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */



























/* it is the function of Polymorphisim starts here */
function Polymorphisim(){
    document.getElementById('disappearjavaAbstraction').innerHTML =`<div id="disappearjavaPolymorphisim">


    <button  type ="button"  style="width:25%;" align="center" onclick="Inheritence(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function  Polymorphisim(){
    document.getElementById('disappearallbuttons','disappearjavaAbstraction').innerHTML =`<div id="disappearjavaPolymorphisim">
    <h3 align="center"> Polymorphisim</h3>

    <button  type ="button"  style="width:25%;" align="center" onclick="Inheritence(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of Polymorphisim completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */


















/* it is the function of Inheritence starts here */
function Inheritence(){
    document.getElementById('disappearjavaPolymorphisim').innerHTML =`<div id="disappearjavaInheritence">


    <button  type ="button"  style="width:25%;" align="center" onclick="alert("OOPS FINISHED"); scrollWin();" class="btn btn-primary">Finished </button>

</div>`;

}

function  Inheritence(){
    document.getElementById('disappearallbuttons','disappearjavaPolymorphisim').innerHTML =`<div id="disappearjavaInheritence">
    <h3 align="centre">Inheritence </h3><strong>INHERITANCE:</strong><br>
<p align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	Inheritance in java is a mechanism in which one object acquires all the properties and behaviors of a parent object. It is an important part of Oops.
 The main function behind the inheritance in java is that we can create new class from existing class. when we inherit from existing class we can also
 add new methods and fields in our current. Inheritance represents the IS-A-relationship which is also known as a parent-child relationship.</p>
<h3 align="left">
<strong >WHY WE NEED INHERITANCE:</strong><br></h3><p align="left">
Method overriding (so at run time, polymorphism can be achieved)     
code re-usability</p>
<h3 align="left">
<strong>TERMS USED IN INHERITANCE:</strong></h3>
<h4  align="left">
<strong>CLASS:</strong></h4> <p align="left">A class is a group of objects which have common properties. It is a template or blueprint from which objects are created.</p>
<h4 align="left">

<strong align="left">SUBCLASS: </strong></h4> <p align="left">Subclass is a class which inherits the other class. It is also called a derived class, extended class, or child class.subclass is also called as CHILDCLASS</p>


<h4 align="left">
<strong>SUPER CLASS:</strong></h4>
<p align="left">Super class is the class from where a subclass inherits the features. It is also called a base class or a parent class.</p>
<h4 align="left">
<strong>RE-USABILITY:</strong></h4>
<p align="left">As the name specifies, re usability is a mechanism which facilitates you to reuse the fields and methods of the
existing class when you create a new class. You can use the same fields and methods already defined in the previous class.
</p>
<pre align="left">SYNTAX OF INHERITANCE:
class Subclass_name extends Superclass_name 
{
   methods ;
    files ;
}</pre>
<strong>
The keyword "extends" indicates that you are making a new class that derives from an existing class. It means  to   increase the functionality.   </strong>

<strong>EXAMPLE:</strong>

<h3><strong>TYPES OF INHERITANCE:</strong></h3>
 
<p align="left" On the basis of class, there can be three types of inheritance in java. They are:</p>

<details>
<summary class="btn btn-danger"> Single inheritance,</summary>

<strong>1.SINGLE INHERITANCE:</strong>
   <p align="left"> Single inheritance enables a derived class(Sub class) to inherit properties and behaviour from a single base class(Super class).The below diagram represents the single heritance in java where classB extends
   only one class i.e., classA. Here classB will be the Subclass and classA wilol be one and only Super class.</p>

</details>


<details style="margin-top:4px" ><summary class="btn btn-danger"> Multilevel inheritance,</summary>
 
<h3 align="left">
2.MULTILEVEL INHERITANCE:</h3>
 <p align="left">   In mutlilevel inheritance sub class will be inheriting a parent class and as well as the subclass act as the parent class to other class.
The below diagram of multilevel inheritance we can see classB inherits the properties of classA and again classB act as a parent for classC
i.e., classA parent for classB and classB parent for classC.
</p>
</details>



<details>
<summary style="margin-top:4px" class="btn btn-danger">
 Hierarchical inheritance.</summary>
<h3 align="left">
3.HIERARCHICAL INHERITANCE:</h3>

   <p>In this inheritance multiple classes inherits from a single class i.e there is one super class(base class) and multiple sub classes(derived class).
As we can see from the below diagram when a same class is having more than one sub class (or) more than one 
sub class has the same parent is called as Hierarchical Inheritance.</p>
</details>

<h3>On the base of interface, it is divided in to two types. They are:</h3>
<details>
<summary style="margin-top:4px" align="left" class="btn btn-success">
MULTIPLE INHERITANCE:</summary>
<h3>4.MULTIPLE INHERITANCE:</h3>
<p align="left">

  Multiple Inheritance in Java is nothing but one class extending more than one class. Java does not have this
  capability. As the designers considered that multiple inheritance will to be too complex to manage, but
  indirectly you can achieve Multiple Inheritance in Java using Interfaces.As in Java we can implement more than one interface we achieve the same effect using interfaces.
Multiple Inheritance has to be like the below diagram, Class A  and Class B both inherited by Class C.
Since it is not supported we will changing the Class A to Interface A and Class B to Interface B

</p>
</details>

<details>
<summary style="margin-top:4px" align="left" class="btn btn-success">.HYBRID INHERITANCE:</summary>
<h3>HYBRID INHERITANCE:</h3>
  <p align="left">Hybrid Inheritance is a combination of both Single Inheritance and Multiple Inheritance.  Since in Java Multiple Inheritance is not
supported directly we can achieve Hybrid inheritance also through Interfaces only. The below diagram ClassA is the Parent for both ClassB and 
ClassC which is Single Inheritance and again ClassB and ClassC again act as Parent for ClassC(Multiple Inheritance which is not supported by Java). </p>
</details>


    <button  type ="button"  style="width:25%;" align="center" onclick="alert('OOPS FINISHED') scrollWin();" class="btn btn-primary">Finished </button>


</div>`;
}

/* it is the function of Polymorphisim completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */

