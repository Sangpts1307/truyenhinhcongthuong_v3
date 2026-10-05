/**
 * LOGIC ĐIỀU KHIỂN CHUNG CHO TRUYỀN HÌNH CÔNG THƯƠNG (THE WIRED EDITION)
 */

document.addEventListener("DOMContentLoaded", () => {
  initRealtimeClock();
  initSearchModal();
  initVideoModal();
  initMobileMenu();
});

// 1. ĐỒNG HỒ THỜI GIAN THỰC CHUẨN TIẾNG VIỆT
function initRealtimeClock() {
  const clockEl = document.getElementById("realtime-clock");
  if (!clockEl) return;

  const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];

  function updateClock() {
    const now = new Date();
    const dayName = days[now.getDay()];
    const date = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clockEl.textContent = `${dayName}, ${date}/${month}/${year} · ${hours}:${minutes}:${seconds}`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// 2. MODAL XEM VIDEO YOUTUBE POPUP
function initVideoModal() {
  const modal = document.getElementById("video-modal");
  const modalIframe = document.getElementById("video-iframe");
  const modalTitle = document.getElementById("video-modal-title");
  const closeBtn = document.getElementById("close-video-modal");

  if (!modal || !modalIframe) return;

  // Hàm mở modal với YouTube ID
  window.openVideoModal = function (youtubeId, title) {
    modalIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    if (modalTitle) modalTitle.textContent = title || "Bản tin Truyền Hình Công Thương";
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden"; // Chặn scroll nền
  };

  // Hàm đóng modal
  window.closeVideoModal = function () {
    modalIframe.src = ""; // Dừng video
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", window.closeVideoModal);
  }

  // Đóng khi click ngoài khung video
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      window.closeVideoModal();
    }
  });

  // Đóng bằng phím Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      window.closeVideoModal();
    }
  });
}

// 3. TÌM KIẾM TỨC THÌ (SEARCH OVERLAY MODAL)
function initSearchModal() {
  const searchTrigger = document.getElementById("open-search-btn");
  const searchModal = document.getElementById("search-modal");
  const closeSearchBtn = document.getElementById("close-search-btn");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (!searchTrigger || !searchModal) return;

  searchTrigger.addEventListener("click", () => {
    searchModal.classList.remove("hidden");
    searchModal.classList.add("flex");
    searchInput.focus();
    document.body.style.overflow = "hidden";
  });

  function closeSearch() {
    searchModal.classList.add("hidden");
    searchModal.classList.remove("flex");
    document.body.style.overflow = "";
    if (searchInput) searchInput.value = "";
    if (searchResults) searchResults.innerHTML = "";
  }

  if (closeSearchBtn) closeSearchBtn.addEventListener("click", closeSearch);
  searchModal.addEventListener("click", (e) => {
    if (e.target === searchModal) closeSearch();
  });

  // Tìm kiếm tức thì khi gõ
  if (searchInput && searchResults) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        searchResults.innerHTML = '<p class="text-slate-400 text-center py-6 text-sm">Nhập từ khóa để tìm kiếm bản tin, phóng sự ngành Công Thương...</p>';
        return;
      }

      // Lọc danh sách bài viết từ data.js
      const allArticles = [
        TRUYEN_HINH_CONG_THUONG_DATA.leadStory,
        ...TRUYEN_HINH_CONG_THUONG_DATA.heroSubStories,
        ...TRUYEN_HINH_CONG_THUONG_DATA.categoryBlocks.congNghiep.articles,
        ...TRUYEN_HINH_CONG_THUONG_DATA.categoryBlocks.thuongMai.articles,
        ...TRUYEN_HINH_CONG_THUONG_DATA.categoryBlocks.hoiNhap.articles
      ];

      const matches = allArticles.filter(a =>
        a.title.toLowerCase().includes(query) || (a.excerpt && a.excerpt.toLowerCase().includes(query)) || (a.sapo && a.sapo.toLowerCase().includes(query))
      );

      if (matches.length === 0) {
        searchResults.innerHTML = `<p class="text-slate-500 text-center py-6 text-sm">Không tìm thấy bài viết nào phù hợp với từ khóa "<strong class="text-slate-800">${query}</strong>".</p>`;
        return;
      }

      searchResults.innerHTML = matches.map(item => `
        <a href="detail.html?slug=${item.slug}" class="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-100 transition-colors border-b border-slate-100 last:border-0 group">
          <img src="${item.image}" alt="${item.title}" class="w-16 h-12 object-cover rounded flex-shrink-0 group-hover:scale-105 transition-transform" />
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-red-600">${item.kicker || "TIN TỨC"}</span>
            <h4 class="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">${item.title}</h4>
            <span class="text-xs text-slate-400">${item.timeAgo || "Gần đây"}</span>
          </div>
        </a>
      `).join("");
    });
  }
}

// 4. MENU DI ĐỘNG (MOBILE DRAWER)
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const closeBtn = document.getElementById("close-mobile-drawer");
  const backdrop = drawer ? drawer.querySelector(".drawer-backdrop") : null;

  if (!drawer) return;

  function openDrawer() {
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });

  window.openMobileDrawer = openDrawer;
  window.closeMobileDrawer = closeDrawer;
}

// 5. ĐIỀU KHIỂN VIDEO SPOTLIGHT TRÊN TRANG CHỦ
function initVideoSpotlight() {
  const mainPlayer = document.getElementById("main-broadcast-player");
  const mainTitle = document.getElementById("main-video-title");
  const mainSummary = document.getElementById("main-video-summary");
  const mainBadge = document.getElementById("main-video-badge");

  window.changeBroadcastVideo = function (ytId, title, summary, badge) {
    if (mainPlayer) {
      mainPlayer.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;
    }
    if (mainTitle) mainTitle.textContent = title;
    if (mainSummary) mainSummary.textContent = summary;
    if (mainBadge && badge) mainBadge.textContent = badge;
  };
}

document.addEventListener("DOMContentLoaded", () => {
  initVideoSpotlight();
});

