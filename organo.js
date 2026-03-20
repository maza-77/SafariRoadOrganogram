document.querySelectorAll('.node').forEach(n => {
  n.onmouseover = () => { n.style.transform = 'scale(1.05)'; n.style.boxShadow = '0 8px 16px rgba(0,0,0,0.25)'; };
  n.onmouseout = () => { n.style.transform = 'scale(1)'; n.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)'; };
});