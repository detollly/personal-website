document.getElementById('name').addEventListener('mouseover', function() { 
    this.setAttribute('placeholder', 'Enter your name'); }); 
    
document.getElementById('name').addEventListener('mouseout', function() { 
    this.setAttribute('placeholder', ''); }); 
    
document.getElementById('email').addEventListener('mouseover', function() { 
    this.setAttribute('placeholder', 'Enter your email'); }); document.getElementById('email').addEventListener('mouseout', function() { this.setAttribute('placeholder', ''); });

document.getElementById('contact-form').addEventListener('submit', function(event) { 
    event.preventDefault(); // Prevent default form submission 

    const form = event.target; 
    const formData = new FormData(form); 
    
    fetch(form.action, { 
        method: form.method, 
        body: formData, 
        headers: { 
            'Accept': 'application/json' 
        } 
    }).then(response => { 
        if (response.ok) { 
            alert('Thank you for your message!'); 
            form.reset(); 
        } else { 
            alert('Oops! There was a problem submitting your form.'); 
        } 
    }).catch(error => { 
        alert('There was a network error. Please try again later.'); 
    }); 
});
