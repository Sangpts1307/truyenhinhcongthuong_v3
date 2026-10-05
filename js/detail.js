/**
 * LOGIC TRANG CHI TIẾT BÀI VIẾT (EDITORIAL READING EXPERIENCE)
 */

document.addEventListener("DOMContentLoaded", () => {
  loadArticleDetail();
  initReadingTools();
  initCommentForm();
});

// 1. TẢI DỮ LIỆU BÀI VIẾT THEO SLUG
function loadArticleDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get("slug") || "quy-hoach-dien-viii-dot-pha-chuyen-dich-nang-luong-xanh-viet-nam";

  const article = findArticleBySlug(slug);
  if (!article) return;

  // Cập nhật thẻ Meta & Title
  document.title = `${article.title} — Truyền Hình Công Thương`;

  // Cập nhật Breadcrumb & Kicker
  const kickerEl = document.getElementById("article-kicker");
  const catBreadcrumbEl = document.getElementById("article-cat-breadcrumb");
  if (kickerEl) kickerEl.textContent = article.kicker || "THỜI SỰ CÔNG THƯƠNG";
  if (catBreadcrumbEl) catBreadcrumbEl.textContent = article.categoryName || "Tin tức";

  // Cập nhật Tiêu đề
  const titleEl = document.getElementById("article-title");
  if (titleEl) titleEl.textContent = article.title;

  // Cập nhật Tác giả & Ngày đăng
  const authorEl = document.getElementById("article-author");
  const timeEl = document.getElementById("article-time");
  if (authorEl) authorEl.textContent = article.author || "BAN BIÊN TẬP";
  if (timeEl) timeEl.textContent = article.publishedAt || "05/10/2026 18:30 GMT+7";

  // Cập nhật Ảnh đại diện & Chú thích
  const imgEl = document.getElementById("article-image");
  const imgCaptionEl = document.getElementById("article-image-caption");
  if (imgEl && article.image) {
    imgEl.src = article.image;
    imgEl.alt = article.title;
  }
  if (imgCaptionEl) {
    imgCaptionEl.textContent = article.imageCaption || article.title;
  }

  // Cập nhật Nội dung bài viết
  const contentEl = document.getElementById("article-content");
  if (contentEl) {
    if (article.content) {
      contentEl.innerHTML = article.content;
    } else {
      contentEl.innerHTML = `
        <p class="drop-cap">${article.excerpt || article.sapo || ""}</p>
        <p>Theo báo cáo đánh giá của các cơ quan quản lý chuyên ngành, các mục tiêu đề ra đang được bám sát thực hiện nhằm tạo chuyển biến căn bản, đồng bộ trong công tác quản lý và điều hành. Việc đổi mới mô hình quản trị, ứng dụng mạnh mẽ khoa học công nghệ và tối ưu hóa chuỗi giá trị là những định hướng then chốt.</p>
        <blockquote class="my-6 pl-4 border-l-4 border-red-600 italic font-editorial text-lg text-slate-800 bg-red-50/40 py-3 pr-3">
          "Đổi mới tư duy và hành động quyết liệt là điều kiện tiên quyết để ngành Công Thương hoàn thành xuất sắc các mục tiêu kinh tế - xã hội năm 2026."
        </blockquote>
        <p>Bên cạnh đó, công tác kiểm tra, giám sát chất lượng và tháo gỡ khó khăn cho các đơn vị cơ sở tiếp tục được triển khai thường xuyên, đảm bảo môi trường kinh doanh minh bạch, lành mạnh và thúc đẩy sản xuất phát triển bền vững.</p>
      `;
    }

    // Nếu bài viết có video YouTube đính kèm thì chèn thêm khung video
    if (article.youtubeUrl) {
      const videoContainer = document.createElement("div");
      videoContainer.className = "my-8 rounded-xl overflow-hidden aspect-video bg-black shadow-lg";
      const ytIdMatch = article.youtubeUrl.match(/(?:v=|\/embed\/|\/vi\/|\/shorts\/)([a-zA-Z0-9_-]{11})/);
      const ytId = ytIdMatch ? ytIdMatch[1] : null;
      if (ytId) {
        videoContainer.innerHTML = `<iframe class="w-full h-full" src="https://www.youtube.com/embed/${ytId}" frameborder="0" allowfullscreen></iframe>`;
        contentEl.appendChild(videoContainer);
      }
    }
  }

  // Tải danh sách bài liên quan
  loadRelatedArticles(slug);
}

// 2. TẢI CÁC BÀI VIẾT LIÊN QUAN (TOP 10 BÀI THEO THUYẾT MINH MỤC 25 & HỌP 02/10)
function loadRelatedArticles(currentSlug) {
  const gridContainer = document.getElementById("related-articles-grid");
  const listContainer = document.getElementById("related-articles-compact-list");

  const allArticles = [
    TRUYEN_HINH_CONG_THUONG_DATA.leadStory,
    ...TRUYEN_HINH_CONG_THUONG_DATA.heroSubStories,
    ...TRUYEN_HINH_CONG_THUONG_DATA.categoryBlocks.congNghiep.articles,
    ...TRUYEN_HINH_CONG_THUONG_DATA.categoryBlocks.thuongMai.articles,
    ...TRUYEN_HINH_CONG_THUONG_DATA.categoryBlocks.hoiNhap.articles
  ].filter(a => a.slug !== currentSlug);

  // 4 bài card có ảnh đại diện lớn
  if (gridContainer) {
    const top4 = allArticles.slice(0, 4);
    gridContainer.innerHTML = top4.map(item => `
      <article class="group flex flex-col justify-between p-3 rounded-lg border border-slate-200 bg-white hover:shadow-md transition">
        <div>
          <div class="relative rounded overflow-hidden aspect-video thumb-16-9 bg-slate-100 mb-3">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <span class="text-[10px] font-extrabold uppercase tracking-wider text-red-600 mb-1 block">${item.kicker || "TIN LIÊN QUAN"}</span>
          <h4 class="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2 mb-2 leading-snug">
            <a href="detail.html?slug=${item.slug}">${item.title}</a>
          </h4>
        </div>
        <span class="text-[10px] text-slate-400 block pt-2 border-t border-slate-100">${item.timeAgo || "Gần đây"}</span>
      </article>
    `).join("");
  }

  // 6 bài tiếp theo dạng danh sách timeline (Tổng cộng đủ Top 10 bài)
  if (listContainer) {
    const next6 = allArticles.slice(4, 10);
    listContainer.innerHTML = next6.map(item => `
      <div class="flex items-center justify-between py-2 border-b border-slate-100 last:border-0 hover:bg-slate-50 px-2 rounded transition">
        <a href="detail.html?slug=${item.slug}" class="text-xs font-semibold text-slate-800 hover:text-red-600 transition truncate pr-4">
          • ${item.title}
        </a>
        <span class="text-[10px] text-slate-400 flex-shrink-0">${item.timeAgo || "Mới nhất"}</span>
      </div>
    `).join("");
  }
}

// 3. CÔNG CỤ ĐỌC BÀI & CHIA SẺ MẠNG XÃ HỘI (FACEBOOK, ZALO, COPY LINK, PRINT)
function initReadingTools() {
  const contentEl = document.getElementById("article-content");
  const zoomInBtn = document.getElementById("zoom-in-btn");
  const zoomOutBtn = document.getElementById("zoom-out-btn");
  const copyLinkBtn = document.getElementById("copy-link-btn");
  const printBtn = document.getElementById("print-article-btn");
  const shareFbBtn = document.getElementById("share-facebook-btn");
  const shareZaloBtn = document.getElementById("share-zalo-btn");
  const toast = document.getElementById("toast-message");

  let currentFontSize = 18; // px

  if (zoomInBtn && contentEl) {
    zoomInBtn.addEventListener("click", () => {
      if (currentFontSize < 24) {
        currentFontSize += 2;
        contentEl.style.fontSize = `${currentFontSize}px`;
      }
    });
  }

  if (zoomOutBtn && contentEl) {
    zoomOutBtn.addEventListener("click", () => {
      if (currentFontSize > 14) {
        currentFontSize -= 2;
        contentEl.style.fontSize = `${currentFontSize}px`;
      }
    });
  }

  // Nút chia sẻ Facebook (Họp 02/10 mục 8 & Thuyết minh mục 32)
  if (shareFbBtn) {
    shareFbBtn.addEventListener("click", () => {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "width=600,height=500,scrollbars=yes");
    });
  }

  // Nút chia sẻ Zalo
  if (shareZaloBtn) {
    shareZaloBtn.addEventListener("click", () => {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://sp.zalo.me/share_inline?link=${url}`, "_blank", "width=600,height=500,scrollbars=yes");
    });
  }

  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast("Đã sao chép liên kết bài viết vào bộ nhớ tạm!");
      }).catch(() => {
        showToast("Liên kết bài viết: " + window.location.href);
      });
    });
  }

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove("opacity-0", "pointer-events-none");
    toast.classList.add("opacity-100");
    setTimeout(() => {
      toast.classList.remove("opacity-100");
      toast.classList.add("opacity-0", "pointer-events-none");
    }, 3000);
  }
}

// 4. KHUNG BÌNH LUẬN TƯƠNG TÁC CÓ BỘ LỌC TỪ CẤM (BLACKLIST - HỌP 02/10 MỤC 10)
function initCommentForm() {
  const commentList = document.getElementById("comment-list");
  const commentForm = document.getElementById("comment-form");
  const nameInput = document.getElementById("comment-name");
  const textInput = document.getElementById("comment-text");
  const commentCount = document.getElementById("comment-count");
  const commentAlert = document.getElementById("comment-alert");

  // Hiển thị bình luận mẫu ban đầu
  if (commentList && TRUYEN_HINH_CONG_THUONG_DATA.comments) {
    renderComments(TRUYEN_HINH_CONG_THUONG_DATA.comments);
  }

  function renderComments(list) {
    if (commentCount) commentCount.textContent = `(${list.length})`;
    commentList.innerHTML = list.map(c => `
      <div class="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
        <div class="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
          ${c.avatar || c.author.charAt(0)}
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between mb-1">
            <h5 class="text-sm font-bold text-slate-900">${c.author}</h5>
            <span class="text-xs text-slate-400">${c.time}</span>
          </div>
          ${c.role ? `<span class="text-[11px] font-semibold text-brand-red block mb-2">${c.role}</span>` : ""}
          <p class="text-sm text-slate-700 leading-relaxed">${c.content}</p>
        </div>
      </div>
    `).join("");
  }

  if (commentForm) {
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();
      const content = textInput.value.trim();

      if (!name || !content) return;

      // KIỂM TRA TỪ KHÓA CẤM (BLACKLIST FILTER - THEO YÊU CẦU HỌP 02/10)
      const bannedWords = TRUYEN_HINH_CONG_THUONG_DATA.bannedWords || [];
      const lowerContent = content.toLowerCase();
      const foundBanned = bannedWords.filter(w => lowerContent.includes(w.toLowerCase()));

      if (foundBanned.length > 0) {
        if (commentAlert) {
          commentAlert.innerHTML = `<strong>⚠️ Tự động từ chối bình luận:</strong> Nội dung chứa từ ngữ không phù hợp chuẩn mực ngôn luận báo chí (<em>${foundBanned.join(", ")}</em>). Vui lòng điều chỉnh lại trước khi gửi!`;
          commentAlert.classList.remove("hidden");
        } else {
          alert(`⚠️ Bình luận chứa từ ngữ không phù hợp quy định ("${foundBanned.join(", ")}"). Vui lòng chỉnh sửa lại!`);
        }
        return;
      }

      if (commentAlert) commentAlert.classList.add("hidden");

      const newComment = {
        id: "cmt-" + Date.now(),
        author: name,
        role: "Độc giả quan tâm",
        avatar: name.charAt(0).toUpperCase(),
        time: "Vừa xong",
        content: content
      };

      TRUYEN_HINH_CONG_THUONG_DATA.comments.unshift(newComment);
      renderComments(TRUYEN_HINH_CONG_THUONG_DATA.comments);

      nameInput.value = "";
      textInput.value = "";
      alert("Cảm ơn bạn! Bình luận của bạn đã được kiểm duyệt tự động hợp lệ và đăng tải thành công.");
    });
  }
}
