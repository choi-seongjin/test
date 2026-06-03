(function () {
  function ready(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  function ensureToast(){ var t=document.getElementById('q-toast'); if(!t){ t=document.createElement('div'); t.id='q-toast'; t.className='q-toast'; t.setAttribute('role','status'); document.body.appendChild(t); } return t; }
  function toast(m){ var t=ensureToast(); t.textContent=m; t.classList.add('show'); clearTimeout(t._h); t._h=setTimeout(function(){ t.classList.remove('show'); },1500); }
  function fallbackCopy(text,msg){ try{ var ta=document.createElement('textarea'); ta.value=text; ta.style.position='fixed'; ta.style.top='-1000px'; document.body.appendChild(ta); ta.focus(); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); toast(msg); }catch(e){ toast('Copy failed'); } }
  function copy(text,msg){ if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(text).then(function(){ toast(msg); }, function(){ fallbackCopy(text,msg); }); } else { fallbackCopy(text,msg); } }
  function fmtAuthors(s){ s=s.replace(/\(incl\.[^)]*\)/g,'').replace(/,?\s*et al\.?/g,'').trim(); return s.replace(/\.,\s+/g,'. and '); }
  function gen(e){
    var id=e.id, type=e.getAttribute('data-type')||'', year=e.getAttribute('data-year')||'';
    var h=e.querySelector('h3'), title=h?h.textContent.trim():'';
    var au=e.querySelector('.authors'), aut=au?fmtAuthors(au.textContent):'';
    var vEl=e.querySelector('.meta em'), venue=vEl?vEl.textContent.trim():'';
    var doiA=e.querySelector('a[href*="doi.org"]'), doi=doiA?doiA.getAttribute('href').replace(/https?:\/\/doi\.org\//,''):'';
    var et = type==='conference' ? 'inproceedings' : (type==='preprint' ? 'misc' : 'article');
    var L=['@'+et+'{'+id+',','  author = {'+aut+'},','  title = {'+title+'},'];
    if(type==='conference') L.push('  booktitle = {'+venue+'},');
    else if(type==='preprint') L.push('  howpublished = {'+venue+'},');
    else L.push('  journal = {'+venue+'},');
    if(doi) L.push('  doi = {'+doi+'},');
    L.push('  year = {'+year+'}','}');
    return L.join('\n');
  }
  function bib(e){ if(window.QUIET_BIBS && window.QUIET_BIBS[e.id]) return window.QUIET_BIBS[e.id]; return gen(e); }
  ready(function(){
    var entries=document.querySelectorAll('.pub-entry');
    if(!entries.length) return;
    Array.prototype.forEach.call(entries, function(e){
      var h=e.querySelector('h3');
      var pub=e.querySelector('a[href*="doi.org"]') || e.querySelector('a[href*="arxiv.org"]');
      if(h && pub && !h.querySelector('a')){
        var link=document.createElement('a'); link.href=pub.getAttribute('href'); link.target='_blank'; link.rel='noopener'; link.className='pub-title-link';
        while(h.firstChild){ link.appendChild(h.firstChild); }
        h.appendChild(link);
      }
      var links=e.querySelector('.links'); if(!links || links.querySelector('.cite-row')) return;
      var row=document.createElement('div'); row.className='cite-row';
      var c=document.createElement('button'); c.type='button'; c.className='cite-btn'; c.textContent='Cite';
      c.addEventListener('click', function(){ copy(bib(e),'BibTeX copied'); });
      row.appendChild(c);
      links.appendChild(row);
      var a=e.querySelector('.anchor'); if(a) a.style.display='none';
    });
  });
})();
