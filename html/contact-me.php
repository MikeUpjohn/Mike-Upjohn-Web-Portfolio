<?php
	$isFormValid = true;

	if(isset($_POST['send-message'])) {
		$fullname = $_POST['full-name'];
		$email = $_POST['email-address'];
		$subject = $_POST['subject'];
		$message = $_POST['message'];

		$validationErrors = "";

		if(strlen($fullname) == 0) {
			$validationErrors .= "You didn't enter your name. Please enter this and try again.<br/>";
			$isFormValid = false;
		}
		else if(strlen($fullname) > 50) {
			$validationErrors .= "The name you entered was too long to send. Please shorten this and try again.<br/>";
			$isFormValid = false;
		}

		if(strlen($email) == 0) {
			$validationErrors .= "You didn't enter an e-mail address. Please enter this and try again.<br/>";
			$isFormValid = false;
		}
		else if(strlen($email) > 250) {
			$validationErrors .= "The e-mail address you enteres was too long. Please shorten it and try again.<br/>";
			$isFormValid = false;
		}

		if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$validationErrors .= "The e-mail address you entered was badly formed. Please try again.<br/>";
			$isFormValid = false;
		}

		if(strlen($subject) > 150) {
			$validationErrors .= "The subject you entered was too long. Please shorten it and try again.<br/>";
			$isFormValid = false;
		}

		if(strlen($message) == 0) {
			$validationErrors .= "You left your message blank. Please fill this in and try again.<br/>";
			$isFormValid = false;
		}

		if($isFormValid) {
			mail("michael.upjohn@hotmail.co.uk", "Mike Upjohn Web Portfolio: " . " " . $subject, $fullname . " at " . $email . " says:- \n\n" . $message);
		}
	}
?>
<html>
	<head>
		<title>Mike Upjohn - Web Developer and Meteorologist - Contact Me!</title>
		<link type='text/css' rel='stylesheet' href='../styles/main.css' />
		<link type='text/css' rel='stylesheet' href='../styles/form.css' />
		<link type='image/png' rel='icon' href='../images/favicon.png' />

		<meta name="description" content="Mike Upjohn Web Developer and Amateur Meteorologist Web Portfolio - Contact Me" />
		<meta name="keywords" content="Mike, Upjohn, Web, Developer, Amateur, Meteorologist, Web Developer, Web Programmer, Programming, Weather, .NET, HTML, CSS, JavaScript, C#, jQuery, Mike Upjohn, Michael, mikeofmacc, michael.upjohn, contact, contact me, contactme" />
		<meta name="author", content="Michael Upjohn" />
		<meta charset="utf-8" />
	</head>
	<body>
		<div class='top-bar'></div>
			<div class='content'>
			<header>
				<h1>Mike Upjohn</h1>
				<h3>Contact Me</h3>
			</header>
			<nav>
				<a href='../index.html'>Home</a>
				<a href='about-me.html'>About Me</a>
				<a href='portfolio.html'>Portfolio</a>
				<a href='contact-me.php'>Contact Me</a>
			</nav>
			<div class='main-content-area'>
				<article>
					<h4>Contact Me</h4>
					<p>Feel free to contact me using the form below, whether it be questions about the work already on here, questions about how I have got to this point and
						requests for work.</p>
						<p>I am currently accepting offers for work, please don't hesitate to contact me if this is the case. I look forward to hearing from you, and I will
							try my best to reply to your messages within 14 days.
					<?php
						if(isset($_POST['send-message']) && $isFormValid == false) {
							echo "<div class='validation-errors'>";
								echo $validationErrors;
							echo "</div>";
						}
					?>
					<div class='contact-form-container'>
						<form name='contact-form' id='contact-form' action='#' method='post'>
							<div class='form-item'>
								<span id='your-full-name' class='inline-form-item'>Your Full Name: </span><span class='asterisk'>*</span>
								<span id='your-full-name-field' class='inline-form-item'><input type='text' name='full-name' id='full-name' value='' class='formfield' /></span>
							</div>
							<div class='form-item'>
								<span id='your-email-address' class='inline-form-item'>Your E-mail Address: </span><span class='asterisk'>*</span>
								<span id='your-email-address-field' class='inline-form-item'><input type='text' name='email-address' id='email-address' value='' class='formfield' /></span>
							</div>
							<div class='form-item'>
								<span id='your-subject' class='inline-form-item'>Subject: </span><span class='asterisk'></span>
								<span id='your-subject-field' class='inline-form-item'><input type='text' name='subject' id='subject' value='' class='formfield' /></span>
							</div>
							<div class='form-item' id='message-form-item'>
								<span class='inline-form-item-container'>
									<span id='your-message' class='inline-form-item'>Message: </span>
									<span class='inline-asterisk'>*</span>
								</span>
								<span id='your-message-field' class='inline-form-item'>
									<textarea name='message' id='message' rows="10" cols="40"></textarea>
								</span>
							</div>
							<div class='form-item'>
								<span id='submit'>
									<input type='submit' name='send-message' id='send-message' value='Send' class='all-buttons' />
 								</span>
							</div>
						</form>
					</div>
				</article>
			</div>
			<footer>
				&copy; Michael Upjohn 2013 except where stated.
			</footer>
		</div>
		
		<!-- Start of StatCounter Code for Default Guide -->
		<script type="text/javascript">
			var sc_project=9177814; 
			var sc_invisible=1; 
			var sc_security="bc27a448"; 
			var scJsHost = (("https:" == document.location.protocol) ?
			"https://secure." : "http://www.");
			document.write("<sc"+"ript type='text/javascript' src='" + scJsHost + "statcounter.com/counter/counter.js'></"+"script>");
		</script>
		<noscript>
			<div class="statcounter">
				<a title="create counter" href="http://statcounter.com/free-hit-counter/" target="_blank"><img class="statcounter" src="http://c.statcounter.com/9177814/0/bc27a448/1/" alt="create counter"></a>
			</div>
		</noscript>
		<!-- End of StatCounter Code for Default Guide -->
		
	</body>
</html>