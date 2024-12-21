// Contact Modal Functions
function showContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'flex';
    modal.classList.add('fade-in'); // Add fade-in effect
}

function hideContactModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.remove('fade-in'); // Remove fade-in effect
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Wait for fade-out effect before hiding
}

// Function to switch tabs
function switchTab(tabName) {
    const overviewSection = document.getElementById('overview-section');
    const technicalSection = document.getElementById('technical-section');
    const tabs = document.querySelectorAll('.tab');

    if (tabName === 'overview') {
        overviewSection.style.display = 'block';
        technicalSection.style.display = 'none';
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        overviewSection.style.display = 'none';
        technicalSection.style.display = 'block';
        tabs[0].classList.remove('active');
        tabs[1].classList.add('active');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        hideContactModal();
    }
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // إضافة حدث click على سعر اللابتوب
    const priceTag = document.querySelector('.price-tag');
    if (priceTag) {
        priceTag.addEventListener('click', function() {
            alert('السعر مع الحقيبة هو 583,750 د.ع والسعر بدون الحقيبة هو 563,760 د.ع');
        });
    }
});

// إضافة تأثيرات متحركة عند تحميل الصفحة
window.onload = function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        section.style.opacity = 1;
    });
};

// تأكد من إضافة Font Awesome لاستخدام الأيقونات
document.head.innerHTML += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">';

function showContactModalNew() {
    document.getElementById('contactModal').style.display = 'block';
}

function hideContactModalNew() {
    document.getElementById('contactModal').style.display = 'none';
}

// إغلاق النافذة عند النقر خارجها
window.onclick = function(event) {
    if (event.target == document.getElementById('contactModal')) {
        hideContactModalNew();
    }
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        hideContactModal();
    }
}