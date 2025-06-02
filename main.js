function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
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
    document.getElementById('waitlist-btn').addEventListener('click', function () {
      const emailInput = document.getElementById('waitlist-email');
      const messageBox = document.getElementById('waitlist-message');
      const email = emailInput.value.trim();
  
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        messageBox.textContent = 'Please enter a valid email address.';
        messageBox.style.color = 'red';
        return;
      }
  
      messageBox.textContent = 'Thanks for joining the waitlist!';
      messageBox.style.color = 'limegreen';
      emailInput.value = '';
    });
  
    // FAQ toggling logic
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.question');
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
  
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          i.querySelector('.toggle').textContent = '+';
        });
  
        if (!isOpen) {
          item.classList.add('open');
          item.querySelector('.toggle').textContent = '−';
        }
      });
    });
  });
  