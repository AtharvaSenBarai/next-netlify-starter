<link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous>
<link rel=stylesheet href=./css/style.css>
<script src=./js/sweetalert2.js></script>
<link href="https://fonts.googleapis.com/css?family=Nunito:400,700" rel=stylesheet>
<title>Log in | Mini Diary</title>
<body class=bg-light>
<div class=container-fluid>
<div class="row mx-1">
<div class="col-lg-10 col-md-10 offset-lg-1 offset-md-1 text-center mt-5 pb-4 text-primary">
<h1 class=h1>Welcome Back Login here to see your profile</h1>
</div>
<div class="col-lg-10 col-md-10 offset-lg-1 offset-md-1 bg-white shadow mb-5 border border-primary">
<div class=row>
<div class="col-lg-6 col-md-6 p-4 bg-primary divCover">
<img src=./images/firebase_logo.png alt="Firebase cover image">
</div>
<div class="col-lg-6 col-md-6 p-lg-5 p-md-5 px-3 py-4">
<div id=signInForm>
<h2 class="h2 text-center text-dark mb-3">Login</h2>
  <div class="text-center">
			<p>Sign in with :</p>
			<button id="google-auth" class="btn btn-primary">Google</button>
		</div>
<div class=form-group>
<label for=userSIEmail>Email adress<span class="text-danger ml-1">*</span></label>
<input type=email class=form-control id=userSIEmail onblur="checkUserSIEmail()"placeholder=mail@mail.com>
<small id=userSIEmailError class="form-text text-danger">Please check your login information.</small>
</div>
<div class=form-group>
<label for=userSIPassword>Password<span class="text-danger ml-1">*</span></label>
<input type=password class=form-control id=userSIPassword onblur=checkUserSIPassword() placeholder=password>
<small id=userSIPasswordError class="form-text text-danger">Please check your password.</small>
</div>
<button type=button class="btn btn-outline-primary text-uppercase mb-3" onclick=signIn()>Sign In</button>
<p>Forget Password? Reset Password now: <a href=./pages/reset-password.html><strong class="text-primary text-uppercase showSignUpForm">Reset</strong></a></p>
<p>Not a member yet? Become a member: <a href=./pages/sign-up.html><strong class="text-primary text-uppercase showSignUpForm">Sign Up</strong></a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script>
<script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script>
<script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script>
<script src=https://www.gstatic.com/firebasejs/5.9.4/firebase.js></script>
<script src=https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js></script>
<script src=https://www.gstatic.com/firebasejs/7.3.0/firebase-analytics.js></script>
<script src=https://www.gstatic.com/firebasejs/6.1.1/firebase-auth.js></script>
<script src=https://www.gstatic.com/firebasejs/6.1.1/firebase-database.js></script>
<script>var firebaseConfig={apiKey:"AIzaSyDIdSpACQbc1-_JICLQ6gRjl_YrX25eiOA",authDomain:"mini-diary-organization.firebaseapp.com",databaseURL:"https://mini-diary-organization-default-rtdb.firebaseio.com",projectId:"mini-diary-organization",storageBucket:"mini-diary-organization.appspot.com",messagingSenderId:"542075449644",appId:"1:542075449644:web:26133a6448c78f79927c89",measurementId:"G-26RQZMG8W6"};firebase.initializeApp(firebaseConfig);firebase.analytics();</script>
<script src=./js/app.js></script>
<script src=app.js></script>
<script src=./Auth/googleAuth.js></script>
</body>

