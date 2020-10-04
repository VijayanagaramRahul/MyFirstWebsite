<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>mocktest</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    
    <script>
    window.onload = () => {
    let el = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
    el.parentNode.removeChild(el);
}
</script>
    <div class="grid">
        <div id="quiz">
            <h1>Quiz</h1>
            <hr style="margin-bottom: 20px">

            <p id="question"></p>

            <div class="buttons">
                <button id="btn0"><span id="choice0"></span></button>
                <button id="btn1"><span id="choice1"></span></button>
                <button id="btn2"><span id="choice2"></span></button>
                <button id="btn3"><span id="choice3"></span></button>
            </div>

            <hr style="margin-top: 50px">
            <footer>
                <p id="progress">Question x of y</p>
                <a style="margin-left:40%;" href="#" type="button" class="btn btn-success">Results</a>
            </footer>
        </div>
    </div>

<script src="quiz.js"></script>
<script src="question.js"></script>
<script src="app1.js"></script>
</body>
</html>