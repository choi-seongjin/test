// Editorial filters — vanilla JS, no framework.
// Two independent filter UIs:
//   1. Publications page: year / topic / type / sort
//   2. Data & Code page: tag filter on repos

(function () {
  'use strict';

  // ---- Publications filter ----
  function initPubsFilters() {
    const root = document.querySelector('[data-pubs-root]');
    if (!root) return;

    const state = { year: 'All', tag: 'All', type: 'All', sort: 'Newest' };

    function apply() {
      const entries = root.querySelectorAll('.pub-entry');
      const visibleByYear = {};

      entries.forEach(el => {
        const y = el.dataset.year;
        const tags = (el.dataset.tags || '').split('|').filter(Boolean);
        const type = el.dataset.type;
        let show = true;
        if (state.year !== 'All' && y !== state.year) show = false;
        if (state.tag !== 'All' && !tags.includes(state.tag)) show = false;
        if (state.type !== 'All' && type !== state.type) show = false;
        el.style.display = show ? '' : 'none';
        if (show) visibleByYear[y] = (visibleByYear[y] || 0) + 1;
      });

      // toggle year groups; renumber visible entries within each group
      root.querySelectorAll('[data-year-group]').forEach(g => {
        const y = g.dataset.yearGroup;
        const count = visibleByYear[y] || 0;
        g.style.display = count ? '' : 'none';
        const countEl = g.querySelector('.count');
        if (countEl) countEl.textContent = count + ' ' + (count === 1 ? 'paper' : 'papers');
        let i = 1;
        g.querySelectorAll('.pub-entry').forEach(el => {
          if (el.style.display !== 'none') {
            const num = el.querySelector('.num');
            if (num) num.textContent = String(i).padStart(2, '0');
            i++;
          }
        });
      });

      // sort year groups
      const list = root.querySelector('.pubs-list');
      if (list) {
        const groups = Array.from(list.querySelectorAll('[data-year-group]'));
        groups.sort((a, b) => {
          const ya = parseInt(a.dataset.yearGroup, 10);
          const yb = parseInt(b.dataset.yearGroup, 10);
          return state.sort === 'Newest' ? yb - ya : ya - yb;
        });
        groups.forEach(g => list.appendChild(g));
      }

      // empty state
      const empty = root.querySelector('.pubs-empty');
      const total = Object.values(visibleByYear).reduce((a, b) => a + b, 0);
      if (empty) empty.style.display = total ? 'none' : '';

      // total counter on page head
      const totalEl = root.querySelector('[data-pub-total]');
      if (totalEl) totalEl.textContent = total + ' ' + (total === 1 ? 'paper' : 'papers');
    }

    root.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip[data-filter]');
      if (!chip) return;
      const group = chip.dataset.filter;
      const value = chip.dataset.value;
      state[group] = value;
      // toggle active class within sibling chips
      const groupEl = chip.parentElement;
      groupEl.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      apply();
    });

    apply();
  }

  // ---- Data & Code repos filter ----
  function initReposFilter() {
    const root = document.querySelector('[data-repos-root]');
    if (!root) return;

    function apply(tag) {
      const rows = root.querySelectorAll('.repos-table .row.repo-row');
      let visible = 0;
      rows.forEach(el => {
        const tags = (el.dataset.tags || '').split('|').filter(Boolean);
        const show = tag === 'All' || tags.includes(tag);
        el.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      const empty = root.querySelector('.repos-empty');
      if (empty) empty.style.display = visible ? 'none' : '';
      // renumber visible rows
      let i = 1;
      rows.forEach(el => {
        if (el.style.display !== 'none') {
          const num = el.querySelector('.num');
          if (num) num.textContent = String(i).padStart(2, '0');
          i++;
        }
      });
    }

    root.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip[data-repo-filter]');
      if (!chip) return;
      const tag = chip.dataset.repoFilter;
      const groupEl = chip.parentElement;
      groupEl.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      apply(tag);
    });

    apply('All');
  }

  // ---- Copy BibTeX ----
  function initCopyBibtex() {
    document.querySelectorAll('.copy-bib').forEach(btn => {
      btn.addEventListener('click', () => {
        const sel = btn.dataset.target;
        const block = sel ? document.querySelector(sel) : btn.previousElementSibling;
        if (!block) return;
        navigator.clipboard.writeText(block.innerText).then(() => {
          const original = btn.textContent;
          btn.textContent = 'Copied ✓';
          setTimeout(() => { btn.textContent = original; }, 1400);
        }).catch(() => {
          btn.textContent = 'Select & copy manually';
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initPubsFilters();
    initReposFilter();
    initCopyBibtex();
  });
})();
