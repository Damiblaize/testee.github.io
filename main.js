function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');

  const menuIcon = document.getElementById('menuIcon');
  menuIcon.textContent = sidebar.classList.contains('open') ? '✖' : '☰';
}



window.addEventListener('DOMContentLoaded', () => {
    // Waitlist form handling
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('waitlist-form');
    const emailInput = document.getElementById('waitlist-email');
    const messageBox = document.getElementById('waitlist-message');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = emailInput.value.trim();
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
      if (!email) {
        showMessage("❌ Please enter your email.", "red");
      } else if (!emailPattern.test(email)) {
        showMessage("⚠️ Invalid email format.", "orange");
      } else {
        showMessage("✅ You're on the waitlist!", "green");
        emailInput.value = '';
      }
    });
  
    function showMessage(msg, color) {
      messageBox.textContent = msg;
      messageBox.style.color = color;
    }
  
    // FAQ toggle
    const faqs = document.querySelectorAll('.faq');
  
    faqs.forEach((faq) => {
      faq.addEventListener('click', () => {
        faqs.forEach(f => f.classList.remove('active'));
        faq.classList.toggle('active');
      });
    });
  });
   
   
   
   
   
    const toast = document.createElement('div');
    toast.innerText = "🔥 Welcome to the Phoenix Ecosystem!";
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(255, 115, 0, 0.9)',
      color: '#fff',
      padding: '12px 20px',
      borderRadius: '8px',
      fontSize: '14px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      zIndex: 9999,
      transition: 'opacity 0.5s',
      opacity: '1'
    });
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, 4000); // disappears after 4 seconds
  });

 
  


  document.addEventListener('DOMContentLoaded', function () {
    // Waitlist form logic
    const joinButton = document.getElementById('waitlist-join-btn');
    const emailInput = document.getElementById('waitlist-email');
    const messageBox = document.getElementById('waitlist-message');
  
    joinButton.addEventListener('click', function () {
      const email = emailInput.value.trim();
  
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        messageBox.textContent = 'Please enter a valid email address.';
        messageBox.style.color = 'red';
        messageBox.classList.remove('waitlist-hidden');
        return;
      }
  
      messageBox.textContent = 'Thanks for joining the waitlist!';
      messageBox.style.color = 'limegreen';
      messageBox.classList.remove('waitlist-hidden');
      emailInput.value = '';
    });
  
    // FAQ toggle logic
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.question');
      const toggle = item.querySelector('.toggle');
  
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
  
        // Close all FAQs
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          const t = i.querySelector('.toggle');
          if (t) t.textContent = '+';
        });
  
        // Toggle current
        if (!isOpen) {
          item.classList.add('open');
          if (toggle) toggle.textContent = '−';
        }
      });
    });
  });
  
  