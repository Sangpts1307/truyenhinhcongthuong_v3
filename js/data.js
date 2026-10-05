/**
 * KHO DỮ LIỆU HARDCODED TOÀN DIỆN CHO TRUYỀN HÌNH CÔNG THƯƠNG
 * Nguồn: Trích xuất và tuyển chọn từ các file dữ liệu crawler thực tế
 * Phong cách: The Wired Editorial (Tiêu đề đanh thép, phân loại chuyên môn sâu)
 */

const TRUYEN_HINH_CONG_THUONG_DATA = {
  // 1. CÁC CHỈ SỐ THỊ TRƯỜNG & NĂNG LƯỢNG HÔM NAY (Wired Market Bar)
  marketRates: [
    { label: "USD / VND", value: "25.450", change: "+0.12%", isUp: true },
    { label: "EUR / VND", value: "27.680", change: "-0.05%", isUp: false },
    { label: "XĂNG RON 95-III", value: "21.410 đ/l", change: "-180 đ", isUp: false },
    { label: "DẦU DIESEL 0.05S", value: "19.320 đ/l", change: "+90 đ", isUp: true },
    { label: "DẦU THÔ BRENT", value: "78.45 USD/thùng", change: "+1.2%", isUp: true },
    { label: "TIÊU THỤ ĐIỆN QUỐC GIA", value: "48.250 MW", change: "+3.4%", isUp: true }
  ],

  // 2. DẢI TIN NÓNG KHẨN CẤP (Breaking Ticker)
  breakingNews: [
    "Bộ trưởng Bộ Công Thương chỉ đạo bảo đảm nguồn cung xăng dầu trong mọi tình huống",
    "Xuất siêu 9 tháng năm 2026 của Việt Nam đạt kỷ lục mới với hơn 21,5 tỷ USD",
    "Quy hoạch điện VIII: Đẩy nhanh tiến độ các dự án truyền tải điện giải tỏa công suất năng lượng tái tạo",
    "Triển khai tháng khuyến mại tập trung quốc gia kích cầu tiêu dùng nội địa",
    "EVFTA thúc đẩy kim ngạch xuất khẩu nông thủy sản Việt Nam sang liên minh châu Âu tăng 18%"
  ],

  // 3. DANH MỤC CHUYÊN ĐỀ
  categories: [
    { slug: "thoi-su", name: "Thời Sự & Chính Sách", color: "#C4161C", subcategories: ["Hoạt động Lãnh đạo Bộ", "Chính sách mới", "Cải cách thủ tục"] },
    { slug: "cong-nghiep", name: "Công Nghiệp & Năng Lượng", color: "#004B87", subcategories: ["Điện lực & Năng lượng tái tạo", "Dầu khí & Khoáng sản", "Công nghiệp chế tạo"] },
    { slug: "thuong-mai", name: "Thương Mại & Thị Trường", color: "#C4161C", subcategories: ["Xuất nhập khẩu", "Thương mại điện tử", "Bình ổn thị trường", "Xúc tiến thương mại"] },
    { slug: "hoi-nhap", name: "Hội Nhập Quốc Tế", color: "#004B87", subcategories: ["Hiệp định EVFTA / CPTPP", "Phòng vệ thương mại", "Cảnh báo thị trường"] },
    { slug: "chuyen-doi-so", name: "Khoa Học & Đổi Mới", color: "#C4161C", subcategories: ["Chuyển đổi xanh", "Công nghệ 4.0", "Kinh tế tuần hoàn"] },
    { slug: "media", name: "Truyền Hình & Video", color: "#004B87", subcategories: ["Bản tin 24h", "Phóng sự hiện trường", "Tọa đàm kinh tế"] }
  ],

  // 4. BÀI VIẾT ĐINH THE BIG STORY (Hero Lead)
  leadStory: {
    id: "lead-01",
    slug: "quy-hoach-dien-viii-dot-pha-chuyen-dich-nang-luong-xanh-viet-nam",
    kicker: "TIÊU ĐIỂM · NĂNG LƯỢNG QUỐC GIA",
    kickerColor: "#C4161C",
    title: "Quy hoạch điện VIII và bước ngoặt chuyển dịch năng lượng xanh của Việt Nam",
    excerpt: "Trước áp lực cam kết phát thải ròng bằng 0 (Net Zero) vào năm 2050, Quy hoạch điện VIII đang mở ra không gian phát triển chưa từng có cho điện gió ngoài khơi, điện khí LNG và lưới điện thông minh, định hình lại toàn bộ bức tranh an ninh năng lượng quốc gia.",
    author: "BAN NĂNG LƯỢNG & ĐẦU TƯ",
    publishedAt: "2026-10-04 18:30:00",
    timeAgo: "20 phút trước",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Cánh đồng điện gió ngoài khơi tại vùng duyên hải Nam Trung Bộ – trụ cột tương lai của lưới điện xanh Việt Nam.",
    readTime: "7 phút đọc",
    content: `
      <p class="drop-cap">Việt Nam đang đứng trước cơ hội lịch sử để tái cấu trúc toàn diện hệ thống năng lượng quốc gia. Quy hoạch phát triển điện lực quốc gia thời kỳ 2021-2030, tầm nhìn đến năm 2050 (Quy hoạch điện VIII) không chỉ đơn thuần là bản quy hoạch ngành, mà là kim chỉ nam chiến lược cho cuộc chuyển đổi mô hình kinh tế sang phát triển xanh và bền vững.</p>
      
      <p>Theo báo cáo đánh giá mới nhất từ Cục Điện lực và Năng lượng tái tạo (Bộ Công Thương), mục tiêu cốt lõi của quy hoạch là ưu tiên tối đa nguồn năng lượng sạch, từng bước giảm tỷ trọng nhiệt điện than xuống mức hợp lý và tiến tới dừng hoàn toàn sau năm 2040 đối với các nhà máy hết thời hạn sử dụng công nghệ.</p>

      <blockquote class="my-8 pl-6 border-l-4 border-red-600 italic text-xl font-editorial text-slate-800 bg-red-50/50 py-4 pr-4">
        "Chuyển dịch năng lượng không phải là bài toán đơn giản về mặt tài chính và công nghệ, mà là cam kết danh dự của Việt Nam với cộng đồng quốc tế trong việc ứng phó với biến đổi khí hậu toàn cầu."
        <span class="block mt-2 text-sm font-sans font-bold text-red-700 not-italic">— Lãnh đạo Vụ Năng lượng, Bộ Công Thương</span>
      </blockquote>

      <h3 class="text-2xl font-bold font-editorial text-slate-900 mt-8 mb-4">Điện gió ngoài khơi: Mỏ vàng tiềm năng nghìn tỷ đô</h3>
      <p>Với đường bờ biển dài hơn 3.260 km cùng tốc độ gió trung bình đạt từ 8 - 10 m/s ở độ cao 100m, Việt Nam được Ngân hàng Thế giới (WB) đánh giá là quốc gia có tiềm năng điện gió ngoài khơi lớn nhất khu vực Đông Nam Á, ước tính vượt 600 GW công suất kỹ thuật.</p>

      <p>Bộ Công Thương đang khẩn trương hoàn thiện khung cơ chế thí điểm phát triển điện gió ngoài khơi, đồng thời phối hợp với các tập đoàn năng lượng uy tín trong và ngoài nước tháo gỡ các nút thắt pháp lý về cấp phép mặt biển và quy chế bán điện trực tiếp (DPPA).</p>

      <h3 class="text-2xl font-bold font-editorial text-slate-900 mt-8 mb-4">Lưới điện siêu cao áp và công nghệ lưu trữ BESS</h3>
      <p>Để giải tỏa công suất cho các trung tâm năng lượng tái tạo tại miền Trung và miền Nam ra các trung tâm phụ tải lớn phía Bắc, hệ thống đường dây 500kV mạch 3 và các trạm biến áp số tự động hóa 100% đang được vận hành liên tục. Việc kết hợp hệ thống pin lưu trữ năng lượng (BESS) quy mô lớn cũng là bước đi tiên phong được Bộ Công Thương đẩy mạnh trong giai đoạn 2025 - 2030.</p>
    `
  },

  // 5. 4 BÀI VIẾT VỆ TINH HERO CỘT PHẢI
  heroSubStories: [
    {
      id: "sub-01",
      slug: "evnnpc-phat-huy-vai-tro-sang-kien-cai-tien-ky-thuat-chuyen-doi-so",
      kicker: "CÔNG NGHIỆP ĐIỆN",
      kickerColor: "#004B87",
      title: "EVNNPC phát huy vai trò phong trào sáng kiến cải tiến kỹ thuật và chuyển đổi số",
      excerpt: "Phát huy sáng kiến, cải tiến kỹ thuật, đẩy mạnh chuyển đổi số gắn với xây dựng văn hóa doanh nghiệp là chìa khóa quyết định an toàn lưới điện miền Bắc.",
      timeAgo: "45 phút trước",
      author: "Văn phòng Điện lực",
      image: "assets/images/featured-01.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=lGC9zZ4lL2A"
    },
    {
      id: "sub-02",
      slug: "doanh-nghiep-nganh-giay-doi-moi-cong-nghe-bao-ve-moi-truong",
      kicker: "CHUYỂN ĐỔI XANH",
      kickerColor: "#C4161C",
      title: "Doanh nghiệp ngành giấy đổi mới công nghệ sâu để bảo vệ môi trường",
      excerpt: "Ứng dụng công nghệ xử lý tuần hoàn nước khép kín và năng lượng sinh khối biomass giúp các nhà máy giấy giảm 60% lượng phát thải carbon.",
      timeAgo: "1 giờ trước",
      author: "Ban Biên tập Công nghiệp",
      image: "assets/images/featured-02.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=9HnIZZ0Kvkw"
    },
    {
      id: "sub-03",
      slug: "da-dang-tieu-thu-san-pham-cam-qua-thuong-mai-dien-tu",
      kicker: "THƯƠNG MẠI SỐ",
      kickerColor: "#004B87",
      title: "Đa dạng hóa kênh tiêu thụ nông sản chủ lực qua hệ thống thương mại điện tử xuyên biên giới",
      excerpt: "Các sàn TMĐT phối hợp với Cục Thương mại điện tử và Kinh tế số mở rộng luồng xuất khẩu nông sản OCOP đến thị trường Đông Á và EU.",
      timeAgo: "2 giờ trước",
      author: "Phòng Xúc tiến TMĐT",
      image: "assets/images/featured-03.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=V33FiL9oN6A"
    },
    {
      id: "sub-04",
      slug: "quang-ba-kich-cau-tieu-dung-noi-dia-de-hang-viet-vuon-xa",
      kicker: "THỊ TRƯỜNG NỘI ĐỊA",
      kickerColor: "#C4161C",
      title: "Quảng bá, kích cầu tiêu dùng nội địa: Đòn bẩy giữ vững tăng trưởng tổng mức bán lẻ",
      excerpt: "Thị trường 100 triệu dân tiếp tục là bệ đỡ vững chắc cho hàng Việt khi các chương trình xúc tiến bán hàng nội địa đạt hiệu quả cao.",
      timeAgo: "3 giờ trước",
      author: "Ban Thị trường Trong nước",
      image: "assets/images/featured-04.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=DdcigwmpYmQ"
    }
  ],

  // 6. KHỐI TRENDING ĐÁNH SỐ TO BẢN 01 - 05 (Wired Numeric Counter)
  trendingStories: [
    {
      rank: "01",
      slug: "bien-dong-ty-gia-va-chuoi-cung-ung-xuat-nhap-khau-2026",
      title: "Tỷ giá và cước vận tải biển biến động: Doanh nghiệp xuất nhập khẩu ứng phó thế nào?",
      category: "XUẤT NHẬP KHẨU",
      views: "24.850 lượt đọc",
      timeAgo: "Hôm nay"
    },
    {
      rank: "02",
      slug: "chuyen-doi-so-de-tiet-kiem-va-su-dung-hieu-qua-nang-luong",
      title: "Chuyển đổi số để tối ưu hóa tiêu thụ năng lượng trong các khu công nghiệp trọng điểm",
      category: "KHOA HỌC CÔNG NGHỆ",
      views: "18.320 lượt đọc",
      timeAgo: "Hôm nay"
    },
    {
      rank: "03",
      slug: "kiem-tra-giam-sat-nghiem-ngat-chuoi-cung-ung-xang-dau-toan-quoc",
      title: "Bộ Công Thương tăng cường thanh tra đột xuất tổng kho và đại lý phân phối xăng dầu",
      category: "THỊ TRƯỜNG DẦU KHÍ",
      views: "15.410 lượt đọc",
      timeAgo: "Hôm qua"
    },
    {
      rank: "04",
      slug: "hiep-dinh-evfta-va-co-hoi-but-pha-nong-san-viet-sang-chau-au",
      title: "Cắt giảm 99% dòng thuế EVFTA: Cơ hội vàng cho thủy sản và dệt may thâm nhập sâu vào EU",
      category: "HỘI NHẬP EVFTA",
      views: "12.980 lượt đọc",
      timeAgo: "Hôm qua"
    },
    {
      rank: "05",
      slug: "mo-hinh-chuyen-doi-so-thanh-cong-tai-doanh-nghiep-xuc-tien-thuong-mai",
      title: "Mô hình chuyển đổi số thành công tại các doanh nghiệp hoạt động xúc tiến thương mại",
      category: "ĐỔI MỚI SÁNG TẠO",
      views: "11.200 lượt đọc",
      timeAgo: "2 ngày trước"
    }
  ],

  // 7. PHÂN KHU MEDIA TRUYỀN HÌNH (Wired Broadcast Spotlight - Nền Navy Dark #071526)
  broadcastVideos: [
    {
      id: "vid-01",
      slug: "ban-tin-thoi-su-cong-thuong-24h-chuyen-dong-nhip-song-kinh-te",
      title: "Bản tin Thời sự Công Thương 24h: Nỗ lực duy trì nhịp độ sản xuất và chuỗi cung ứng cuối năm",
      youtubeId: "Q4cg2Xu8AK0",
      youtubeUrl: "https://www.youtube.com/watch?v=Q4cg2Xu8AK0",
      duration: "14:25",
      thumbnail: "https://img.youtube.com/vi/Q4cg2Xu8AK0/hqdefault.jpg",
      badge: "PHÁT SÓNG MỚI NHẤT",
      summary: "Tổng hợp toàn diện hoạt động điều hành của Lãnh đạo Bộ Công Thương, tình hình cung ứng điện sản xuất, giá cả các mặt hàng tiêu dùng thiết yếu và chuyển động của các thị trường xuất khẩu trọng điểm."
    },
    {
      id: "vid-02",
      slug: "phong-su-phat-trien-khoa-hoc-cong-nghe-nghi-quyet-57",
      title: "Phóng sự: Phát triển khoa học công nghệ, đổi mới sáng tạo ngành Công Thương theo Nghị quyết 57-NQ/TW",
      youtubeId: "hrjl-dhGn5M",
      youtubeUrl: "https://www.youtube.com/watch?v=hrjl-dhGn5M",
      duration: "18:40",
      thumbnail: "https://img.youtube.com/vi/hrjl-dhGn5M/hqdefault.jpg",
      badge: "CHUYÊN ĐỀ",
      summary: "Sau một năm triển khai, phong trào đổi mới công nghệ và chuyển đổi số đã lan tỏa từ trung ương đến từng phân xưởng nhà máy."
    },
    {
      id: "vid-03",
      slug: "phong-su-tu-noi-lo-moi-truong-tro-xi-thanh-vat-lieu-xay-dung",
      title: "Từ nỗi lo môi trường: Tái chế tro xỉ nhiệt điện thành vật liệu xanh xây dựng hạ tầng",
      youtubeId: "GMcFabBa3Lk",
      youtubeUrl: "https://www.youtube.com/watch?v=GMcFabBa3Lk",
      duration: "09:15",
      thumbnail: "https://img.youtube.com/vi/GMcFabBa3Lk/hqdefault.jpg",
      badge: "KINH TẾ TUẦN HOÀN",
      summary: "Công nghệ xử lý tro xỉ hiện đại giúp các nhà máy nhiệt điện giải tỏa bãi thải, biến phụ phẩm thành xi măng và bê tông thương phẩm chất lượng cao."
    },
    {
      id: "vid-04",
      slug: "toa-dam-day-cap-dien-viet-khang-dinh-vi-the-thi-truong-trong-nuoc",
      title: "Tọa đàm: Dây cáp điện Việt Nam khẳng định năng lực tại các siêu dự án lưới điện truyền tải 500kV",
      youtubeId: "kiYPsWdo6m8",
      youtubeUrl: "https://www.youtube.com/watch?v=kiYPsWdo6m8",
      duration: "12:50",
      thumbnail: "https://img.youtube.com/vi/kiYPsWdo6m8/hqdefault.jpg",
      badge: "TỌA ĐÀM",
      summary: "Các kỹ sư Việt Nam làm chủ công nghệ chế tạo dây dẫn chịu nhiệt, dây cáp ngầm phục vụ công trình trọng điểm quốc gia."
    },
    {
      id: "vid-05",
      slug: "evnnpc-phat-huy-vai-tro-sang-kien-cai-tien-ky-thuat-chuyen-doi-so",
      title: "EVNNPC phát huy vai trò phong trào sáng kiến cải tiến kỹ thuật và chuyển đổi số trong quản lý vận hành",
      youtubeId: "lGC9zZ4lL2A",
      youtubeUrl: "https://www.youtube.com/watch?v=lGC9zZ4lL2A",
      duration: "11:30",
      thumbnail: "https://img.youtube.com/vi/lGC9zZ4lL2A/hqdefault.jpg",
      badge: "CÔNG NGHIỆP ĐIỆN",
      summary: "Ứng dụng flycam và camera nhiệt phát hiện nguy cơ sự cố lưới điện truyền tải cao áp miền Bắc."
    },
    {
      id: "vid-06",
      slug: "doanh-nghiep-nganh-giay-doi-moi-cong-nghe-bao-ve-moi-truong",
      title: "Doanh nghiệp ngành giấy đổi mới công nghệ sâu để bảo vệ môi trường",
      youtubeId: "9HnIZZ0Kvkw",
      youtubeUrl: "https://www.youtube.com/watch?v=9HnIZZ0Kvkw",
      duration: "08:15",
      thumbnail: "https://img.youtube.com/vi/9HnIZZ0Kvkw/hqdefault.jpg",
      badge: "CHUYỂN ĐỔI XANH",
      summary: "Đầu tư hệ thống xử lý nước thải sinh học và tận dụng hơi nước tái sinh năng lượng."
    },
    {
      id: "vid-07",
      slug: "da-dang-tieu-thu-san-pham-cam-qua-thuong-mai-dien-tu",
      title: "Đa dạng hóa kênh tiêu thụ nông sản chủ lực qua sàn thương mại điện tử",
      youtubeId: "V33FiL9oN6A",
      youtubeUrl: "https://www.youtube.com/watch?v=V33FiL9oN6A",
      duration: "07:45",
      thumbnail: "https://img.youtube.com/vi/V33FiL9oN6A/hqdefault.jpg",
      badge: "THƯƠNG MẠI SỐ",
      summary: "Nông sản Việt Nam chinh phục người tiêu dùng nội địa và xuất khẩu qua sàn số quốc tế."
    },
    {
      id: "vid-08",
      slug: "quang-ba-kich-cau-tieu-dung-noi-dia-de-hang-viet-vuon-xa",
      title: "Quảng bá, kích cầu tiêu dùng nội địa: Đòn bẩy giữ vững tăng trưởng bán lẻ",
      youtubeId: "DdcigwmpYmQ",
      youtubeUrl: "https://www.youtube.com/watch?v=DdcigwmpYmQ",
      duration: "10:20",
      thumbnail: "https://img.youtube.com/vi/DdcigwmpYmQ/hqdefault.jpg",
      badge: "THỊ TRƯỜNG NỘI ĐỊA",
      summary: "Chuỗi hội chợ Hàng Việt Nam chất lượng cao và tuần lễ kích cầu tiêu dùng nội địa."
    }
  ],

  // 8. TOP 10 TIN MỚI NHẤT 24/7 (TIMELINE STREAM - THEO THUYẾT MINH MỤC 24)
  topLatestNews: [
    { time: "10:45", title: "EVNNPC phát huy vai trò phong trào sáng kiến cải tiến kỹ thuật và chuyển đổi số", slug: "evnnpc-phat-huy-vai-tro-sang-kien-cai-tien-ky-thuat-chuyen-doi-so", cat: "Công nghiệp" },
    { time: "10:15", title: "Việt Nam đảm nhiệm thành công vai trò đối tác toàn diện CPTPP và EVFTA 2026", slug: "hiep-dinh-evfta-va-co-hoi-but-pha-nong-san-viet-sang-chau-au", cat: "Hội nhập" },
    { time: "09:50", title: "Bộ Công Thương đồng hành hỗ trợ doanh nghiệp nông sản mở rộng thị phần tại EU và Hoa Kỳ", slug: "da-dang-tieu-thu-san-pham-cam-qua-thuong-mai-dien-tu", cat: "Thương mại" },
    { time: "09:20", title: "Đẩy nhanh tiến độ thi công các dự án đường dây 500kV mạch 3 giải tỏa công suất điện", slug: "chuyen-doi-so-de-tiet-kiem-va-su-dung-hieu-qua-nang-luong", cat: "Năng lượng" },
    { time: "08:45", title: "Tổng kim ngạch xuất nhập khẩu 9 tháng đầu năm lập kỷ lục mới vượt mốc 570 tỷ USD", slug: "bien-dong-ty-gia-va-chuoi-cung-ung-xuat-nhap-khau-2026", cat: "Xuất nhập khẩu" },
    { time: "08:10", title: "Tăng cường kiểm tra, giám sát thị trường xăng dầu và hàng hóa thiết yếu phục vụ tiêu dùng", slug: "kiem-tra-giam-sat-nghiem-ngat-chuoi-cung-ung-xang-dau-toan-quoc", cat: "Quản lý thị trường" },
    { time: "07:35", title: "Diễn đàn kết nối giao thương nông sản chế biến và chuyển giao công nghệ đóng gói xanh", slug: "mo-hinh-chuyen-doi-so-thanh-cong-tai-doanh-nghiep-xuc-tien-thuong-mai", cat: "Xúc tiến thương mại" },
    { time: "07:00", title: "Chỉ số sản xuất công nghiệp IIP tháng 9 duy trì đà tăng trưởng tích cực trên cả nước", slug: "doanh-nghiep-nganh-giay-doi-moi-cong-nghe-bao-ve-moi-truong", cat: "Công nghiệp" },
    { time: "06:20", title: "Phát động chiến dịch toàn dân thực hành tiết kiệm điện và sử dụng năng lượng tái tạo", slug: "quy-hoach-dien-viii-dot-pha-chuyen-dich-nang-luong-xanh-viet-nam", cat: "Năng lượng" },
    { time: "05:45", title: "Triển khai cơ chế mua bán điện trực tiếp DPPA tạo đột phá thu hút vốn đầu tư công nghiệp sạch", slug: "tu-noi-lo-moi-truong-tro-xi-thanh-vat-lieu-xay-dung", cat: "Đầu tư" }
  ],

  // 9. DANH SÁCH TỪ KHÓA CẤM (BLACKLIST FILTER CHO BÌNH LUẬN - HỌP 02/10 MỤC 10)
  bannedWords: [
    "lừa đảo", "chửi thề", "xúc phạm", "bậy bạ", "phản động", "đm", "đcm", "dm", "fuck", "shit", "scam", "lua dao", "cho chet"
  ],

  // 10. MẪU BÀI VIẾT DẠNG ALBUM ẢNH (PHOTO STORY / TẠP CHÍ ẢNH - HỌP 02/10 MỤC 6)
  photoStory: {
    title: "Phóng sự ảnh: Đại công trường xây dựng đường dây 500kV mạch 3 xuyên rừng vượt núi",
    sapo: "Ghi nhận chân thực và sống động từ các đỉnh núi cao miền Trung, nơi hàng nghìn kỹ sư, công nhân ngành điện đang ngày đêm nỗ lực hoàn thành siêu dự án truyền tải điện trọng điểm quốc gia đúng tiến độ lịch sử.",
    publishedAt: "05/10/2026 15:30 GMT+7",
    author: "NHÓM PHÓNG VIÊN TRUYỀN HÌNH CÔNG THƯƠNG",
    photos: [
      {
        order: "01",
        src: "assets/images/hero.jpg",
        caption: "Bình minh trên đỉnh đèo nơi dựng cột thép siêu cao áp 500kV. Các kỹ sư bắt đầu ca làm việc từ 5h sáng để tránh nắng nóng gay gắt.",
        credit: "Ảnh: Trọng Hải"
      },
      {
        order: "02",
        src: "assets/images/featured-01.jpg",
        caption: "Vận chuyển vật tư, cấu kiện cột thép nặng hàng chục tấn vượt qua những sườn dốc hiểm trở bằng hệ thống tời tự chế an toàn.",
        credit: "Ảnh: Nguyễn Văn"
      },
      {
        order: "03",
        src: "assets/images/featured-05.jpg",
        caption: "Kỹ sư trẻ điều khiển thiết bị flycam hiện đại rà soát độ siết bu-lông và kiểm tra cân chỉnh dây dẫn ở độ cao gần 100 mét.",
        credit: "Ảnh: Quang Minh"
      },
      {
        order: "04",
        src: "assets/images/featured-06.jpg",
        caption: "Bữa cơm dã chiến ấm tình đồng nghiệp ngay dưới chân cột điện sau những giờ phút treo mình trên không trung kéo dây.",
        credit: "Ảnh: CTV"
      },
      {
        order: "05",
        src: "assets/images/featured-02.jpg",
        caption: "Lãnh đạo Bộ Công Thương và Tập đoàn Điện lực Việt Nam trực tiếp đến hiện trường kiểm tra, động viên và tặng quà kỹ sư công nhân.",
        credit: "Ảnh: Ban Truyền thông"
      }
    ]
  },


  // 8. CÁC KHỐI CHUYÊN MỤC BÁO CHÍ CHUYÊN SÂU (3 Cột The Wired)
  categoryBlocks: {
    congNghiep: {
      categoryName: "Công Nghiệp & Năng Lượng",
      slug: "cong-nghiep",
      kickerColor: "#004B87",
      articles: [
        {
          slug: "evnnpc-phat-huy-vai-tro-sang-kien-cai-tien-ky-thuat-chuyen-doi-so",
          title: "EVNNPC phát huy vai trò phong trào sáng kiến cải tiến kỹ thuật và chuyển đổi số",
          timeAgo: "1 giờ trước",
          image: "assets/images/featured-01.jpg",
          sapo: "Phát huy sáng kiến, cải tiến kỹ thuật, đẩy mạnh chuyển đổi số gắn với xây dựng văn hóa doanh nghiệp luôn là chìa khóa quyết định năng suất lao động."
        },
        {
          slug: "doanh-nghiep-nganh-giay-doi-moi-cong-nghe-bao-ve-moi-truong",
          title: "Doanh nghiệp ngành giấy đổi mới công nghệ để bảo vệ môi trường và giảm phát thải",
          timeAgo: "3 giờ trước",
          image: "assets/images/featured-02.jpg",
          sapo: "Ngành công nghiệp sản xuất giấy và bột giấy đẩy mạnh xử lý nước thải tuần hoàn và tối ưu hóa nhiệt lò hơi nhằm đáp ứng chứng chỉ xanh quốc tế."
        },
        {
          slug: "tu-noi-lo-moi-truong-tro-xi-thanh-vat-lieu-xay-dung",
          title: "Từ nỗi lo môi trường tro, xỉ nhiệt điện thành nguồn tài nguyên vật liệu xây dựng quý",
          timeAgo: "Hôm qua",
          image: "assets/images/featured-05.jpg",
          sapo: "Khoa học kỹ thuật và cơ chế khuyến khích đã biến tro xỉ nhiệt điện thành phụ gia khoáng hoạt tính cho xi măng và đắp nền đường cao tốc."
        }
      ]
    },
    thuongMai: {
      categoryName: "Thương Mại & Thị Trường",
      slug: "thuong-mai",
      kickerColor: "#C4161C",
      articles: [
        {
          slug: "da-dang-tieu-thu-san-pham-cam-qua-thuong-mai-dien-tu",
          title: "Đa dạng hóa kênh tiêu thụ sản phẩm Cam qua hệ thống sàn thương mại điện tử",
          timeAgo: "2 giờ trước",
          image: "assets/images/featured-03.jpg",
          sapo: "Kết hợp linh hoạt giữa phân phối siêu thị truyền thống và livestream bán lẻ trên sàn số giúp người nông dân giảm phụ thuộc vào thương lái."
        },
        {
          slug: "quang-ba-kich-cau-tieu-dung-noi-dia-de-hang-viet-vuon-xa",
          title: "Quảng bá, kích cầu tiêu dùng nội địa: Hàng Việt tiếp tục chinh phục người tiêu dùng",
          timeAgo: "4 giờ trước",
          image: "assets/images/featured-04.jpg",
          sapo: "Bộ Công Thương đẩy mạnh tuần hàng Việt tại 63 tỉnh thành nhằm kích cầu tiêu dùng nội địa trong các tháng cao điểm cuối năm."
        },
        {
          slug: "mo-hinh-chuyen-doi-so-thanh-cong-tai-doanh-nghiep-xuc-tien-thuong-mai",
          title: "Mô hình chuyển đổi số thành công tại doanh nghiệp hoạt động xúc tiến thương mại",
          timeAgo: "Hôm qua",
          image: "assets/images/featured-06.jpg",
          sapo: "Hệ sinh thái kết nối giao thương B2B trực tuyến giúp các doanh nghiệp Việt Nam tìm kiếm đối tác nhập khẩu mà không tốn chi phí đi lại."
        }
      ]
    },
    hoiNhap: {
      categoryName: "Khoa Học, Đổi Mới & Chuyển Đổi Số",
      slug: "chuyen-doi-so",
      kickerColor: "#004B87",
      articles: [
        {
          slug: "chuyen-doi-so-de-tiet-kiem-va-su-dung-hieu-qua-nang-luong",
          title: "Chuyển đổi số để tiết kiệm và sử dụng hiệu quả năng lượng trong doanh nghiệp sản xuất",
          timeAgo: "5 giờ trước",
          image: "assets/images/hero.jpg",
          sapo: "Hệ thống quản lý năng lượng thông minh ISO 50001 kết hợp cảm biến IoT giúp các nhà máy tiết giảm từ 8% đến 15% hóa đơn tiền điện hàng tháng."
        },
        {
          slug: "phat-trien-khoa-hoc-cong-nghe-nghi-quyet-57",
          title: "Phát triển khoa học, công nghệ và đổi mới sáng tạo theo Nghị quyết 57-NQ/TW của Bộ Chính trị",
          timeAgo: "Hôm qua",
          image: "assets/images/featured-01.jpg",
          sapo: "Kinh tế số và xã hội số đang trở thành động lực then chốt nâng cao năng suất các ngành công nghiệp chế biến chế tạo Việt Nam."
        },
        {
          slug: "tang-cuong-ung-dung-cong-nghe-khoa-hoc-chuyen-doi-so-dong-bao-dan-toc",
          title: "Tăng cường ứng dụng công nghệ khoa học và chuyển đổi số cho bà con vùng đồng bào dân tộc",
          timeAgo: "2 ngày trước",
          image: "assets/images/featured-05.jpg",
          sapo: "Hỗ trợ bà con nông dân vùng cao đưa đặc sản bản địa lên các nền tảng thương mại số, tạo sinh kế bền vững."
        }
      ]
    }
  },

  // 9. BÌNH LUẬN ĐỘC GIẢ MẪU (Mockup Comments)
  comments: [
    {
      id: "cmt-1",
      author: "Nguyễn Văn Hùng",
      role: "Kỹ sư Năng lượng sạch",
      avatar: "H",
      time: "35 phút trước",
      content: "Quy hoạch điện VIII là bước đi vô cùng chiến lược. Tuy nhiên khâu giải phóng mặt bằng đường dây truyền tải và quy chế DPPA cần được các địa phương đồng hành quyết liệt hơn nữa thì nhà đầu tư mới yên tâm rót vốn."
    },
    {
      id: "cmt-2",
      author: "Trần Thị Mai Anh",
      role: "Chuyên viên Xuất nhập khẩu",
      avatar: "M",
      time: "1 giờ trước",
      content: "Bản tin Thời sự Công Thương đưa tin rất chuẩn xác và kịp thời. Rất mong tòa soạn có thêm nhiều phóng sự phân tích chuyên sâu về rào cản CBAM của châu Âu để doanh nghiệp dệt may chuẩn bị kịp."
    }
  ]
};

// HÀM TRA CỨU BÀI VIẾT THEO SLUG
function findArticleBySlug(slug) {
  if (TRUYEN_HINH_CONG_THUONG_DATA.leadStory.slug === slug) {
    return {
      ...TRUYEN_HINH_CONG_THUONG_DATA.leadStory,
      categoryName: "Thời sự & Chính sách"
    };
  }

  const allSub = TRUYEN_HINH_CONG_THUONG_DATA.heroSubStories.find(a => a.slug === slug);
  if (allSub) return { ...allSub, categoryName: allSub.kicker };

  for (const key of Object.keys(TRUYEN_HINH_CONG_THUONG_DATA.categoryBlocks)) {
    const block = TRUYEN_HINH_CONG_THUONG_DATA.categoryBlocks[key];
    const found = block.articles.find(a => a.slug === slug);
    if (found) {
      return {
        ...found,
        kicker: block.categoryName.toUpperCase(),
        kickerColor: block.kickerColor,
        categoryName: block.categoryName,
        content: `
          <p class="drop-cap">${found.sapo}</p>
          <p>Thời gian qua, việc thực hiện đồng bộ các giải pháp đã mang lại những chuyển biến rõ nét trong toàn ngành. Các doanh nghiệp và đơn vị trực thuộc Bộ Công Thương đã chủ động thích ứng linh hoạt, đầu tư nâng cấp máy móc thiết bị và quy trình quản trị hiện đại.</p>
          <blockquote class="my-6 pl-4 border-l-4 border-red-600 italic font-editorial text-lg text-slate-800 bg-red-50/40 py-3 pr-3">
            "Sự chủ động chuyển đổi của cộng đồng doanh nghiệp là minh chứng rõ nét nhất cho sức sống và bản lĩnh của nền kinh tế Việt Nam."
          </blockquote>
          <p>Trong giai đoạn tới, toàn ngành tiếp tục hướng đến mục tiêu tăng trưởng chất lượng cao, gắn liền với bảo vệ môi trường, tối ưu hóa nguồn lực và khai thác tối đa lợi thế từ các hiệp định thương mại tự do thế hệ mới.</p>
        `
      };
    }
  }

  // Mặc định trả về leadStory nếu không tìm thấy slug
  return {
    ...TRUYEN_HINH_CONG_THUONG_DATA.leadStory,
    categoryName: "Thời sự & Chính sách"
  };
}
