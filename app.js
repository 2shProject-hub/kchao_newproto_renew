// 다국어 리소스 및 정보 구조 정의
const pageData = {
  ko: {
    main: {
      screenTitle: "오늘의 한국어 학습",
      screenSub: "베트남인을 위한 가장 쉬운 한국어 교실",
      startLearn: "학습 시작하기",
      progress: "학습 진도율: 45%",
      description: "베트남 학습자를 위한 맞춤형 학습 대시보드 화면입니다. 오늘의 진도 상황을 파악하고 즉시 세션 학습을 이어나갈 수 있는 메인 랜딩 역할을 담당합니다.",
      devNotes: "진도율 게이지 컴포넌트는 React Native SVG 또는 Progress Bar 컴포넌트를 사용하고, 퍼센테이지 값을 상태관리(Global state) 또는 로컬 스토리지에서 동기화해야 합니다.",
      designNotes: "한국어의 친근함을 위해 한국 전통 컬러 스키마를 가미한 블루 앤 소프트 옐로우 파스텔 톤을 적용하며, 둥근 모서리(border-radius: 12dp)의 기하학적 카드로 리뉴얼합니다."
    },
    lang: {
      screenTitle: "언어 설정 (Cài đặt)",
      screenSub: "앱에서 사용할 언어를 선택하세요.",
      koLang: "한국어 (KO)",
      viLang: "베트남어 (VI)",
      saveBtn: "저장하기 (Lưu)",
      description: "사용자가 한국어와 베트남어 중 앱 전체의 타겟 언어를 지정하는 다국어 환경 설정 페이지입니다.",
      devNotes: "I18n 라이브러리(react-i18next 등)와 연동되어 작동하며, 언어 선택 시 최상위 컨텍스트의 locale state가 전환되어 즉시 전체 리렌더링이 일어나도록 유도합니다.",
      designNotes: "활성화 상태를 보여주는 체크 영역에 매끄러운 탭 스피너 애니메이션과 활성 보더 색상(Blue-500)을 적용해 선택 피드백을 강화합니다."
    },
    quiz: {
      screenTitle: "단어 맞추기 퀴즈",
      screenSub: "다음 베트남어에 맞는 한국어 단어는 무엇일까요?",
      quizWord: "Xin chào",
      quizOpt1: "안녕",
      quizOpt2: "고마워",
      quizOpt3: "미안해",
      description: "학습한 단어들을 흥미롭게 복습하는 단어 객관식 퀴즈 풀이 카드 레이아웃입니다.",
      devNotes: "버튼 클릭 이벤트 핸들러에서 정답 매칭 여부를 판단하고, 정답일 때 다음 문제 API 로드를 Trigger합니다. AOS/iOS 진동 모터를 울리는 Vibration API를 참고에 연동합니다.",
      designNotes: "퀴즈 카드는 글래스모피즘(Glassmorphism) 효과를 통해 입체감을 제공하며, 오답 선택 시 가벼운 흔들림 모션(Shake)을 구현하여 시각적 직관성을 향상합니다."
    }
  },
  vi: {
    main: {
      screenTitle: "Học tiếng Hàn hôm nay",
      screenSub: "Lớp học tiếng Hàn dễ nhất dành cho người Việt",
      startLearn: "Bắt đầu học",
      progress: "Tiến độ học tập: 45%",
      description: "Màn hình bảng điều khiển học tập được cá nhân hóa cho học viên Việt Nam. Đóng vai trò trang đích chính để theo dõi tiến độ và tiếp tục học tập ngay lập tức.",
      devNotes: "Thành phần tiến trình học tập nên dùng thư viện SVG của React Native hoặc component ProgressBar, đồng bộ hóa phần trăm từ Global State hoặc LocalStorage.",
      designNotes: "Áp dụng gam màu xanh lam phối vàng pastel truyền thống Hàn Quốc để tạo cảm giác thân thiện, đổi mới thiết kế dạng thẻ bo tròn góc (border-radius: 12dp).",
    },
    lang: {
      screenTitle: "Cài đặt ngôn ngữ",
      screenSub: "Vui lòng chọn ngôn ngữ để sử dụng trong ứng dụng.",
      koLang: "Tiếng Hàn",
      viLang: "Tiếng Việt",
      saveBtn: "Lưu lại",
      description: "Trang cài đặt môi trường đa ngôn ngữ cho phép người dùng chỉ định ngôn ngữ mục tiêu (Tiếng Hàn hoặc Tiếng Việt) trên toàn ứng dụng.",
      devNotes: "Liên kết hoạt động với thư viện I18n (như react-i18next). Khi thay đổi ngôn ngữ, trạng thái locale của Context cao nhất sẽ được cập nhật để kích hoạt re-render toàn bộ.",
      designNotes: "Áp dụng hoạt ảnh spinner mượt mà và màu viền hoạt động (Blue-500) tại vùng chọn để tăng hiệu ứng phản hồi người dùng.",
    },
    quiz: {
      screenTitle: "Trắc nghiệm từ vựng",
      screenSub: "Từ tiếng Hàn nào phù hợp với từ tiếng Việt sau đây?",
      quizWord: "Xin chào",
      quizOpt1: "안녕 (Xin chào)",
      quizOpt2: "고마워 (Cảm ơn)",
      quizOpt3: "미안해 (Xin lỗi)",
      description: "Bố cục thẻ câu hỏi trắc nghiệm ôn tập từ vựng đã học một cách thú vị.",
      devNotes: "Trình xử lý sự kiện nút click sẽ đánh giá đáp án đúng và kích hoạt tải API câu hỏi tiếp theo. Tích hợp thêm Vibration API để tạo hiệu ứng rung trên AOS/iOS.",
      designNotes: "Thẻ câu hỏi sử dụng hiệu ứng Glassmorphism tạo độ nổi khối, hiệu ứng lắc nhẹ (Shake) khi chọn sai để tăng tính trực quan sinh động.",
    }
  }
};

// 해상도 옵션 정의
const resolutionOptions = {
  aos: [
    { label: "보급형 Android (360 x 640)", width: 360, height: 640 },
    { label: "표준 Android (360 x 740)", width: 360, height: 740 },
    { label: "대형 Android (412 x 915)", width: 412, height: 915 }
  ],
  ios: [
    { label: "iPhone SE / 소형 (375 x 667)", width: 375, height: 667 },
    { label: "iPhone 13 / 14 표준 (390 x 844)", width: 390, height: 844 },
    { label: "iPhone Pro Max 대형 (430 x 932)", width: 430, height: 932 }
  ]
};

let currentLang = 'ko';
let currentDevice = 'aos';
let currentScreen = 'main';
let selectedWidth = 360;
let selectedHeight = 740;

// 화면 렌더링 함수
function render() {
  const contentEl = document.getElementById('device-content');
  const descEl = document.getElementById('section-desc');
  const devEl = document.getElementById('section-dev');
  const designEl = document.getElementById('section-design');
  
  const data = pageData[currentLang][currentScreen];

  // 1. 디바이스 화면 렌더링
  let screenHtml = '';
  if (currentScreen === 'main') {
    screenHtml = `
      <div class="proto-app-bar">
        <span>K-Chao</span>
        <span style="font-size: 12px; opacity: 0.8;">KO/VI</span>
      </div>
      <div class="proto-content">
        <h2 style="font-size: 1.5rem; margin-top: 10px; font-weight: 700;">${data.screenTitle}</h2>
        <p style="color: #666; font-size: 0.9rem;">${data.screenSub}</p>
        <div class="proto-card" style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);">
          <p style="font-weight: bold; color: #1e40af;">${data.progress}</p>
          <div style="background-color: #cbd5e1; height: 8px; border-radius: 4px; margin-top: 8px; overflow:hidden;">
            <div style="background-color: #3b82f6; width: 45%; height: 100%;"></div>
          </div>
        </div>
        <button class="proto-button">${data.startLearn}</button>
      </div>
    `;
  } else if (currentScreen === 'lang') {
    screenHtml = `
      <div class="proto-app-bar">
        <span>${data.screenTitle}</span>
      </div>
      <div class="proto-content">
        <p style="color: #666;">${data.screenSub}</p>
        <label class="proto-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
          <span>${data.koLang}</span>
          <input type="radio" name="lang-select" value="ko" ${currentLang === 'ko' ? 'checked' : ''} onchange="setLanguage('ko')">
        </label>
        <label class="proto-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
          <span>${data.viLang}</span>
          <input type="radio" name="lang-select" value="vi" ${currentLang === 'vi' ? 'checked' : ''} onchange="setLanguage('vi')">
        </label>
        <button class="proto-button" style="margin-top: 20px;">${data.saveBtn}</button>
      </div>
    `;
  } else if (currentScreen === 'quiz') {
    screenHtml = `
      <div class="proto-app-bar">
        <span>${data.screenTitle}</span>
      </div>
      <div class="proto-content">
        <p style="color: #666; font-size: 0.9rem;">${data.screenSub}</p>
        <div class="proto-card" style="text-align: center; padding: 30px 10px; background-color: #f8fafc; border: 2px dashed #cbd5e1;">
          <span style="font-size: 2rem; font-weight: bold; color: #0f172a;">"${data.quizWord}"</span>
        </div>
        <button class="proto-button" style="background-color: white; color: #333; border: 1px solid #cbd5e1; text-align: left;" onclick="alert('정답입니다!')">${data.quizOpt1}</button>
        <button class="proto-button" style="background-color: white; color: #333; border: 1px solid #cbd5e1; text-align: left;" onclick="alert('오답입니다!')">${data.quizOpt2}</button>
        <button class="proto-button" style="background-color: white; color: #333; border: 1px solid #cbd5e1; text-align: left;" onclick="alert('오답입니다!')">${data.quizOpt3}</button>
      </div>
    `;
  }
  contentEl.innerHTML = screenHtml;

  // 2. 우측 3분할 참고 카드 렌더링
  descEl.innerHTML = `<p>${data.description}</p>`;
  devEl.innerHTML = `<p>${data.devNotes}</p>`;
  designEl.innerHTML = `<p>${data.designNotes}</p>`;
}

// 상태 제어 함수
function setDevice(device) {
  currentDevice = device;
  const btnAos = document.getElementById('btn-aos');
  const btnIos = document.getElementById('btn-ios');

  if (device === 'aos') {
    btnAos.classList.add('active');
    btnIos.classList.remove('active');
  } else {
    btnAos.classList.remove('active');
    btnIos.classList.add('active');
  }

  // OS 변경에 따른 해상도 셀렉트 박스 아이템 갱신
  populateResolutions();
}

// 해상도 콤보박스 아이템 채우기
function populateResolutions() {
  const selectEl = document.getElementById('resolution-select');
  const options = resolutionOptions[currentDevice];
  
  selectEl.innerHTML = '';
  options.forEach((opt, idx) => {
    const o = document.createElement('option');
    o.value = idx;
    o.textContent = opt.label;
    selectEl.appendChild(o);
  });

  // 첫 번째 해상도로 기본 세팅
  setResolution(0);
}

// 해상도 크기 설정 적용
function setResolution(index) {
  const opt = resolutionOptions[currentDevice][index];
  selectedWidth = opt.width;
  selectedHeight = opt.height;

  const frame = document.getElementById('device-wrapper');
  frame.style.width = `${selectedWidth}px`;
  frame.style.height = `${selectedHeight}px`;

  if (currentDevice === 'ios') {
    frame.classList.add('ios');
  } else {
    frame.classList.remove('ios');
  }
  render();
}

function setLanguage(lang) {
  currentLang = lang;
  const btnKo = document.getElementById('btn-ko');
  const btnVi = document.getElementById('btn-vi');

  const selectEl = document.getElementById('screen-select');
  if (lang === 'ko') {
    btnKo.classList.add('active');
    btnVi.classList.remove('active');
    selectEl.options[0].text = "1. 메인 학습 홈";
    selectEl.options[1].text = "2. 언어 설정";
    selectEl.options[2].text = "3. 단어 퀴즈";
  } else {
    btnKo.classList.remove('active');
    btnVi.classList.add('active');
    selectEl.options[0].text = "1. Trang chủ học tập";
    selectEl.options[1].text = "2. Cài đặt ngôn ngữ";
    selectEl.options[2].text = "3. Trắc nghiệm từ vựng";
  }
  render();
}

function setScreen(screen) {
  currentScreen = screen;
  render();
}

// 최초 렌더링 실행
window.onload = () => {
  setDevice('aos');
};
