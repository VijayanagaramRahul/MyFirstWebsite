function scrollWin()
{
  window.scrollTo(0,0);
}


function javabuzzwords() { /* it is the function of JAVA BUZZWORDS */
    document.getElementById('disappearallbuttons').innerHTML =`
    <div class="container" id="disappearjavabuzzwords" > <h3 align="center"> JAVA BUZZWORDS </h3>
<h3> Java   Buzzwords</h3>
<p align="left">No   discussion    of  Java’s  history  is  complete  without  a  look   at    the  Java    buzzwords.    Although the  fundamental    forces  that    necessitated   the  invention   of  Java    are    portability    and  security,    other  factors    also  played  an   important   role  in   molding   the    final    form    of    the    language.    The   key    considerations   were  summed  up   by   the  Java   team   in   the   following    list    of   buzzwords:</p>
<p align="left">Java  was    designed   to   be    easy   for   the   professional   programmer    to  learn  and   use   effectively  .  Assuming   that   you    have   some    programming    experience  ,   you   will   not   find   Java    hard  to  master.   If   you  already   understand    the   basic    concepts    of   object-oriented    programming learning   Java    will    be  even    easier  . Best    of    all  ,    if    you    are    an    experienced   C  ++    programmer,    moving  to    Java    will    require   very    little    effort  . 
Because    Java    inherits    the    C/C  ++    syntax    and    many    of   the   object-oriented    features    of C  ++  , most  programmers   have    little    trouble   learning   Java.
 </p>
 
<section align="left">
 <details >
<summary class="btn btn-danger">security</summary>

<p align="left">
As  you are likely aware , every time you download a “normal” program,you are taking  a risk  ,
because the code you are downloading  might contain  a  virus,  Trojan   horse, or other harmful code  . At the
core of the problem is  the fact that malicious code can cause its  damage because it has gained 
unauthorized access to system resources .For example , a virus program might gather private information,such as credit card numbers,bank account balances, and passwords, by searching the contents of your computer’s  local file   system.In orderanable pplets to be downloaded and executed on the client computer safely, it was necessary  to prevent anapplet from launching such an attack.  Java
achieved this protection by confining an applet to the Java  execution  environment  and  not  allowing  it access  to  other parts  of  the computer  . The ability to download applets with confidence  that no harm will 
be  done and  that no security will be breached is  considered  by many to be the single most innovative
aspect  of  Java.</p>
 </details>

<details >
<summary style="margin-top:5px" class="btn btn-danger">simple</summary>

<p align="left">Java  wasdes igned to be easy for the professional programmer to learn and use effectively.
Assuming that you have some  programming experience, you will not find Java hard  to master.If you already understand  the basic concepts of object-oriented programming,learning Java will be even easier.
Best of  all  , if you are an experienced C++ programmer,moving to Java will require very little  effort.Because Java inherits the C/C++  syntax many of the object-oriented features  of C++  , most
programmers have little trouble learning Java.</p>

</details>

 <details>
<summary style="margin-top:5px" class="btn btn-danger">Object-Oriented</summary>

<p align="left">
Although influenced by its predecessors,Java  was not designed to be source-code compatible
with any other language.This allowed the Java team the freedom to design with a blank slate.One
outcome  of this was a clean,usable,pragmatic approach to objects.Borrowing liberally from many
seminal object-software environments of the last few decades,Java manages to strike a balance between
the purist’s “  everything is an object”  paradigm and  the pragmatist’s stay out of my way model.The
object model in Java is simple and easy to extend  ,while primitive types, such as integers,  are kept as high
-performance non objects.</p>

</details>

 <details >
 
<summary style="margin-top:5px" class="btn btn-danger">Multithreaded</summary>


<p align="left">
Java was designed to meet the real-world  requirement of creating interactive,networked programs.
To accomplish this,Java supports multithreaded programming,which allows you to write programs that
do many things simultaneously.The Java run-time system comes with an  elegant yet sophisticated
solution for multiprocess synchronization that enables you to construct smoothly  run  ning interactive
systems.Java’s easy-to-use approach to multithreading  allows you to think  about the  specific behavior of 
your program, not the multitasking subsystem</p>


</details>

<details >
<summary  style="margin-top:5px" class="btn btn-danger">Architecture-Neutral</summary>

<p align="left">A central issue for the Java designers was that  of   code  longevity and  portability.One of the    main
problems facing programmers is that no guarantee exists that if you write a   program today, it  will  run  
tomorrow—  even  on the same machine. Operating system upgrades, processor  upgrades, and  changes  in
core system resources can all combine to make a program malfunction.  the Java designers made several
hard  decisions  in the Java  language and the  Java Virtual Machine in an  attempt to  alter this  situation. 
Their goal  was “  write once; run anywhere  , any time, forever  .” To a great extent  ,this goal was
accomplished  .</p>



</details>

<details >
<summary style="margin-top:5px" class="btn btn-danger">Interpreted and High  Performance</summary>
<p align="left">Java enables the creation  of cross-platform programs by compiling  into  an intermediate
representation called Java bytecode. This code can be executed on any system  that implements the Java
Virtual  Machine.Most previous attempts at cross-platform solutions  have done so at the expense of 
performance. As explained earlier ,the Java bytecode was carefully  designed  so   that   it  would be easy  to 
translate  directly into native machine code for very high performance by  using  a  just-in-time  compiler.  
Java run-time systems that provide this feature lose none of the benefits of the platform-independent code .</p>
</details>

<details >
<summary style="margin-top:5px" class="btn btn-danger">Distributed</summary>
<p align="left">Java is designed  for the distributed  environment of  the  Internet because  it handles TCP  /  IP
protocols.In fact  , accessing  a  resource using a URL is not much different from  accessing a file. Java also
supports Remote Method Invocation (RMI).This feature enables a program to invoke methods across  a
network.</p>
</details>

<details >
<summary  style="margin-top:5px" class="btn btn-danger">Dynamic</summary>
<p align="left">Java  programs carry with  them substantial amounts of run-time type information that is used to
verify and resolve accesses to objects at run time.This makes it possible to dynamically link code in a
safe and expedientmanner.This is crucial to the robustness of the Java environment,in which small
fragments of bytecode may be dynamically updated on a running system .</p>

</details>

<details >
<summary style="margin-top:5px" class="btn btn-danger">Robust</summary>
<p align="left">The multi-platformed environment of the Web places extraordinary demands on a program,
because the program must execute reliably in a variety of systems. Thus  ,the ability to create robust
programs was given a high priority in the design of Java. To gain reliability  , Java restricts you in a few 
key areas to force you to find your mistakes early  in program development. At the same time, Java frees 
you from having to worry about many of the most common causes of programming errors  . Because Java 
is a strictly typed language, it checks your code at compile time. However  , it also checks your code at run 
time. Many hard-to-track-down bugs that often turn up in hard-to-  reproduce run -time situations are 
simply impossible to create in Java. Knowing that what you have written will behave in a predictable way 
under diverse conditions is a key feature of Java. To better understand how Java is robust  , consider two 
of the main reasons for program failure  : memory management mistakes and mishandled exceptional 
conditions (that is, run-time errors ). management can be a difficult, tedious task in traditional 
programming environments . For example  , in C/C  ++  , the programmer must manually allocate and free all 
dynamic memory. This sometimes leads to problems, because programmers will either forget to free 
memory that has been previously allocated or, worse  , try to free some memory that another part of their 
code is still using. Java virtually eliminates these problems by managing memory allocation and 
deallocation for you  . </p>

</details>

<details >
<summary  style="margin-top:5px" class="btn btn-danger">portable</summary>
<p align="left">Portability is a major aspect of the Internet because there are many different types of computers
and operating systems connected to it. If a Java program were to be run on virtually any computer 
connected to the Internet  , there needed to be some way to enable that program to execute on different 
systems. For example  , in the case of an applet , the same applet must be able to be downloaded and 
executed by the wide variety of CPUs, operating systems, and browsers connected to the Internet.</p>

</details>


   </section>
<button  type ="button"  style="width:25%;" align="center" onclick="SampleProgram(); scrollWin()" class="btn btn-primary">Next</button>

</div> `;
}

/*  function of JAVA BUZZWORDS completed here */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */



/* it is the function of javasampleprogram starts here */
function SampleProgram(){
    document.getElementById('disappearjavabuzzwords').innerHTML =`<div id="disappearjavasamleprogram">


    <button  type ="button"  style="width:25%;" align="center" onclick="Keywords(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function  SampleProgram(){
    document.getElementById('disappearallbuttons','disappearjavabuzzwords').innerHTML =`<div id="disappearjavasamleprogram">
    <h3 align="center">Sample Program</h3>

    <button  type ="button"  style="width:25%;" align="center" onclick="Keywords(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of sampleprogram completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */












/* it is the function of Keywords starts here */
function Keywords(){
    document.getElementById('disappearjavasamleprogram').innerHTML =`<div id="disappearjavakeywords">


    <button  type ="button"  style="width:25%;" align="center" onclick="variables(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function  Keywords(){
    document.getElementById('disappearallbuttons','disappearjavasamleprogram').innerHTML =`<div id="disappearjavakeywords">
    <h3 align="center">Keywords</h3>
<img src="keywords.jpg" alt="keywords" style="width:100%; height:80%;">
    <button  type ="button"  style="width:25%;" align="center" onclick="variables(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of keywords completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */





















/* it is the function of variables starts here */
function variables(){
    document.getElementById('disappearjavakeywords').innerHTML =`<div id="disappearjavavariables">


    <button  type ="button"  style="width:25%;" align="center" onclick="Datatypes(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function  variables(){
    document.getElementById('disappearallbuttons','disappearjavakeywords').innerHTML =`<div id="disappearjavavariables">
    <h3 align="center">Variables</h3>
    <strong>
    <ul style="list-style:none;" align="left" >
<li>A variable is a container which holds the value while the java program is executed.</li>

<li>The variable is the basic unit of storage in a java program.</li>
<li>A variable is assigned with a data type.</li>
<li>Variable is a name of memory location.</li>
<li>There are two types of data types in java: primitive and non-primitive.</li>
<li>Variable is name of particular area where  memory is allocated.</li>
<li>It is also known as name of memory location.</li>
<li>It is a combination of "vary + able" that means change in the values.</li>
</ul></strong>
<strong>

Syntax:
    datatype variable_name=variable_value;</strong><br>
    

<pre align="left" style="width:90%;">
<h3>Declaring a variable: </h3>
    class example{
        public static void main(String args[]){
           int n=5;
           byte z=22;
            
        }
    }

   
   
   </pre>
<h3>Dynamic intialization:</h3>
In declaring a variable we have used only constants as initializers,
Java allows variables to be initialized dynamically by using an expression valid at time the variable is declared.
<pre>

//For dynamic initialization
Class dynamic
{
public static void main(String args[ ])
float a=4,b=3;
// c is dynamically initialized
float c=Math.sqrt(a*a+b*b);
System.out.println("Hypothesis c is :"+c);
}
}
</pre>


Based on the position and declaration of a variable we divide them into 3 parts.They are:
<details><summary class="btn btn-danger">Local variable</summary>

1) Local Variable:
<strong>
<ul style="list-style:none;">
<li>Local variables name itself explains that declaration should be done with in the block or method or construction.</li>
<li>If a variable is declared inside a body of the method is called local variable. </li>
<li>We use this local  variable only within that method .</li>
<li>A local variable cannot be defined with "static" keyword.</li>
<li>It is mandatory to initialize the variable.</li>
<li>Scope of the local variable is with in the main method.</li>
</ul>
</strong>
<pre align="left">
class abc
{
 public static void main(String args[ ])
 {
   int i=100;
   .
   .
   void m1()
   //We cannot use the i vaue here or cannot acces or allocate
  .
  .
 }
 
 </pre>
 </details>
<details>
<summary style="margin-top:10px;" class="btn btn-danger">Instance variable </summary>




2) Instance Variable:
<strong>
<ul style="list-style:none">
 <li>Inside of the instance variable ,  value of variable is varied from object to object.<li>
<li>It can not be accessed (means cannot call )  from static  area directly.<li>
<li>Scope of instance variable is exactly same as scope of object .<li>
<li>It should be declared with in the class directly , but outside of any block , method or construction <li>
</ul>
</strong>
<pre align="left">
class abc
{
 int i =100;
 public static void main(String args[ ]) 
//Static method main( so we cannot access directly)
 {
  abc a1=new abc ();
//New instance variable has been created
  System.out.println(a1.i);
}
}
</pre>
<strong>
In the above program we have created a new instance variable a1 because , we cannot use static method main directly in instance variable.So,  it's not mandatory to initialize the variable value of i , we can declare it after creating an new instance variable also.In this we have given a1.i to come out from the exception of compile time error,It is also known as object-level variables</strong>
</details>

<details>
<summary style="margin-top:10px" class="btn btn-danger">Static variable</summary>



3) Static Variable:
<strong>
<ul style="list-style:none;">
<li>If we want to vary or modify the variable value then we use static variance from object to object</li>
<li>Inside of the instance variable ,  value of variable is varied from object to object.</li>
<li>It also can not be accessed (means cannot call )  from static  area directly</li>
<li>Scope of static variable is exactly same as scope of class</li>
<li>It should be declared with in the class directly or outside of any block, method or construction using key word static.</li>
</ul>
</strong>
<pre align="left">
//To create static college
class abc
{
  static string college="def";
//Static method main
 int std_id;
 public static void main(String args[ ])
 { 
//To create an object 
  abc a1=new abc();
  abc a2=new abc();
   a.std_id=1;
   a.std_id=2;
}
}
</pre>
<p>In the above program, we use static because here we have created student id with respect to the college name "def" ,Suppose if the college name is changed  to "xxx"  and it is easy to change for each and every student.It is also known as class-level variable or field.It is not mandatory to initialize.</p>
</details>


    <button  type ="button"  style="width:25%;" align="center" onclick="Datatypes(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of variables completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */




































/* it is the function of Datatypes starts here */
function Datatypes(){
    document.getElementById("disappearjavavariables").innerHTML =`<div id="disappearjavaDatatypes">


    <button  type ="button"  style="width:25%;" align="center" onclick="operators(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function Datatypes(){
    document.getElementById('disappearallbuttons',"disappearjavavariables").innerHTML =`<div id="disappearjavaDatatypes">
    <h3 align="center">datatypes</h3>
    <h3 style="color:blue">Data Types:</h3>
<p>Java Is a Strongly Typed Language</p>
<p>It is important to state at the outset that Java is a strongly typed language. Indeed, part of Java’s safety
and robustness comes from this fact. Let’s see what this means.</p>
<p>First, every variable has a type, every expression has a type, and every type is strictly defined.
*Second, all assignments, whether explicit or via parameter passing in method calls, are checked
for type compatibility.</p>
<p>There are no automatic coercions or conversions of conflicting types as in some languages.
The Java compiler checks all expressions and parameters to ensure that the types are compatible.
Any type mismatches are errors that must be corrected before the compiler will finish compiling the
class.</p>


<h3 style="color:red">The Primitive Types:</h3>
<p>Java defines eight primitive types of data: byte, short, int, long, char, float, double, and boolean. The
primitive types are also commonly referred to as simple types. These can be put in four groups:</p>
<p> • Integers This group includes byte, short, int, and long, which are for whole-valued signed
numbers.<P>
<p>• Floating-point numbers This group includes float and double, which represent numbers with
fractional precision.</p>
 <p>• Characters This group includes char, which represents symbols in a character set, like letters
and numbers.</p>
 <p>• Boolean This group includes boolean, which is a special type for representing true/false values.<p>
<img src="jimg1.png" style="width:350px; height:350px;"  alt="sql diagram">

<h3 style="color:red">Integers:</h3>
<p>Java defines four integer types: byte, short, int, and long. All of these are signed, positive and
negative values. Java does not support unsigned, positive-only integers.</p>
<p>Many other computer
languages support both signed and unsigned integers. However, Java’s designers felt that unsigned
integers were unnecessary. Specifically, they felt that the concept of unsigned was used mostly to specify
the behavior of the high-order bit, which defines the sign of an integer value. The width of an integer type
should not be thought of as the amount of storage it consumes, but rather as the behavior it defines for
variables and expressions of that type.</p>
<p> The Java run-time environment is free to use whatever size it wants, as long as the types behave
as you declared them. The width and ranges of these integer types vary widely, as shown in this
table:</p>
<h3 style="color:red">byte</h3>
<p>The smallest integer type is byte. This is a signed 8-bit type that has a range from –128 to 127.
Variables of type byte are especially useful when you’re working with a stream of data from a network or
file. They are also useful when you’re working with raw binary data that may not be directly compatible
with Java’s other built-in types. Byte variables are declared by use of the byte keyword.</p>
<p>*For example, the following
declares two byte variables called b and c: byte b, c;</p>

<h3 style="color:red">short:</h3>
<p>short is a signed 16-bit type. It has a range from –32,768 to 32,767. It is probably the least used
Java type. Here are some examples of short variable declarations:
short s; short t;</p>

<h3 style="color:red">int</h3>
<p>The most commonly used integer type is int. It is a signed 32-bit type that has a range from
–2,147,483,648 to 2,147,483,647. In addition to other uses, variables of type int are commonly employed
to control loops and to index arrays.</p>
<p>Although you might think that using a byte or short would be more
efficient than using an int in situations in which the larger range of an int is not needed, this may not be
the case. The reason is that when byte and short values are used in an expression, they are promoted to
int when the expression is evaluated. Therefore, int is often the best choice when an integer is needed.The range and width of datatypes are:</p>
<img src="jimg2.gif" style="width:350px; height:350px;"  alt="sql diagram">

<h3 style="color:red">long</h3>
<p>long is a signed 64-bit type and is useful for those occasions where an int type is not large enough
to hold the desired value. The range of a long is quite large. This makes it useful when big, whole
numbers are needed</p>.
<h3 style="color:red">Floating-Point Types</h3>
<p>Floating-point numbers, also known as real numbers, are used when evaluating expressions that
require fractional precision. There are two kinds of floating-point types, float and double, which
represent single- and double-precision numbers, respectively. </p>
<h3 style="color:red">float</h3>
<p>The type float specifies a single-precision value that uses 32 bits of storage. Single precision is
faster on some processors and takes half as much space as double precision, but will become imprecise
when the values are either very large or very small. Variables of type float are useful when you need a
fractional component, but don’t require a large degree of precision. For example, float can be useful
when representing dollars and cents.</p>

<p>Here are some example float variable declarations:

float hightemp, lowtemp;</p>

<h3 style="color:red">double</h3>
<p>Double precision, as denoted by the double keyword, uses 64 bits to store a value. Double
precision is actually faster than single precision on some modern processors that have been optimized for
high-speed mathematical calculations. All transcendental math functions, such as sin( ), cos( ), and sqrt(
), return double values. When you need to maintain accuracy over many iterative calculations, or are
manipulating large-valued numbers, double is the best choice.</p>


    <button  type ="button"  style="width:25%;" align="center" onclick="operators(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of Datatypes completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */



































/* it is the function of operators starts here */
function operators(){
    document.getElementById("disappearjavaDatatypes").innerHTML =`<div id="disappearjavaoperators">


    <button  type ="button"  style="width:25%;" align="center" onclick="controlstatements(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function operators(){
    document.getElementById('disappearallbuttons',"disappearjavaDatatypes").innerHTML =`<div id="disappearjavaoperators">
    <h3 align="center">Operators</h3>
<p align="left">Operator in java is a symbol that is used to perform operations. For example: +, -, *, / etc.
There are many types of operators in java which are given below:</p>
Unary Operator,
Arithmetic Operator,
Shift Operator,
Relational Operator,
Bitwise Operator,
Logical Operator,
Ternary Operator and
Assignment Operator.

<details><summary class="btn btn-primary">UNARY OPERATOR:</summary>
The Java unary operators require only one operand. Unary operators are used to perform various operations i.e.,:
incrementing/decrementing a value by one negating an expression inverting the value of a boolean.
EXAMPLE:
class UnaryOperator
{  
public static void main(String args[])
{  
int a=10;  
int b=10;  
System.out.println(a++ + ++a);//10+12=22  
System.out.println(b++ + b++);//10+11=21
}
}
</details>


<details><summary class="btn btn-primary">ARITHMETIC OPERATOR:</summary>


Java arithmatic operators are used to perform addition, subtraction, multiplication, and division.
 They act as basic mathematical operations.
EXAMPLE:
class ArithematicOperator
{  
public static void main(String args[])
{  
int a=10;  
int b=5;  
System.out.println(a+b);//15  
System.out.println(a-b);//5  
System.out.println(a*b);//50  
System.out.println(a/b);//2  
System.out.println(a%b);//0  
}
}
</details>

	<details>
	<summary class="btn btn-primary">SHIFT OPERATOR</summary>
LEFT SHIFT OPERATOR:
The left shift operator << is used to shift all of the bits in a value to the left side of a specified number of times.  
EXAMPLE:
class LSOperator
{  
public static void main(String args[])
{  
System.out.println(10<<2);//10*2^2=10*4=40  
System.out.println(10<<3);//10*2^3=10*8=80  
System.out.println(20<<2);//20*2^2=20*4=80  
System.out.println(15<<4);//15*2^4=15*16=240
}
}  

RIGHT SHIFT OPERATOR:
The right operator  >> is used to move left operands value to right by the number of bits specified by the right operand.
EXAMPLE:
class RSOperator{  
public static void main(String args[])
{  
System.out.println(10>>2);//10/2^2=10/4=2  
System.out.println(20>>2);//20/2^2=20/4=5  
System.out.println(20>>3);//20/2^3=20/8=2  
}
}  
</details>

<details>
<summary class="btn btn-primary">RELATIONAL OPERATOR:</summary>
The Relational operators are:
== (equal to)  means the values of two operands are equal or not, if yes then condition becomes true.	
!= (not equal to) means the values of two operands are equal or not, if values are not equal then condition becomes true.	
> (greater than) means the value of left operand is greater than the value of right operand, if yes then condition becomes true.	
< (less than) means the value of left operand is less than the value of right operand, if yes then condition becomes true.	
>= (greater than or equal to) means the value of left operand is greater than or equal to the value of right operand, if yes then condition becomes true.	
<= (less than or equal to) means the value of left operand is less than or equal to the value of right operand, if yes then condition becomes true.	
</details>


<details>
<summary class="btn btn-primary">BITWISE OPERATOR:</summary>
<p>Java defines several bitwise operators, which can be applied to the integer types, long, int, short, char, and byte.
Bitwise operator works on bits and performs bit-by-bit operation.</p>
& (bitwise and)-Binary AND Operator copies a bit to the result if it exists in both operands.	
| (bitwise or)-Binary OR Operator copies a bit if it exists in either operand.	
^ (bitwise XOR)-Binary XOR Operator copies the bit if it is set in one operand but not both.	
~ (bitwise compliment)-Binary Ones Complement Operator is unary and has the effect of 'flipping' bits.
</details>

<details>
<summary class="btn btn-primary">LOGICAL OPERATOR:</summary>
The logical operators:
&& (logical and) is called Logical AND operator. If both the operands are non-zero, then the condition becomes true.	
|| (logical or) is called Logical OR Operator. If any of the two operands are non-zero, then the condition becomes true.	
! (logical not) is called Logical NOT Operator. Use to reverses the logical state of its operand. 
If a condition is true then Logical NOT operator will make false.
</details>

<details>
<summary class="btn btn-primary">TERNARY OPERATOR:</summary>
<p>Java Ternary operator is used as one liner replacement for if-then-else statement and used a lot in java programming.
It is the only conditional operator which takes three operands.</p>
EXAMPLE:
if (expression) 
{
   number = 10;
}
else  
{
   number = -10;
}
with
number = (expression) ? expressionTrue : expressinFalse;
</details>

<details>
<summary class="btn btn-primary">ASSIGNMENT OPERATOR:</summary>
Assignment operators are used in Java to assign values to variables.The assignment operator assigns the value 
on its right to the variable on its left.
EXAMPLE:
class AssignmentOperator
{  
public static void main(String args[])
{  
int a=10;  
int b=20;  
a+=4;//a=a+4 (a=10+4)  
b-=4;//b=b-4 (b=20-4)  
System.out.println(a);  
System.out.println(b);  
}
}  
</details>
    <button  type ="button"  style="width:25%;" align="center" onclick="controlstatements(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of operators completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */





















/* it is the function of controlstatements starts here */
function controlstatements(){
    document.getElementById("disappearjavaoperators").innerHTML =`<div id="disappearjavacontrolstatements">


    <button  type ="button"  style="width:25%;" align="center" onclick="TypeConversions(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function controlstatements(){
    document.getElementById('disappearallbuttons',"disappearjavaoperators").innerHTML =`<div id="disappearjavacontrolstatements">
    <h3 align="center">Control Statements</h3>

<p>The statements inside your source files are generally executed from top to bottom, 
in the order that they appear. Control flow statements, however, break up the flow
of execution by employing decision making, looping, and branching, enabling 
your program to conditionally execute particular blocks of code.</p>

DECISION MAKING STATEMENTS: 
Decision-making statements are also called as Conditional statements and Selection statement.
Selection statements allow your program to choose different paths of execution based
upon the outcome of an expression or the state of a variable.When we need to execute a set of 
statements based on a condition then we need to use control flow statements. In this case
we have two print statements namely IF and SWITCH.
1.simple if,
2.if else if,
3.nested if else and
4.switch.

<details>

<summary class="btn btn-simple">Simple if</summary>
<p>If statement consists a condition, followed by statement or a set of statements.</p>
<strong>SYNTAX:</strong>
<pre align="left">
if(condition)
{
Statement(s);
}
</pre>

The statements gets executed only when the given condition is true.
If the condition is false then the statements inside if statement <br>
body are completely ignored.<br>
<strong>EXAMPLE:</strong><br>
<pre align="left">
import java.util.*;
class max_num
{
   public static void main(String args[])
 {
   int num=70;
   if( num < 100 )
   {
     System.out.println("number is less than 100");
    }
 }
}
</pre>

</details>
<details>
<summary class="btn btn-simple">if else :</summary>
<strong>SYNTAX:</strong>
<pre align="left">
if(condition) 
{
   Statement1;


   StatementN;
}
else 
{
   Statement1;


   StatementN;
}</pre><br>
The statements inside “if” would execute if the condition is true, <br>
and the statements inside “else” would execute if the condition is false.<br>
<strong>EXAMPLE:</strong>
<pre align="left">
import java.util.*;
class maxnumber
{
   public static void main(String args[])
   {
      int num=120;
      if( num < 50 )
      {
        System.out.println("num is less than 50");
      }
     else 
     {
        System.out.println("num is greater than or equal 50");
     }
   }
}</pre>
</details>
<details>
<summary class="btn btn-simple">3.Nested if::</summary>


When there is an if statement inside another if statement then 
it is called the nested if statement.
<strong>SYNTAX:</strong>
<pre align="left">
if(condition_1) 
{
   Statements;
   if(condition_2) 
   {
      Statements;
   }
}</pre>
Statement1 would execute if the condition_1 is true. Statement2 would only <br>
execute if both the conditions( condition_1 and condition_2) are true.<br>
<strong>EXAMPLE:</strong>
<pre align="left">
import java.util.*;
class maxnumber
{
    public static void main(String args[])
    {
        int num=70;
        if( num < 100 )
        { 
           System.out.println("number is less than 100"); 
           if(num > 50)
           {
              System.out.println("number is greater than 50");
           }
         }
      }
}</pre>
</details>
<details>
<summary class="btn btn-simple">Switch</summary>

Switch case statement is used when we have number of options (or choices) <br>
and we may need to perform a different task for each choice.Switch Case <br>
statement is mostly used with break statement even though it is optional. <br>
<strong>SYNTAX:</strong>
<pre align="left">
switch (variable or integer expression)
{
     case constant:statements;
     case constant:statements;
  
     default:statements;
}</pre>
<strong>EXAMPLE:</strong>
<pre align="left">
import java.util.*;
class convowel
{
  public static void main(String args[])
  {
    char ch;
    Scanner s=new Scanner(Syustem.in);
    System.out.printlnln("Enter your choice");
    ch=s.next.char At(0);
    switch(ch)
    {
       case'a':
       case'e':
       case'i':
       case'o':
       case'u':
       case'A':
       case'E':
       case'I':
       case'O':
       case'U':System.out.printlnln("\n you have entered vowel \n");
       default:System.out.printlnln("\n you have entered consonant \n");
     }
  }
}</pre>
Few points about Switch Case:-<br>
1) Case doesn’t always need to have order 1, 2, 3 and so on. It can have any integer <br>
value after case keyword. <br>Also, case doesn’t need to be in an ascending order always, 
you can specify them in any order based on the requirement.<br>
2) You can also use characters in switch case.<br>
3) The expression given inside switch should result in a constant value otherwise 
it would not be valid.<br>
4) Nesting of switch statements are allowed, which means you can have switch<br>
statements inside another switch.<br>
</details>

<h3 align="center">LOOPING STATEMENTS:</h3>
Looping statements are also called as Iterative statements.<br>
Loops are used to execute a set of statements repeatedly until a particular
condition is satisfied.
<pre>
In Java we have three types of basic loops: 
1.for, 
2.while  and
3.do-while.</pre>

<details>
<summary class="btn btn-simple">1.for:</summary>

Flow of Execution of the for Loop:
As a program executes, the interpreter always keeps track of which statement is about 
to be executed. We call this the control flow, or the flow of execution of the program.<br>
step 1:In for loop, initialization happens first and only one time, which means that 
the initialization part of for loop only executes once.<br>
step 2: Condition in for loop is evaluated on each iteration, if the condition is true 
then the statements inside for loop body gets executed. Once the condition returns false, 
the statements in for loop does not execute and the control gets transferred to the next 
statement in the program after for loop.<br>
step 3: After every execution of for loop’s body, the increment/decrement part of for 
loop executes that updates the loop counter.<br>
step 4: After third step, the control jumps to second step and condition is re-evaluated<br>
<strong>SYNTAX:</strong>
<pre>
for(initialization; condition ; increment/decrement)
{
   statement1;
   

   statement n;
}</pre>
<strong>EXAMPLE:</strong>
<pre align="left">
import java.util.*;
class number 
{
    public static void main(String args[])
    {
         for(int i=1; i<=5; i++){
         System.out.println("The value of i is: "+i);
     }
}</pre>
</details>
<details>
<summary class="btn btn-simple">2.while:</summary>

In while loop, condition is evaluated first and if it returns true then the 
statements inside while loop execute. When condition returns false, the 
control comes out of loop and jumps to the next statement after while loop.
<strong>SYNTAX:</strong>
<pre align="left">
while(condition)
{
   statement1;


   statementn;
}</pre>
<strong>EXAMPLE:</strong>
<pre>
import java.util.*;
class nymber
{
    public static void main(String args[])
    {
         int i=1;
         while(i<=5)
         System.out.println(i);
          i++;
    }
}</pre>
</details>

<details>
<summary class="btn btn-simple">3.do-while</summary>

First, the statements inside loop execute and then the condition gets evaluated, 
if the condition returns true then the control gets transferred to the “do” else it 
jumps to the next statement after do-while.
<strong>SYNTAX:</strong>
<pre>
do
{
   statement1;


   statementn;
} while(condition);
EXAMPLE:
import java.util.*;
class number
{
    public static void main(String args[])
   {
         int i=1;
         do
       {
              System.out.println(i);
              i++;
         }while(i<=5);
    }
}
</pre>
</details>

 <h3 align="center">BRANCHING STATEMENTS:</h3>

Branching statements are also known as Jump statements.
Java supports three jump statements:
break, 
continue and 
return.
These statements transfer control to another part of our computer.

1.break:
Break statements are used when you want your program-flow to come out of the 
switch body. Whenever a break statement is encountered in the switch body, the 
execution flow would directly come out of the switch, ignoring rest of the cases.
EXAMPLE:
<pre align="left">
class breakstatement 
{
   public static void main(String args[])
   {
      int i=2;
      switch(i)
      {
  case 1:
    System.out.println("Case1 ");
    break;
  case 2:
    System.out.println("Case2 ");
    break;
  case 3:
    System.out.println("Case3 ");
    break;
  case 4:
           System.out.println("Case4 ");
           break;
  default:
    System.out.println("Default ");
      }
   }
}</pre>

2.continue:
  The continue statement performs such an action. In while and and dowhile loops
a continue statement causes control to be transferred directly to the conditional expression
that controls the loop. In for loop , control goes  first to the iteration portion of the for 
statement and then to the conditional expression.
EXAMPLE:
class continuestmt
{
 public static void main(String args[])
 {
   for(int i=0;i<=10;i++)
   {
      System.out.println(i++" ");
      if(i%2==0) continue;
      System.out.println(" ");
    }
 }
}

3.return:
 The return statement is used to explicitly return from a method i.e., it causes program control 
to transfer back to the caller of the method.Thus, the return statement immediately terminates the
method in which it is executed.
EXAMPLE:
class returnstmt
{
 public static void main(String args[])
 {
   boolean t=true;
   System.out.println("Before the return");
   if(t) return;
   System.out.println("This won't execute");
  }
} 
    <button  type ="button"  style="width:25%;" align="center" onclick="TypeConversions(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of controlstatemts completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */















/* it is the function of typesofconversions starts here */
function TypeConversions(){
    document.getElementById("disappearjavacontrolstatements").innerHTML =`<div id="disappearjavaTypeConversions">


    <button  type ="button"  style="width:25%;" align="center" onclick="Arrays(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function TypeConversions(){
    document.getElementById('disappearallbuttons',"disappearjavaoperators").innerHTML =`<div id="disappearjavaTypeConversions">
    <h3 align="center">TypeConversions</h3>
   <h3 style="color:red"> Type Conversion and Casting:</h3>
<p>Converting a value from one type to another type (data type) is known as type conversion. Type
conversion is of two types based on how the conversion is performed:</p>

<p>1) Implicit conversion  (also known as automatic conversion or coercion),</p>
<p>2) Explicit conversion  (also known as type casting).</p>
<img src="jimg5.png" style="width:350px; height:350px;"  alt="sql diagram">

<p>It is always possible to assign an int value to a long variable. However, not all types are
compatible, and thus, not all type conversions are implicitly allowed. For instance, there is no automatic
conversion defined from double to byte. Fortunately, it is still possible to obtain a conversion between
incompatible types. To do so, you must use a cast, which performs an explicit conversion between
incompatible types.</p>
<h3 style="color:blue">Java’s Automatic Conversions:</h3>
<p>When one type of data is assigned to another type of variable, an automatic type conversion will
take place if the following two conditions are met: The two types are compatible.</p>
<p> The destination type is larger than the source type.</p>
<p>When these two conditions are met, a widening conversion takes place. For example, the int type
is always large enough to hold all valid byte values, so no explicit cast statement is required. For
widening conversions, the numeric types, including integer and floating-point types, are compatible with
each other.</p>
<p>However, there are no automatic conversions from the numeric types to char or boolean.
Also, char and boolean are not compatible with each other. As mentioned earlier, Java also performs an
automatic type conversion when storing a literal integer constant into variables of type byte, short, long,
or char.  automatic (also called as widening)</p>
<img src="jimg3.jpg" style="width:350px; height:350px;"  alt="sql diagram">


<h3 style="color:blue">Casting Incompatible Types:</h3>
<p>Although the automatic type conversions are helpful, they will not fulfill all needs. For example,
what if you want to assign an int value to a byte variable? This conversion will not be performed
automatically, because a byte is smaller than an int. This kind of conversion is sometimes called a
narrowing conversion, since you are explicitly making the value narrower so that it will fit into the target
type.</p>
<p>To create a conversion between two incompatible types, you must use a cast. A cast is simply
an explicit type conversion. It has this general form:</p>
<img src="jimg4.jpg" style="width:450px; height:350px;"  alt="sql diagram">


<p>(target-type) value</p>

<pre>// Demonstrate casts.
class Conversion
{
public static void main(String args[])
{
byte b;
int i = 257;
double d = 323.142;
System.out.println(&quot;\nConversion of int to byte.&quot;);
b = (byte) i;
System.out.println(&quot;i and b &quot; + i + &quot; &quot; + b);
System.out.println(&quot;\nConversion of double to int.&quot;);
i = (int) d;
System.out.println(&quot;d and i &quot; + d + &quot; &quot; + i);
System.out.println(&quot;\nConversion of double to byte.&quot;);
b = (byte) d;
System.out.println(&quot;d and b &quot; + d + &quot; &quot; + b);
}
}
This program generates the following output:
Conversion of int to byte.
i and b 257 1
Conversion of double to int.
d and i 323.142 323
Conversion of double to byte.
d and b 323.142 67</pre>

<p>Let’s look at each conversion. When the value 257 is cast into a byte variable, the result is the remainder
of the division of 257 by 256 (the range of a byte), which is 1 in this case. When the d is converted to an
int, its fractional component is lost. When d is converted to a byte, its fractional component is lost, and
the value is reduced modulo 256, which in this case is 67.</p>
<h3 style="color:blue">Automatic Type Promotion in Expressions:</h3>
<p>In addition to assignments, there is another place where certain type conversions may occur: in
expressions. To see why, consider the following. In an expression, the precision required of an
intermediate value will sometimes exceed the range of either operand. For
example, examine the following expression:</p>

<pre>byte a = 40;
byte b = 50;
byte c = 100;
int d = a * b / c;</pre>

<p>The result of the intermediate term a * b easily exceeds the range of either of its byte operands. To
handle this kind of problem, Java automatically promotes each byte, short, or char operand to int when
evaluating an expression. This means that the sub expression a*b is performed using integers—not bytes.</p>
<h3 style="color:blue">The Type Promotion Rules:</h3>
<p>Java defines several type promotion rules that apply to expressions. They are as follows:</p>

<p> First, all byte, short, and char values are promoted to int.</p>
<p> Then, if one operand is a long, the whole expression is promoted to long.</p>
<p> If one operand is a float, the entire expression is promoted to float.</p>
<p> If any of the operands are double, the result is double.</p>

<p>The following program demonstrates how each value in the expression gets promoted to match the
second argument to each binary operator:</p>

<pre>class Promote
{
public static void main(String args[])
{
byte b = 42;
char c = &#39;a&#39;
short s = 1024;
int i = 50000;
float f = 5.67f;
double d = .1234;
double result = (f * b) + (i / c) - (d * s);
System.out.println((f * b) + &quot; + &quot; + (i / c) + &quot; - &quot; + (d * s));
System.out.println(&quot;result = &quot; + result);
}
}</pre>
<p>Let’s look closely at the type promotions that occur in this line from the program:
double result = (f * b) + (i / c) - (d * s);</p>



    <button  type ="button"  style="width:25%;" align="center" onclick="Arrays(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of types of conversions completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */




























/* it is the function of Array starts here */
function Arrays(){
    document.getElementById("disappearjavaTypeConversions").innerHTML =`<div id="disappearjavaarrays">


    <button  type ="button"  style="width:25%;" align="center" onclick="typesofconstructions(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function Arrays(){
    document.getElementById('disappearallbuttons',"disappearjavaTypeConversions").innerHTML =`<div id="disappearjavaarrays">
    <h3 align="center">Arrays</h3>
    <h3 style="color:red;">Java Arrays</h3>
<p>An array is a container that holds data (values) of one single type. For example, you can create an
array that can hold 100 values of int type. Array is a fundamental construct in Java that allows you to
store and access large number of values conveniently.</p>
<h3style="color:blue">How to declare an array:</h3>
<p> how you can declare an array in Java:</p>

<p>dataType[ ] arrayName;</p>

<p>dataType can be a primitive data type like: int, char, Double, byte etc. or an object arrayName is
an identifier.</p>
<p> take the above example again.</p>
<p>Double[ ] data;</p>

<p>Here, data is an array that can hold values of type Double.
But, how many elements can array this hold</p>
<p>data = new Double[10];</p>
<p>The length of data array is 10. Meaning, it can hold 10 elements (10 Double values in this case).
Note, once the length of the array is defined, it cannot be changed in the program.</p>
<p> take another example:</p>
<pre>int[ ] age;
age = new int[5];</pre>
<p>Here, age array can hold 5 values of type int.
 possible to declare and allocate memory of an array in one statement. You can replace two statements
above with a single statement.</p>
<p>int[ ] age = new int[5];</p>
<h3 style="color:blue">Java Array Index </h3>
<p>You can access elements of an array by using indices. Let&#39;s consider previous example.</p>
<p>int[ ] age = new int[5];</p>
<img src="jimg6.jpg" style="width:350px; height:350px;"  alt="sql diagram">

<p>The first element of array is age[0], second is age[1] and so on. If the length of an array is n, the last
element will be arrayName[n-1]. Since the length of age array is 5, the last element of the array
is age[4] in the above example. The default initial value of elements of an array is 0 for numeric
types and false for boolean.</p>
<p>We can demonstrate this:</p>

<pre>class ArrayExample {
public static void main(String[] args)
{
int[] age = new int[5];
System.out.println(age[0]);
System.out.println(age[1]);
System.out.println(age[2]);
System.out.println(age[3]);
System.out.println(age[4]);
}
}</pre>
<pre>When you run the program, the output will be:
0
0
0
0
0</pre>

<p>There is a better way to access elements of an array by using looping construct (generally for loop is
used).</p>

<pre>class ArrayExample
{
public static void main(String[] args)
{
int[ ] age = new int[5];
for (int i = 0; i &lt; 5; ++i)
{
System.out.println(age[i]);
}
}
}</pre>
<h3 style="color:blue">How to initialize arrays in Java:</h3>
<p>In Java, you can initialize arrays during declaration or you can initialize (or change values) later in the
program as per your requirement.</p>
<h3  style="color:blue">Initialize an Array During Declaration:</h3>
<p> how you can initialize an array during declaration.
int[ ] age = {12, 4, 5, 2, 5};
This statement creates an array and initializes it during declaration.
The length of the array is determined by the number of values provided which is separated by commas. In
our example, the length of age array is 5.</p>

<p> write a simple program to print elements of this array.</p>

<pre>class ArrayExample
{
public static void main(String[] args)
{
int[ ] age = {12, 4, 5, 2, 5};
for (int i = 0; i &lt; 5; ++i)
{
System.out.println(&quot;Element at index &quot; + i +&quot;: &quot; + age[i]);
}
}
}</pre>
<pre>When you run the program, the output will be:
Element at index 0: 12
Element at index 1: 4
Element at index 2: 5
Element at index 3: 2
Element at index 4: 5</pre>

<h3  style="color:blue">How to access array elements:</h3>
<p>You can easily access and alter array elements by using its numeric index.  take an example.</p>

<pre>class ArrayExample
{
public static void main(String[] args)
{
int[] age = new int[5]; // insert 14 to third element
age[2] = 14; // insert 34 to first element
age[0] = 34;
for (int i = 0; i &lt; 5; ++i)
{
System.out.println(&quot;Element at index &quot; + i +&quot;: &quot; + age[i]);
}
}
}</pre>
<pre>When you run the program, the output will be:
Element at index 0: 34
Element at index 1: 0
Element at index 2: 14
Element at index 3: 0
Element at index 4: 0</pre>

<h3  style="color:blue">Example: Java arrays:</h3>
<p>The program below computes sum and average of values stored in an array of type int.</p>

<pre>class SumAverage
{
public static void main(String[] args)
{
int[ ] numbers = {2, -9, 0, 5, 12, -25, 22, 9, 8, 12};
int sum = 0;
Double average;
for (int number: numbers)
{
sum += number;
}
int arrayLength = numbers.length;
// Change sum and arrayLength to double as average is in double
average = ((double)sum / (double)arrayLength);

System.out.println(&quot;Sum = &quot; + sum);
System.out.println(&quot;Average = &quot; + average);
}
}
When you run the program, the output will be:
Sum = 36
Average = 3.6</pre>

<pre>Write a java program to read the read the array values through keyboard and print them.

import java.io.*;
import java.util.*;
class arraydemo
{
public static void main (String args[]) throws IOException
{
Scanner sc=new Scanner(System.in);
System.out.println (&quot;How many elements: &quot; );

int n = sc.nextInt();
int a[] = new int[n];
System.out.print (&quot;Enter elements into array: &quot;);
for (int i = 0; i&lt;n;i++)
a [i] = sc.nextInt();
System.out.print (&quot;The entered elements in the array are: &quot;);
for (int i =0; i &lt; n; i++)
System.out.print (a[i] + &quot;\n&quot;);

}
}</pre>

<h3  style="color:blue">Multidimensional Arrays:</h3>
<p>Arrays we have mentioned till now are called one-dimensional arrays. In Java, you can declare an
array of arrays known as multidimensional array. Here&#39;s an example to declare and initialize
multidimensional array.</p>

<p>Double[ ][ ] matrix = {{1.2, 4.3, 4.0}, {4.1, -1.1}};</p>

 <p>Also possible to create an array of arrays known as multidimensional array. For example,</p>
<p>int[ ][ ] a = new int[3][4];</p>
<p>Here, a is a two-dimensional (2d) array. The array can hold maximum of 12 elements of type int.</p>

<img src="jim2.jpg" style="width:350px; height:350px;"  alt="sql diagram">

<p>Remember, Java uses zero-based indexing, that is, indexing of arrays in Java starts with 0 and not 1.
In Java, components of a multidimensional array are also arrays. If you know C/C++, you may feel like,
multidimensional arrays in Java and C/C++ works in similar way. Well, it doesn&#39;t. In Java, rows can vary
in length.</p>
<h3  style="color:blue">How to initialize a 2d array in Java:</h3>
<p> An example to initialize a 2d array in Java.</p>
<p>int[][] a = {{1, 2, 3}, {4, 5, 6, 9}, {7}, };</p>


<img src="jim1.gif" style="width:350px; height:350px;"  alt="sql diagram">


<p>As mentioned, each component of array a is an array in itself, and length of each rows is also different.</p>

<p> write a program to prove it.</p>

<pre>class MultidimensionalArray
{
public static void main(String[] args)
{
int[ ][ ] a = {{1, 2, 3}, {4, 5, 6, 9}, {7}, };
System.out.println(&quot;Length of row 1: &quot; + a[0].length);
System.out.println(&quot;Length of row 2: &quot; + a[1].length);
System.out.println(&quot;Length of row 3: &quot; + a[2].length);
}
}</pre>
<pre>When you run the program, the output will be:
Length of row 1: 3
Length of row 2: 4
Length of row 3: 1</pre>

<p>Since each component of a multidimensional array is also an array (a[0], a[1] and a[2] are also arrays),
you can use length attribute to find the length of each rows. 
Example: Print all elements of 2d array Using Loop</p>

<pre>class MultidimensionalArray
{
public static void main(String[] args)
{
int[ ][ ] a = {{1, -2, 3},{-4, -5, 6, 9},{7}, };
for (int i = 0; i &lt; a.length; ++i)
{
for(int j = 0; j &lt; a[i].length; ++j)
{
System.out.println(a[i][j]);
}
}
}
}</pre>

<p>better to use for..each loop to iterate through arrays whenever possible. You can perform the same
task using for..each loop as:</p>

<pre>class MultidimensionalArray
{
public static void main(String[] args)
{
int[][] a = {{1, -2, 3}, {-4, -5, 6, 9}, {7},};
for (int[] innerArray: a)
{
for(int data: innerArray)

{
System.out.println(data);
}
}
}
}</pre>
<pre>When you run the program, the output will be:
1
-2
3
-4
-5
6
9
7</pre>



    <button  type ="button"  style="width:25%;" align="center" onclick="typesofconstructions(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of Arrays completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */













/* it is the function of Type of Constructor starts here */
function typesofconstructions(){
    document.getElementById("disappearjavaarrays").innerHTML =`<div id="disappeartypesofconstructions">


    <button  type ="button"  style="width:25%;" align="center" onclick="Arrays(); scrollWin()" class="btn btn-primary">Next</button>
</div>`;

}

function typesofconstructions(){
    document.getElementById('disappearallbuttons',"disappearjavaarrays").innerHTML =`<div id="disappeartypesofconstructions">
    <h3 align="center">typesofconstructions</h3>

    <a  type ="button"  style="width:25%;" href="javaoops.php"  align="center"  scrollWin()" class="btn btn-danger">Learn OOPS</a>


</div>`;
}

/* it is the function of Constructor completed here */



/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */

















