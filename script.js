// Buttons scroll to anchors with ripple effect
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('click', function(event){
    const target = this.dataset.target;
    if(target){
      const el = document.querySelector(target);
      if(el){
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }

    // ripple
    const rect = this.getBoundingClientRect();
    const r = document.createElement('span');
    r.className = 'ripple';
    const size = Math.max(rect.width, rect.height);
    r.style.width = r.style.height = size + 'px';
    r.style.left = (event.clientX - rect.left - size/2) + 'px';
    r.style.top = (event.clientY - rect.top - size/2) + 'px';
    this.appendChild(r);
    setTimeout(()=> r.remove(), 700);
  });
});
