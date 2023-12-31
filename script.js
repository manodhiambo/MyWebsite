	    document.addEventListener('DOMContentLoaded', function() {
	    const scrollLinks = document.querySelectorAll('a[href^="#"]');
		            
	     scrollLinks.forEach(link => {
				         link.addEventListener('click', function(e) {
					 e.preventDefault();
							                
				          const targetId = this.getAttribute('href').substring(1);
					  const targetElement = document.getElementById(targetId);
							                
					  if (targetElement) {
					     window.scrollTo({
							top: targetElement.offsetTop - 50,
							behavior: 'smooth'
								});
							 }
							            });
				            });
		        })


	    document.addEventListener('DOMContentLoaded', function() {
		            const contactForm = document.getElementById('contact-form');

		            contactForm.addEventListener('submit', function(e) {
				                e.preventDefault();


	 // Simple form validation
	 const name = document.getElementById('name').value.trim();
	 const email = document.getElementById('email').value.trim();
	 const message = document.getElementById('message').value.trim();
	 if (name === '' || email === '' || message === '') {
	       alert('Please fill out all fields in the form.');
	       return;
	}

				      alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
				            });
		        });
