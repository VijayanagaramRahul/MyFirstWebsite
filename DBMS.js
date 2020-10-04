  /*it is the function of BASIC_OF_DBMS starts here */
function  BASICS_OF_DBMS(){
    document.getElementById('disappearallbuttons').innerHTML =`<div id="disappearintroductiontoBASIC_OF_DBMS">
    <h2>BASIC_OF_DBMS</h2>
    <h2 align="left" style="color:red">1.what is data</h2>
    <p align="left">Data is defined as facts or fingures,or information that's stored in or used by a computer.an example of data is information collected for a research paper</p>
     <h2  align="left" style="color:blue">2.How we store the data</h2>
     <p align="left">software is resposible for organizing,moving and processing all those numbers.The computer's BIOS contains simple istructions,STORED as DATA in electronic memory,to move DATA in and out of different storages locations and around the computer for processing</p>
     <h2  align="left" style="color:red">3.what is DBMS</h2>
       <img src="img29.png" style="width:250px; height:250px;"  alt="sql diagram">
     <p align="left">DBMS is a general purpose software system that facilitaties the process of definition,contruction,manipulating,and sharing databases among various users and applications.</p>
      
         <img src="img80.png" style="width:250px; height:250px;"  alt="dbms diagram">
         
          <h2  align="left" style="color:red">DBMS languages</h2>
      <p align="left">DATA DEFINATION LANGUAGE(DDL):Data definition language (DDL) statement are used to classify the database structure or schema.It is a type of language that allow the DMA or user to depict and name those entities,attributes,and relationships that are required for the application along with any associated integrity and security constraints.commands are in DDL CREATE,ALTER,DROP,TRUNCATE,COMMENT,RRENAME.</p>
      <img src="img44.JPG" style="width:350px; height:350px;"  alt="ER-modal">

      <p align="left">DATA CONTROL LANGUAGE(DCL):The DCL is used to control privilege in database.To perform any operation in the database,such as for creating tables,sequences or views we need priviliges.</p>
      <img src="img45.JPG" style="width:350px; height:350px;"  alt="ER-modal">

          <p align="left">  Data Manipulation Language (DML) :
    <p align="left">statements are used to manage data within schema
objects. Here are the lists of tasks that come under DML:</p>
<p align="left">SELECT- It retrieves data from a database</p>
<p align="left"><p align="left"><p align="left">INSERT- It inserts data into a table</p>
<p align="left"><p align="left">UPDATE- It updates existing data within a table</p>
<p align="left">DELETE- It deletes all records from a table, the space for the records remain</p>
<p align="left">MERGE- UPSERT operation (insert or update)</p>
<p align="left">CALL- It calls a PL/SQL or Java subprogram</p>
<p align="left">EXPLAIN PLAN- It explains access path to data</p>
<p align="left">LOCK TABLE- It controls concurrency</p>
      
      <h3>difference between DML and DL</h3>
      <img src="img36.JPG" style="width:350px; height:350px;"  alt="ER-modal">
     <h2  align="left" style="color:red">4.purpose of DBMS</h2>
     <p align="left">It is a collection of programs that enables the user to create and maintain a DATABASE...DATABASE SYSTEMS designed to manage large bodies of information.MANAGEMENT of data involves both defining structuresfor storage of information and providing mechanisms for the manipulation of information.</p>
     <h2 align="left" style="color:green">5.why should we use DBMS</h2>
     <p align="left">To make this information more useful,easy to accces and procted we use database management systems.DBMS is importent because it manages the data effciently and allow users to perform  multiple task on it with the ease.<\p> 
  
<iframe  src="https://www.youtube.com/embed/ow4rUuqsDbI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <section align="left" style="margin-left:0%; ">
<details>
<summary class="btn btn-primary"><strong></strong> ENTITY RELATION MODEL</summary>
<p align="left" >An entity relationship diagram (ERD) shows the relationships of entity sets stored in a
database. An entity in this context is a component of data. In other words, ER diagrams
illustrate the logical structure of databases.
At first glance an entity relationship diagram looks very much like a flowchart. It is the
specialized symbols, and the meanings of those symbols, that make it unique.
<h2  align="left" style="color:black">History of ERD:</h2>
<p>Peter Chen developed ERDs in 1976. Since then Charles Bachman and James Martin have
added some slight refinements to the basic ERD principles.</p>
<p align="left" >There are five main components of an ERD:</p>
<p align="left" > Entities, which are represented by rectangles. An entity is an object or
concept about which you want to store information.<\p>

<p align="left" > A weak entity is an entity that must defined by a foreign key relationship with
another entity as it cannot be uniquely identified by its own attributes alone.<\p>

<p align="left" > Actions, which are represented by diamond shapes, show how two entities
share information in the database. In some cases, entities can be self-linked.<\p>
For example, employees can supervise other employees.</p>

<p align="left">Attributes, which are represented by ovals. A key attribute is the unique,
distinguishing characteristic of the entity. For example, an employee&#39;s social
security number might be the employee&#39;s key attribute.<\p>

<p align="left"> A multivalued attribute can have more than one value. For example, an
employee entity can have multiple skill values.<\p>

<p align="left"> A derived attribute is based on another attribute. For example, an employee&#39;s
monthly salary is based on the employee&#39;s annual salary.<\p>

<p align="left"> Connecting lines, solid lines that connect attributes to show the relationships
of entities in the diagram.<\p>
<p align="left"> Cardinality specifies how many instances of an entity relate to one instance
of another entity. Ordinality is also closely linked to cardinality. While
cardinality specifies the occurrences of a relationship, ordinality describes the
relationship as either mandatory or optional. In other words, cardinality
specifies the maximum number of relationships and ordinality specifies the
absolute minimum number of relationships.<\p>
      <img src="img2.png" style="width:350px; height:350px;"  alt="ER-modal">


</details>
   <button  type ="button"  style="width:25%;" align="center" onclick="LEARN_SQL(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

/* it is the function of BASIC_OF_DBMS completed here */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */

 /* it is the function of LEARN_SQL starts here */
function LEARN_SQL(){
    document.getElementById('disappearallbuttons').innerHTML =`
    <div class="container" id="disappearsql" > <h3 align="center"> LEARN_SQL </h3>

<button  type ="button"  style="width:25%;" align="center" onclick="NORMALIZATION(); scrollWin()" class="btn btn-primary">Next</button>

</div> `;
}
 function LEARN_SQL(){
    document.getElementById('disappearallbuttons',"disappearintroductiontoBASIC_OF_DBMS").innerHTML =`
    <div class="container" id="disappearsql"> <h3 align="center"> LEARN_SQL </h3>
 <h3 align="left" style="color:green">1.SQL means </h3>
   <p align="left">SQL means structured Query Language(SQL) is a standard computer language for relational database management and data manipulation.SQL is used to query, insert,update and modify dsts.Most relation databases supporty SQL,which is an added benefit for database administratiors(DBAs),as they are often required to support databases across several different platforms.</p>
   <img src="img20.jpg" style="width:350px; height:350px;"  alt="sql diagram">

  <h3 align="left" style="color:blue"> 2.what is the purpose of SQL  </h3>
  <p align="left"> Explanation: SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.<\p>

   <h1 align="left" style="color:blue"> 3.SQL COMMANDS  </h1>
   <img src="img35.png" style="width:250px; height:250px;"  alt="sql stmt diagram">
   <h3 align="left" style="color:red">DDL: Data Definition Language:</h3>
<p align="left">This includes changes to the structure of the table like creation of table, altering table, deleting a
table etc. All DDL commands are auto-committed. That means it saves all the changes
permanently in the database.<\p>
<p align="left">Commands_ Description<\p>

<p align="left">Create _ create new table or database<\p>
<p align="left">Alter _for alteration<\p>
<p align="left">Truncate _delete data from table<\p>
<p align="left">Drop_ to drop a table<\p>
<p align="left">Rename_ to rename a table<\p>
<h3 align="left" style="color:black">CREATE COMMAND<\h3>
 <p align="left"> create is a DDL SQL command used to create a table or a database in relational database
management system.<\p>
<h3 align="left">Creating a Database:<\h3>
<p align="left">To create a database in RDBMS,create command is used.<\p>

<p align="left">create command can also be used to create tables. Now when we create a table, we have to
specify the details of the columns of the tables too. We can specify the names and datatype of
various columns in the create command itself.<\p>
<p align="left">create table command will tell the database system to create a new table with the given table
name and column information.<\p>
<p align="left">Example for creating Table.<\p>
<h4 align="left">CREATE TABLE Student(student_id INT, name VARCHAR(100), pno INT);
<p align="left">The above command will create a new table with name Student in the current database with 3
columns, namely student_id,name and age. Where the column student_id will only store
integer,name will hold upto 100 characters and age will again store only integer value.<\p>
<img src="img18.JPG" style="width:200px; height:200px;"  alt="create table">
 <p align="left">databates used for<\p>
<p align="left">INT used for columns which will store integer values.<\p>
<p align="left">FLOAT used for columns which will store float values.<\p>
<p align="left">DOUBLE used for columns which will store float values.<\p>


<p align="left">CHAR used for columns which will store char values(single character).<\p>
<p align="left">DATE used for columns which will store date values.<\p>
<p align="left">TEXT used for columns which will store text which is generally long in length. For
example, if you create a table for storing profile information of a social
networking website, then for about me section you can have a column of
type TEXT.</p> 
<h3 align="left" style="color:red">Using INSERT SQL command</h3>
<p align="left">Data Manipulation Language (DML) statements are used for managing data in database. DML
commands are not auto-committed. It means changes made by DML command are not
permanent to database, it can be rolled back.</p>
<p align="left>Talking about the Insert command, whenever we post a Tweet on Twitter, the text is stored in
some table, and as we post a new tweet, a new record gets inserted in that table.</p>
<p align="left">INSERT command</p>
<p align="left">Insert command is used to insert data into a table. Following is its general syntax,
INSERT INTO table_name VALUES(data1, data2, ...)</p>

<p align="left" style="color:blue";>SQL:ALTER command:<\p>
<p align="left">alter command is used for altering the table structure, such as,<\p>
<p align="left"> To add a column to existing table<\p>
<p align="left"> To rename any existing column<\p>
<p align="left"> To change datatype of any column or to modify its size.<\p>
<p align="left"> To drop a column from the table.<\p>
<p align="left">ALTER Command: Add a new Column<\p>
<p align="left">Using ALTER command we can add a column to any existing table. Following is the syntax,<\p>
<p align="left">ALTER TABLE table_name ADD( column_name datatype);<\P>
<p align="left">Here is an Example for this,<\p>
<p align="left">ALTER TABLE student ADD( dept VARCHAR(200));<\p>
<img src="img19.JPG" style="width:200px; height:200px;"  alt="alter table">
<p align="left">The above command will add a new column address to the table student, which will hold data of
type varchar which is nothing but string, of length 200.<\p>
<p align="left">ALTER Command: Add multiple new Columns<\p>
<p align="left">Using ALTER command we can even add multiple new columns to any existing table.<\p>
<p align="left">Following is the syntax,<\p>
<p align="left">ALTER TABLE table_name ADD(column_name1 datatype1, column-name2 datatype2,
column-name3 datatype3);<\p>
<p align="left">Here is an Example for this,<\p>
<p align="left">ALTER TABLE student ADD( father_name VARCHAR(60), mother_name VARCHAR(60),
dob DATE);<\p>
<p align="left">The above command will add three new columns to the student table<\p>


<h3 align="left">ALTER Command: Rename a Column<\h3>
<p align="left">Using ALTER command you can rename an existing column. Following is the syntax,<\p>
<p align="left">ALTER TABLE table_name RENAME old_column_name TO new_column_name;<\p>


<p align="left">ALTER Command: Drop a Column<\p>
<p align="left">ALTER command can also be used to drop or remove columns. Following is the syntax,<\p>

<p align="left">ALTER TABLE table_name DROP( column_name);<\p>
<p align="left">Here is an example for this,<\p>
<p align="left">ALTER TABLE student DROP( address);<\p>

<p align="left">from above table insert a colum is department</p>
<img src="img17.JPG" style="width:200px; height:200px;"  alt="insert table">
<h3 align="left" style="color:red"> Using UPDATE SQL command</h3>
Let&#39;s take an example of a real-world problem. These days, Facebook provides an option


<p align="left">UPDATE command is used to update any record of data in a table. Following is its general
syntax,</p>
<p align="left">UPDATE table_name SET column_name = new_value WHERE some_condition;</p>
<p align="left">WHERE is used to add a condition to any SQL query, we will soon study about it in detail.</p>
<p align="left"> update command is used insert the values from alter table</p>
<img src="img15.JPG" style="width:200px; height:200px;"  alt="update table">
<h3 align="left" style="color:blue">Using DELETE SQL command</h3>
<p align="left">DELETE command</p>
<p align="left">DELETE command is used to delete data from a table.</p>
<p align="left">Following is its general syntax,
<p align="left">DELETE FROM table_name;</p>
<h3 align="left" style="color:blue">SELECT COMMAND</p>
<p align="left">select command is used to select perticular row or column or total table or perticular value will be display</p>
<p align="left">select *from table name</p>
<img src="img17.JPG" style="width:200px; height:200px;"  alt="select table">
<button  type ="button"  style="width:25%;" align="center" onclick="NORMALIZATION(); scrollWin()" class="btn btn-primary">Next</button>

</div> `;
}
    
/*  function of LEARN_SQL completed here */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */

/*it is the function of CONCEPTS_NARMALIZAITON starts here */
function NORMALIZATION(){
    document.getElementById('disappearallbuttons').innerHTML =`<div id="disappearNORMALIZATI0N">
    <h3>NORMALIZATION</h3>
    
    <button  type ="button"  style="width:25%;" align="center" onclick="TRANSACTION_CONCEPTS(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}

function NORMALIZATION(){
    document.getElementById('disappearallbuttons','disappearsql"').innerHTML =`<div id="disappearintroductiontoNORMALIZATI0N">
    <h2>NORMALIZATION</h2>
     <h4>what is normalization</h4>
<section align="left" style="margin-left:1%; ">

<details>
<summary class="btn btn-primary"><strong>REDUNDENCY MEANS</strong></summary>


<p align="left">Data redundancy is a condition created within a database or data storage technology in which the same piece of data is held in to sapetare places.This can mean two different fields within a single databate,or two different spots in multiple software environments or platforms</P>
</details>


<section align="left" style="margin-left:0%; ">
<details>
<summary class="btn btn-primary"><strong></strong> WHAT IS DECOMPOSITION</summary>
<h3 align="left" style="color:black">Decompositions:</h3>
<p>Intuitively, redundancy arises when a relational schema forces an
association between attributes that is not natural. Functional dependencies can be used to
identify such situations and suggest refinements to the schema. The essential idea is that many
problems arising from redundancy can be addressed by replacing a bigger relation with a
collection of  relations which is called decompositions.<\p>
<p align="left">We can decompose Hourly_Emps into two relations:<\p>
<p align="left">Hourly_Emps20: (ssn,name, lot, rating,hours_worked)<\p>
<p align="left">Wages (rating, hourly_wages)<\p>
<h4>3.4 PROPERTIES OF DECOMPOSITIONS</h4>

<p>3.4.1 Lossless-Join Decomposition: Let R be a relation schema and let F be a, set of FDs over R.
A decomposition of R into two schemas with attribute sets X and Y is said to be a lossless-join
decomposition with respect to F if, for every instance T of R that satisfies the dependencies in F,
π x(r) x π y(r) = T. In other words, we can recover the original relation from the
decomposed relations.</p>


<p>3.4.2 Dependency Preservation: A decomposition of a relation R into R1, R2, R3, …, Rn is
dependency preserving decomposition with respect to the set of Functional Dependencies F
that hold on R only if the following is hold;</p>
<p>(F1 U F2 U F3 U … U Fn)+ = F+</p>
<p>where,</p>
<p>F1, F2, F3, …, Fn – Sets of Functional dependencies of relations R1, R2, R3, …, Rn.
(F1 U F2 U F3 U … U Fn)+ - Closure of Union of all sets of functional dependencies.
F+ - Closure of set of functional dependency F of R.</p>
<p>If the closure of set of functional dependencies of individual relations R1, R2, R3, …, Rn are
equal to the set of functional dependencies of the main relation R (before decomposition), then
we would say the decomposition D is lossless dependency preserving decomposition.</p>
<p>Few key points:</p>
<p> We would like to check easily that updates to the database do not result in illegal
relations being created.</p>
<p> It would be nice if our design allowed us to check updates without having to compute
natural joins.</p>
<p> We can permit a non-dependency preserving decomposition if the database is static.
That is, if there is no new insertion or update in the future.</p>
<h3 align="left" style="color:blue">Problems Related to Decomposition:<\h3>
<p align="left">Unless we are careful~ decornposing a relation
scherna can create more problerns than it solves. Two important questions must be asked
repeatedly:<\p>
<p align="left">1) Do we need to decompose a relation?<\p>
<p align="left">When data gets redundancy, then normalization is to be done. There are several
normal forms and the due course of normalization, the relations should be decomposed to
avoid redundancy.<\p>
<p align="left">2. What problems (if any) does a given decomposition cause?
The two properties of decompositions are of particular interest. The lossless-join
property enables us to recover any instance of the decomposed relation from corresponding
instances of the smaller relations.<\p>
<p align="left">The dependency-preservation property enables us to enforce any constraint on the
original relation by simply enforcing constraints on each of the smaller relations. That is, we
need not perform joins of the smaller relations to check whether a constraint on the original
relation is violated.<\p>
<p align="left">From a performance standpoint, queries over the original relation may require us to join
the decomposed relations. In some situations, decomposition could actually improve
performance.<\p>
<p align="left">A good database designer should have a firm grasp of normal forms and what problems
they alleviate, the technique of decomposition, and potential problems with decompositions.<\p>

      <img src="img10.jpg" style="width:350px; height:350px;"  alt="decomposition">
</details>
<section align="left" style="margin-left:0%; ">
<details>
<summary class="btn btn-primary"><strong>FUNCTIONAL DEPENDIES</strong></summary>

<h3 align="left" style="color:red">FUNCTIONAL DEPENDENCIES:</h3>
<img src="img1.jpg" style="width:100px; height:200px;"  alt="functional depencancy">

<p align="left">Functional dependency is a relationship that exists when
one attribute uniquely determines another attribute. If R is a relation with attributes X and Y,
a functional dependency between the attributes is represented as X-&gt;Y, which specifies Y is
functionally dependent on X.</p>
<p align="left">The determination of functional dependencies is an important part of designing databases in
the relational model , and in database normalization and de-normalization . A classic example of
functional dependency is the employee, department model. The following table</p>

<p align="left>This case represents an example where multiple functional dependencies are embedded in a
single representation of data. Note that because an employee can only be a member of one
department, the unique ID of that employee determines the department.</p>



<p align="left">Employee ID → Employee Name</p>
<p align="left">Employee ID → Department ID</p>
<p align="left">In addition to this relationship, the table also has a functional dependency through a non-key
attribute Department ID → Department Name</p>
<p align="left">This example demonstrates that even though there exists a FD Employee ID → Department ID -
the employee ID would not be a logical key for determination of the department ID. The
process of normalization of the data would recognize all FD;s and allow the designer to
construct tables and relationships that are more logical based on the data.</p>

</details>
<section align="left" style="margin-left:0%; ">
<details>
<summary class="btn btn-primary"><strong>NORMAL FORMS(1NF,2NF,3NF,BCDNF,4NF,5NF</strong></summary>
<h3 align="left" style="color:red">Data Normalization</h3>
<p align="left">• Formal process of decomposing relations with anomalies to produce smaller, wellstructured
and stable relations</p>
<p align="left">• Primarily a tool to validate and improve a logical design so that it satisfies certain constraints
that avoid unnecessary duplication of data
Well-Structured Relations</p>
<p align="left">• A relation that contains minimal data redundancy and allows users to insert, delete, and update
rows without causing data inconsistencies</p>
<p align="left">• Goal is to avoid (minimize) anomalies</p>
<h3 align="left" style="color:brown">– Insertion Anomaly – adding new rows forces user to create duplicate data<\p>
<h3 align="left" style="color:brown">– Deletion Anomaly – deleting a row may cause loss of other data representing completely
different facts</h3>


<p align="left">– Modification Anomaly – changing data in a row forces changes to other rows because of
duplication</p>
<p align="left">General rule of thumb: a table should not pertain to more than one entity type<\p>

<p align="left">Steps in normalization</p>

<p align="left">Given a relation schema, we need to decide whether it is a good design or we need to
decompose it into smaller relations. Such a decision must be guided by an understanding of
what problems, if any, arise from the current schema.</p>
<p align="left">To provide such guidance, several normal forms have been proposed. If a relation schema is in
one of these normal forms, we know that certain kinds of problems cannot arise. The normal
forms based on FDs are first normal forrn (1NF), second normal forM (2NF) , third
norrnalform(3NF), and Boyce-Codd normal form (BCNF). These forms have increasingly
restrictive requirements: Every relation in BCNF is also in 3NF, every relation in 3NF is also in
2NF, and every relation in 2NF is in 1NF.</p>
<p align="left"> Normalization of Database: Database Normalisation is a technique of organizing the data
in the database. Normalization is a systematic approach of decomposing tables to eliminate
data redundancy and undesirable characteristics like Insertion, Update and Deletion Anamolies.
It is a multi-step process that puts data into tabular form by removing duplicated data from the
relation tables.</p>
<h3 align="left" style="color:red">>Normalization is used for mainly two purpose,</h3>
<p align="left"> Eliminating reduntant(useless) data.</p>
<p align="left"> Ensuring data dependencies make sense i.e data is logically stored.</p>


<p align="left"> Problem Without Normalization: Without Normalization, it becomes difficult to handle
and update the database, without facing data loss. Insertion, Updation and Deletion Anamolies
are very frequent if Database is not Normalized. To understand these anomalies let us take an
example of Student table.</p>

<p align="left"> Updation Anamoly :To update address of a student who occurs twice or more than twice in
a table, we will have to update S_Address column in all the rows, else data will become
inconsistent.</p>
<p align="left"> Insertion Anamoly : Suppose for a new admission, we have a Student id(S_id), name and
address of a student but if student has not opted for any subjects yet then we have to
insert NULL there, leading to Insertion Anamoly.</p>
<p align="left"> Deletion Anamoly :If (S_id) 401 has only one subject and temporarily he drops it, when we
delete that row, entire student record will be deleted along with it.</p>
<h3 align="left" style="color:blue"> Normalization Rule:</h3>
<p align="left">Normalization rule are divided into following normal form.</p>
<p align="left">1. First Normal Form</p>
<p align="left">2. Second Normal Form</p>
<p align="left">3. Third Normal Form</p>
<p align="left">4. BCNF</p>
<p align="left">5. Multivalve dependency (4NF, 5NF)</p>
<img src="img6.png" style="width:350px; height:350px;"  alt="normal forms">
<h3 align="left" style="color:blue">First Normal Form(1NF):</h3>
<p align="left">As per the rule of first normal form, an attribute (column) of a table
cannot hold multiple values. It should hold only atomic values. i.e. Each table cell should contain
a single value and Each record needs to be unique.</p>

<p align="left">example</p>

<iframe  src="https://www.youtube.com/embed/7F9ni-IVD90" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h3 align="left" style=color:blue">Second Normal Form (2NF):</h3>
<p align="left">An entity is said to be in the second normal form when it is already in 1NF and all the attributes
contained within it are dependent solely on the unique identifier of the entity. In other words, it
maintains two important criteria to be met in order to provide a normalized data with the second
normal form tag.<\p>
<p align="left">1) It is in the first normal form</p>
<p align="left">2) All non-key attributes are fully functional and dependent on the primary key.<\p>
<iframe  src="https://www.youtube.com/embed/Ko_LE3TNO64" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h3 align="left" style=color:red">Third Normal Form (3NF):</h3>
<p align="left">An entity is said to be in the third normal form when,</p>
<p align="left">1) It satisfies the criteria to be in the second normal form.</p>
<p align="left">2) There exists no transitive functional dependency.</p>
<p align="left">(Transitive functional dependency can be best explained with the relationship link between three
tables. If table A is functionally dependent on B, and B is functionally dependent on C then C is
transitively dependent on A and B). It can also be said that the transitive functional dependency
of non-prime attribute on any super key is removed.</p>
<p align="left">3NF states that every column reference in referenced data which are not dependent on
the primary key should be removed or that only foreign key columns should be used to
reference another table, and no other columns from the parent table should exist in the
referenced table.</p>

<iframe  src="https://www.youtube.com/embed/p62he-WUp9E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h3 align="left" style=color:blue">Boyce and Codd Normal Form (BCNF):</h3>

<p align="left">The Boyce-Codd Normal Form or BCNF or 3.5 NF is a normal form which is slightly stronger
than the 3NF. It was developed in 1974 to address certain types of anomalies that were not dealt
by 3NF. A relational scheme, once prepared in BCNF, will remove all sorts of functional
dependency (though some other forms of redundancy can prevail). Coming to the relation
between BCNF AND 3NF, in certain rare cases, the 3NF table fails to meet the requirements of
the BCNF. A 3NF table sans multiple overlapping candidate keys is guaranteed to be in BCNF
and depending on the functional dependencies of the entity, a 3NF table that possesses two or
more overlapping candidate keys may/may not be capable of being in BCNF.</p>
<iframe  src="https://www.youtube.com/embed/FGesKHcqf2c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h3 align="left" style="color:red">4NF</h3>
<h3>Fourth normal form (4NF):</h3>
<p>Fourth normal form (4NF) is a level of database normalization where there are no non-trivial multivalued dependencies other than a candidate key. It builds on the first three normal forms (1NF, 2NF and 3NF) and the Boyce-Codd Normal Form (BCNF). It states that, in addition to a database meeting the requirements of BCNF, it must not contain more than one multivalued dependency.</p>

<p>Properties – A relation R is in 4NF if and only if the following conditions are satisfied:</p>

<p>It should be in the Boyce-Codd Normal Form (BCNF).
the table should not have any Multi-valued Dependency.
A table with a multivalued dependency violates the normalization standard of Fourth Normal Form (4NK) because it creates unnecessary redundancies and can contribute to inconsistent data. To bring this up to 4NF, it is necessary to break this information into two tables.</p>
<iframe  src="https://www.youtube.com/embed/OBiNTE14EEg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



<h3 align="left" style"color:red">Fifth Normal Form / Projected Normal Form (5NF):</h3>
<p>A relation R is in 5NF if and only if every join dependency in R is implied by the candidate keys of R. A relation decomposed into two relations must have loss-less join Property, which ensures that no spurious or extra tuples are generated, when relations are reunited through a natural join.</p>

<p>Properties – A relation R is in 5NF if and only if it satisfies following conditions:</p>

<p>R should be already in 4NF.</p>
<iframe  src="https://www.youtube.com/embed/7sEMzgclzPo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</details>
    <button  type ="button"  style="width:25%;" align="center" onclick="TRANSACTION_CONCEPTS(); scrollWin()" class="btn btn-primary">Next</button>


</div>`;
}
/* it is the function of NORMALIZATION completed here */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */


function TRANSACTION_CONCEPTS(){
    document.getElementById('disappearallbuttons','disappearNORMALIZATION"').innerHTML =`<div id="disappearintroductiontoTRANSACTION_CONCEPTS">
    <h3>TRANSACTION_CONCEPTS</h3>
         <h4>TRANSACTIONS</h4>
<section align="left" style="margin-left:1%; ">

<details>
<summary class="btn btn-primary"><strong>PROPERTIES OF TRANSACTION</strong></summary>
<h3 align="left" style="color:red">TRANSACTION</h3>
<p align="left">Often, a collection of several operations on the database appears to be a single unit from the
point of view of the database user.</p>
<p align="left">For example, a transfer of funds from a checking account to a savings account is a single
operation from the customer’s standpoint; within the database system, however, it consists of
several operations.</p>
<p align="left">Collections of operations that form a single logical unit of work are called transactions. A
database system must ensure proper execution of transactions despite failures—either the
entire transaction executes, or none of it does. Furthermore, it must manage concurrent
execution of transactions in a way that avoids the introduction of inconsistency.</p>
<img src="img3.png" style="width:350px; height:350px;"  alt="transaction_state_diagram">

<h3 align="left" style="color:blue">Transaction proprties</h3>

<p align="left">A transaction is a unit of program execution that accesses and possibly updates various data
items. Usually, a transaction is initiated by a user program written in a high-level data-
manipulation language (typically SQL), or programming language (for example, C++, or Java),
with embedded database accesses in JDBC or ODBC.</p>
<p align="left">A transaction is delimited by statements (or function calls) of the form begin transaction and
end transaction. The transaction consists of all operations executed between the begin
transaction and end transaction.</p>
<p align="left">Atomicity: The collection of steps must appear to the user as a single, indivisible unit. Since a
transaction is indivisible, it either executes in its entirety or not at all. This “all-or-none”
property is referred to as atomicity. Thus, if a transaction begins to execute but fails for
whatever reason, any changes to the database that the transaction may have made must be
undone.</p>
<p align="left">Consistency: Execution of a transaction in isolation (that is, with no other transaction executing
concurrently) preserves the consistency of the database.</p>
<p align="left">Isolation: Furthermore, since a transaction is a single unit, its actions cannot appear to be
separated by other database operations not part of the transaction. Therefore, the database
system must take special actions to ensure that transactions operate properly without
interference from concurrently executing database statements.</p>
<p align="left">Durability: After a transaction completes successfully, the changes it has made to the database
persist, even if there are system failures.</p>
<p align="left">These properties are often called the ACID properties</p>
<img src="img4.jpg" style="width:350px; height:350px;"  alt="transaction_properties">
<iframe  src="https://www.youtube.com/embed/fFY8cIEEFa8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</details>
<section align="left" style="margin-left:0%; ">
<details>
<summary class="btn btn-primary"><strong>SERIALIZABILITY</strong></summary>
<p align="left">Before we can consider how the concurrency-control component of the database system can
ensure serializability, we consider how to determine when a schedule is serializable. Certainly,
serial schedules are serializable, but if steps of multiple transactions are interleaved, it is harder
to determine whether a schedule is serializable.</p>
<p align="left">Since transactions are programs, it is difficult to determine exactly what operations a
transaction performs and how operations of various transactions interact. For this reason,we
shall not consider the various types of operations that a transaction can perform on a data
item, but instead consider only two operations: read and write.</p>
<p align="left">We assume that, between a read(Q) instruction and a write(Q) instruction on a data item Q, a
transaction may perform an arbitrary sequence of operations on the copy of Q that is residing
in the local buffer of the transaction.</P>
<h3 align="left" style="color:yellow">Conflict serializability:</h3>
<p align="left">Let us consider a schedule S in which there are two consecutive instructions, I and J , of
transactions Ti and Tj , respectively (i ≠ j). If I and J refer to different data items, then we can
swap I and J without affecting the results of any instruction in the schedule. However, if I and J
refer to the same data item Q, then the order of the two steps may matter. Since we are
dealing with only read and write instructions, there are four cases that we need to consider:<\p>
<p align="left">1. I = read(Q), J = read(Q). The order of I and J does not matter, since the same value of Q is
read by Ti and Tj , regardless of the order.</p>
<p align="left">2. I = read(Q), J = write(Q). If I comes before J , then Ti does not read the value of Q that is
written by Tj in instruction J . If J comes before I, then Ti reads the value of Q that is written by
Tj. Thus, the order of I and J matters.</p>

<p align="left">3. I = write(Q), J = read(Q). The order of I and J matters for reasons similar to those of the
previous case.</p>
<p align="left">4. I = write(Q), J = write(Q). Since both instructions are write operations, the order of these
instructions does not affect either Ti or Tj . However, the value obtained by the next read(Q)
instruction of S is affected, since the result of only the latter of the two write instructions is
preserved in the database. If there is no other write(Q) instruction after I and J in S, then the
order of I and J directly affects the final value of Q in the database state that results from
schedule S.<\p>
<p align="left">We say that I and J conflict if they are operations by different transactions on the same data
item, and at least one of these instructions is a write operation.<\p>
</details>


<section align="left" style="margin-left:0%; ">


<details>
<summary class="btn btn-primary"><strong>CONCURRENCY CONTROL</strong></summary>
<h3 align="left" style="color:red">Lock-Based Protocols:</h3>
<p align="left">One way to ensure isolation is to require that data items be accessed in a
mutually exclusive manner; that is, while one transaction is accessing a data item, no other
transaction can modify that data item. The most common method used to implement this
requirement is to allow a transaction to access a data item only if it is currently holding a lock
on that item.</p>
<p align="left">Locks: The two modes of locks are:</p>
<p align="left">1. Shared. If a transaction Ti has obtained a shared-mode lock (denoted by S) on item Q, then Ti
can read, but cannot write, Q.</P>
<p align="left">2. Exclusive. If a transaction Ti has obtained an exclusive-mode lock (denoted by X) on item Q,
then Ti can both read and write Q.</p>

<p align="left">When transactions request locks on data items, the concurrency control manager grants the
locks based on their compatibility. Any transactions can apply shared locks on the same data
item. When shared locks are applied, the transactions can read the data. No other locks can be
applied on exclusive lock. The, transaction Ti is made to wait until all incompatible locks held
by other transactions have been released.</p>

<p align="left">Improper sharing of resources i.e data items leads to a situation called deadlock. When
deadlock occurs, the system must roll back one of the two transactions. Once a transaction has
been rolled back, the data items that were locked by that transaction are unlocked. These data
items are then available to the other transaction, which can continue with its execution.</p>

<p align="left">We shall require that each transaction in the system follow a set of rules, called a locking
protocol, indicating when a transaction may lock and unlock each of the data items.</p>
<p align="left">Granting of Locks:</p>
<p align="left">When a transaction requests a lock on a data item in a particular mode, and no other
transaction has a lock on the same data item in a conflicting mode, the lock can be granted.
However, care must be taken to avoid the following scenario.</p>
<p align="left">Starvation: Suppose a transaction T2 has a shared-mode lock on a data item, and another
transaction T1 requests an exclusive-mode lock on the data item. Clearly, T1 has to wait for T2
to release the shared-mode lock. Meanwhile, a transaction T3 may request a shared-mode lock
on the same data item. The lock request is compatible with the lock granted to T2, so T3 may
be granted the shared-mode lock. At this point T2 may release the lock, but still T1 has to wait
for T3 to finish. But again, there may be a new transaction T4 that requests a shared-mode lock
on the same data item, and is granted the lock before T3 releases it. In fact, it is possible that

there is a sequence of transactions that each requests a shared-mode lock on the data item,
and each transaction releases the lock a short while after it is granted, but T1 never gets the
exclusive-mode lock on the data item. The transaction T1 may never make progress, and is said
to be starved.</p>

<p align="left" style="color:red">The Two-Phase Locking Protocol</p>
<p align="left">One protocol that ensures serializability is the two-phase locking protocol. This
protocol requires that each transaction issue lock and unlock requests in two phases:</p>
<p align="left">1. Growing phase. A transaction may obtain locks, but may not release any lock.</p>
<p align="left">2. Shrinking phase. A transaction may release locks, but may not obtain any new locks.</p>
<p align="left">Initially, a transaction is in the growing phase. The transaction acquires locks as needed. Once
the transaction releases a lock, it enters the shrinking phase, and it can issue no more lock
requests. The point in the schedule where the transaction has obtained its final lock (the end of
its growing phase) is called the lock point of the transaction. Two-phase locking does not ensure
freedom from deadlock. Cascading rollbacks can be avoided by a modification of two-phase
locking called the strict two-phase locking protocol. Another variant of two-phase locking is
the rigorous two-phase locking protocol, which requires that all locks be held until the
transaction commits.</p>

<p align="left">Lock Conversions: This observation leads us to a refinement of the basic two-phase locking
protocol, in which lock conversions are allowed. We shall provide a mechanism for upgrading a
shared lock to an exclusive lock, and downgrading an exclusive lock to a shared lock. Lock
conversion cannot be allowed arbitrarily. Rather, upgrading can take place in only the growing
phase, whereas downgrading can take place in only the shrinking phase.<\p>

<p align="left">• When a transaction Ti issues a read(Q) operation, the system issues a lock-S(Q) instruction
followed by the read(Q) instruction.</p>
<p align="left">• When Ti issues a write(Q) operation, the system checks to see whether Ti already holds a
shared lock on Q. If it does, then the system issues an upgrade(Q) instruction, followed by the
write(Q) instruction. Otherwise, the system issues a lock-X(Q) instruction, followed by the
write(Q) instruction</p>.
<p align="left">• All locks obtained by a transaction are unlocked after that transaction commits or aborts.</p>
<p align="left">Implementation of Locking:</P>
<p align="left>A lock manager can be implemented as a process that receives messages from transactions and
sends messages in reply. The lock-manager process replies to lock-request messages with lock-
grant messages, or with messages requesting rollback of the transaction . Unlock messages
require only an acknowledgment in response, but may result in a grant message to another
waiting transaction.</p>
<p align="left>The lock manager uses this data structure: For each data item that is currently locked, it
maintains a linked list of records, one for each request, in the order in which the requests
arrived. It uses a hash table, indexed on the name of a data item, to find the linked list (if any)
for a data item; this table is called the lock table. Each record of the linked list for a data item
notes which transaction made the request, and what lock mode it requested. The record also
notes if the request has currently been granted.</p>
<p align="left">The lock manager processes requests this way:</p>
<p align="left">• When a lock request message arrives, it adds a record to the end of the linked list for the data
item, if the linked list is present. Otherwise it creates a new linked list, containing only the
record for the request.</p>
<p align="left">It always grants a lock request on a data item that is not currently locked. But if the transaction
requests a lock on an item on which a lock is currently held, the lock manager grants the
request only if it is compatible with the locks that are currently held, and all earlier requests
have been granted already. Otherwise the request has to wait.</p>

<p align="left">• When the lock manager receives an unlock message from a transaction, it deletes the record
for that data item in the linked list corresponding to that transaction. It tests the record that
follows, if any, as described in the previous paragraph, to see if that request can now be
granted. If it can, the lock manager grants that request, and processes the record following it, if
any, similarly, and so on.</p>


<p align="left">Graph-Based Protocols:</p>
<p align="left">To have the prior knowledge about the order in which the database items will be accessed, it is
possible to construct locking protocols that are not two phase, but that, nevertheless, ensure
conflict serializability.</p>
<p align="left">To acquire such prior knowledge, we impose a partial ordering→on the set
D = {d1, d2, . . . , dh} of all data items. If di → dj , then any transaction accessing the result of
either the logical or the physical organization of the data, or it may be imposed solely for the
purpose of concurrency control</p>.
<p align="left">Tree Protocol:</p>
<p align="left">In the tree protocol, the only lock instruction allowed is lock-X. Each transaction
Ti can lock a data item at most once, and must observe the following rules:</p>

<p align="left">1. The first lock by Ti may be on any data item.
2. Subsequently, a data item Q can be locked by Ti only if the parent of Q is
currently locked by Ti .
3. Data items may be unlocked at any time.
4. A data item that has been locked and unlocked by Ti cannot subsequently
be relocked by Ti .<\p>
<iframe  src="https://www.youtube.com/embed/d4Ziyuri0L0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</details>

<section align="left" style="margin-left:0%; ">
<details>
<summary class="btn btn-primary"><strong> DEAD LOCK</strong></summary>
<h3 align="left" style="color:red">Dead Lock:</h3>
<p align="left">A system is in a deadlock state if there exists a set of transactions such that every transaction in
the set is waiting for another transaction in the set. More precisely, there exists a set of waiting
transactions {T0, T1, . . . , Tn} such that T0 is waiting for a data item that T1 holds, and T1 is
waiting for a data item that T2 holds, and . . . , and Tn−1 is waiting for a data item that Tn holds,
and Tn is waiting for a data item that T0 holds. None of the transactions can make progress in
such a situation.</p>
<p align="left">There are two principal methods for dealing with the deadlock problem. We can use a deadlock
prevention protocol to ensure that the system will never enter a deadlock state. Alternatively,
we can allow the system to enter a deadlock state, and then try to recover by using a deadlock
detection and deadlock recovery scheme.</p>

<p align="left">Dead Lock Prevention:</p>
<p align="left">Various locking protocols do not guard against deadlocks. One way to prevent deadlock is to
use an ordering of data items, and to request locks in a sequence consistent with the ordering.
Another way to prevent deadlock is to use preemption and transaction rollbacks. To control the
preemption, we assign a unique timestamp to each transaction. The system uses these
timestamps to decide whether a transaction should wait or roll back. If a transaction is rolled
back, it retains its old timestamp when restarted.</p>
<p align="left">Two different deadlock-prevention schemes using timestamps have been proposed:</p>
<p align="left">1. The wait–die scheme is a non preemptive technique. When transaction Ti requests a data
item currently held by Tj , Ti is allowed to wait only if it has a timestamp smaller than that of Tj
(that is, Ti is older than Tj ). Otherwise, Ti is rolled back (dies).</p>
<p align="left">2. The wound–wait scheme is a preemptive technique. It is a counterpart to the wait–die
scheme. When transaction Ti requests a data item currently held by Tj , Ti is allowed to wait
only if it has a timestamp larger than that of Tj (that is, Ti is younger than Tj ). Otherwise, Tj is
rolled back (Tj is wounded by Ti ).</p>
<p align="left">Deadlock Detection:</p>
<p align="left">Deadlocks can be described precisely in terms of a directed graph called a waitfor graph. This
graph consists of a pair G = (V, E), where V is a set of vertices and
E is a set of edges. The set of vertices consists of all the transactions in the system.</p>

<p align="left">Each element in the set E of edges is an ordered pair Ti → Tj. If Ti → Tj is in E, then there is a
directed edge from transaction Ti to Tj , implying that transaction Ti is waiting for transaction Tj
to release a data item that it needs.</p>
<p align="left">When transaction Ti requests a data item currently being held by transaction Tj , then the edge
Ti → Tj is inserted in the wait-for graph. This edge is removed only when transaction Tj is no
longer holding a data item needed by transaction Ti .</p>
<p align="left">A deadlock exists in the system if and only if the wait-for graph contains a cycle. Each
transaction involved in the cycle is said to be deadlocked. To detect deadlocks, the system
needs to maintain the wait-for graph, and periodically to invoke an algorithm that searches for
a cycle in the graph.</p>
<h3 align="left" style="color:red">Recovery from Deadlock:</h3>
<p align="left">When a detection algorithm determines that a deadlock exists, the system must recover from
the deadlock. The most common solution is to roll back one or more transactions to break the
deadlock. Three actions need to be taken:</p>
<p align="left">1. Selection of a victim. Given a set of deadlocked transactions, we must determine which
transaction (or transactions) to roll back to break the deadlock. We should roll back those
transactions that will incur the minimum cost. Many factors may determine the cost of a
rollback, including:</P>
<p align="left">a. How long the transaction has computed, and how much longer the transaction will compute
before it completes its designated task.</p>
<p align="left">. How many data items the transaction has used.</p>
<p align="left">c. How many more data items the transaction needs for it to complete.</p>
<p align="left">d. How many transactions will be involved in the rollback.</p>

<p align="left">2. Rollback. The simplest solution is a total rollback: Abort the transaction and then restart it.</p>
<p align="left">However, it is more effective to roll back the transaction only as far as necessary to break the
deadlock. Such partial rollback requires the system to maintain additional information about
the state of all the running transactions. Specifically, the sequence of lock requests/grants and
updates performed by the transaction needs to be recorded. The selected transaction must be
rolled back to the point where it obtained the first of these locks, undoing all actions it took
after that point.</p>
<p align="left">3. Starvation. In a system where the selection of victims is based primarily on cost factors, it
may happen that the same transaction is always picked as a victim. As a result, this transaction
never completes its designated task, thus there is starvation. We must ensure that a transaction
can be picked as a victim only a (small) finite number of times. The most common solution
is to include the number of rollbacks in the cost factor.</p>
</details>
</details>

<section align="left" style="margin-left:0%; ">
<details>
<summary class="btn btn-primary"><strong>ARIES</strong></summary>
<img src="img5.jpg" style="width:350px; height:350px;"  alt="ARIS">
<p align="left">Introduction: The ARIES recovery scheme is a state-of-the-art scheme that supports a number
of features to provide greater concurrency, reduce logging overheads, and minimize recovery
time. It is also based on repeating history, and allows logical undo operations. The scheme
flushes pages on a continuous basis and does not need to flush all pages at the time of a
checkpoint. It uses log sequence numbers (LSNs) to implement a variety of Optimizations that
reduce the time taken for recovery.</p>

<p align="left">ARIES: ARIES uses a number of techniques to reduce the time taken for recovery, and to reduce
the overhead of checkpointing. In particular, ARIES is able to avoid redoing many logged
operations that have already been applied and to reduce the amount of information logged.
The price paid is greater complexity; the benefits are worth the price. The major differences
between ARIES and the recovery algorithm presented earlier are that ARIES:</p>
</p>1. Uses a log sequence number (LSN) to identify log records, and stores LSNs in database pages
to identify which operations have been applied to a database page.</p>
<p align="left">2. Supports physiological redo operations, which are physical in that the affected page is
physically identified, but can be logical within the page.</p>
<p align="left">3. Uses a dirty page table to minimize unnecessary redos during recovery. As mentioned earlier,
dirty pages are those that have been updated in memory, and the disk version is not up-to-
date.</p>
<p align="left">4. Uses a fuzzy-checkpointing scheme that records only information about dirty pages and
associated information and does not even require writing of dirty pages to disk. It flushes dirty
pages in the background, continuously, instead of writing them during checkpoints.</p>
<h3 align="left" style="color:blue">Recovery Algorithm: ARIES recovers from a system crash in three passes.</h3>
<p align="left">• Analysis pass: This pass determines which transactions to undo, which pages were dirty at the
time of the crash, and the LSN from which the redo pass should start.</p>
<p align="left">• Redo pass: This pass starts from a position determined during analysis, and performs a redo,
repeating history, to bring the database to a state it was in before the crash.</p>
<p align="left">• Undo pass: This pass rolls back all transactions that were incomplete at the time of crash.</p>
<p align="left">Other Features: Among other key features that ARIES provides are:</p>
<p align="left">• Nested top actions: ARIES allows the logging of operations that should not be undone even if
a transaction gets rolled back. Such operations that should not be undone are called nested top
actions.</p>
<p align="left">• Recovery independence: Some pages can be recovered independently from others, so that
they can be used even while other pages are being recovered. If some pages of a disk fail, they
can be recovered without stopping transaction processing on other pages.</p>
<p align="left">• Savepoints: Transactions can record savepoints, and can be rolled back partially, up to a
savepoint. This can be quite useful for deadlock handling, since transactions can be rolled back
up to a point that permits release of required locks, and then restarted from that point.
Programmers can also use savepoints to undo a transaction partially, and then continue
execution.</p>
<p align="left">• Fine-grained locking: The ARIES recovery algorithm can be used with index concurrency-
control algorithms that permit tuple-level locking on indices, instead of page-level locking,
which improves concurrency significantly.</p>
<p align="left">• Recovery optimizations: The DirtyPageTable can be used to prefetch pages during redo,
instead of fetching a page only when the system finds a log record to be applied to the page.
Out-of-order redo is also possible: Redo can be postponed on a page being fetched from disk,
and performed when the page is fetched. Meanwhile, other log records can continue to be
processed.</p>


</details>


<section align="left" style="margin-left:0%; ">




<section align="left" style="margin-LEFT:0%; ">
<details>
<summary class="btn btn-primary"><strong>THOMA'S RLUE</strong></summary>
<h3 align="center" style="color:blue">Thomas’ Write Rule:</h3>
<p align="left">A modification to the timestamp-ordering protocol that allows greater potential concurrency
than does the protocol. A modified version of the timestamp-ordering protocol in which
obsolete write operations can be ignored under certain circumstances. The protocol rules for
read operations remain unchanged. The protocol rules for write operations, however, are
<p align="left">slightly different from the timestamp-ordering protocol.</p>
The modification to the timestamp-ordering protocol, called Thomas’ write rule, is this:
Suppose that transaction Ti issues write(Q).</p>
<p align="left">1. If TS(Ti ) &lt; R-timestamp(Q), then the value of Q that Ti is producing was previously needed,
and it had been assumed that the value would never be produced. Hence, the system rejects
the write operation and rolls Ti back.</p>
<p align="left">2. If TS(Ti ) &lt; W-timestamp(Q), then Ti is attempting to write an obsolete value of Q. Hence, this
write operation can be ignored.</p>
v3. Otherwise, the system executes the write operation and setsW-timestamp(Q) to TS(Ti ).</p>


    <button  type ="button"  style="width:25%;" align="center" onclick="DBMS_ADVANCED(); scrollWin()" class="btn btn-primary">COMING SOON</button>


</div>`;
}
/* it is the function of TRANSACTION_CONCEPTS completed here */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */
/********************************************************************************************************************************************************** */


