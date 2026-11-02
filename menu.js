document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('common-nav');
  if (!navContainer) return;

  // 현재 열려 있는 파일 이름 확인 (예: tbm.html)
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  // 메뉴 목록 정의 (새 서식을 만들면 여기에 한 줄만 추가하면 됨)
  const menuItems = [
    { name: '🏠 홈(전체 서식)', file: 'index.html' },
    { name: '📋 TBM 일지', file: 'tbm.html' },
    { name: '🔍 순회점검표', file: 'inspect.html' },
    { name: '🚜 작업계획서', file: 'plan.html' }
  ];

  const linksHTML = menuItems.map(item => {
    const isActive = (currentFile === item.file) ? 'active' : '';
    return `<a href="./${item.file}" class="${isActive}">${item.name}</a>`;
  }).join('');

  navContainer.innerHTML = `
    <nav class="top-nav no-print">
      <div class="top-nav-inner">
        <a href="./index.html" class="brand-logo">🛡️ 현장 안전서류 포털</a>
        <div class="nav-links">
          ${linksHTML}
        </div>
      </div>
    </nav>
  `;
});