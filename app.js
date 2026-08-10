// GitHub kchao-lesson1 저장소의 실제 학습 데이터 기반으로 리소스 갱신
const pageData = {
  ko: {
    // 1과 메인 학습 홈
    main: {
      lessonNumber: "1과",
      lessonTitle: "저는 흐엉이에요",
      lessonSummary: "이름, 나라, 국적, 직업을 말하며 자신을 소개하는 방법을 배웁니다.",
      sessionTitle: "1차시: 나라와 국적 소개",
      sessionExpression: "학습 표현: 저는 N이에요/예요",
      startLearn: "학습 시작하기",
      progress: "학습 진도율: 45%",
      description: "교재 p16, p20~21에 명시된 1과 '저는 흐엉이에요'의 학습 세션들을 나타내는 메인 화면입니다. 1차시부터 6차시까지 구성되며, 첫 번째 차시가 잠금 해제되어 있습니다.",
      devNotes: "SESSIONS 배열 데이터를 받아 맵핑 루프를 돌리고, locked 상태에 따라 잠금 아이콘 및 비활성화 스타일(Pointer-events: none)을 분기 처리해야 합니다.",
      designNotes: "화면 상단에 리뉴얼 그래픽 테마인 '교실(Classroom)' 일러스트 카드 영역을 배치하며, 진도율 바와 학습 시작 버튼에 그라디언트를 입혀 화사함을 더합니다."
    },
    // [신규] 학습 미션 액티비티
    mission: {
      screenTitle: "학습 미션 (Mission)",
      badgeFormat: "차시 학습 미션",
      titleText: "나라와 국적 표현을 익혀서 한국어로 나를 소개해요.",
      subtitles: [
        "한국어 나라 이름 어휘 익히기",
        "국적 소개 문법 표현 학습하기",
        "베트남과 한국 국적 소개 문장 만들기"
      ],
      nextBtn: "다음",
      description: "차시 시작 시 학습자가 달성해야 하는 미션과 학습 목표를 직관적으로 전달하는 신규 구성 액티비티입니다.",
      devNotes: "C:\\dev\\kcho-dev 내 PreviewIntro4.tsx 구조를 참고하여 개발되었습니다. MAIN_TITLE 및 SUB_TITLE의 리스트 데이터를 react-i18next 번역 상태와 매핑해 동적 처리합니다. N개의 서브타이틀은 불릿 레이아웃(flex-row 및 dot 스타일)으로 자동 개행 처리됩니다.",
      designNotes: "K-Chao 브랜드 아이덴티티인 Teal 테마(#00a8a6) 배지와 둥근 카드 모서리 디자인을 적용하였으며, 본문 텍스트는 최대 2줄(line-clamp-2)로 엄격히 제한하여 모바일 해상도 대응을 원활하게 했습니다."
    },
    // 언어 설정
    lang: {
      screenTitle: "언어 설정 (Cài đặt)",
      screenSub: "앱에서 사용할 언어를 선택하세요.",
      koLang: "한국어 (KO)",
      viLang: "베트남어 (VI)",
      saveBtn: "저장하기 (Lưu)",
      description: "사용자가 한국어와 베트남어 중 앱 전체의 타겟 언어를 지정하는 다국어 환경 설정 페이지입니다.",
      devNotes: "I18n 라이브러리(react-i18next 등)와 연동되어 작동하며, 언어 선택 시 locale state가 전환되어 즉시 전체 리렌더링이 일어나도록 유도합니다.",
      designNotes: "체크 항목에 마이크로 스피너 애니메이션과 활성 보더 색상(Teal-500)을 적용해 선택 피드백을 강화합니다."
    },
    // 실제 퀴즈 데이터 매핑
    quiz: {
      screenTitle: "단어 맞추기 퀴즈 (Vocab Quiz)",
      quizPrompt: "다음 베트남어에 맞는 한국어 단어는 무엇일까요?",
      questionWord: "Trung Quốc",
      opt1: "중국",
      opt2: "한국",
      opt3: "태국",
      opt4: "베트남",
      answer: "중국",
      description: "1과 1차시 '어휘 10문항' 파일에 탑재된 실제 퀴즈 포맷(vi-to-ko)을 기반으로 구성한 학습 퀴즈 화면입니다.",
      devNotes: "정답 선택 시 'Vibration API'를 사용하여 스마트폰에 진동 피드백을 전달하며, 다음 퀴즈 단계로 넘어가도록 React State를 업데이트합니다.",
      designNotes: "퀴즈 카드는 그림자와 라이트 그레이 보더를 활용해 플랫하면서도 고급스럽게 디자인하였으며, 정답/오답 결과 피드백을 위해 모달 디자인을 라이트 테마에 동기화합니다."
    }
  },
  vi: {
    main: {
      lessonNumber: "Bài 1",
      lessonTitle: "Tôi là Hương",
      lessonSummary: "Học cách giới thiệu bản thân bằng cách nói tên, quốc gia, quốc tịch và nghề nghiệp.",
      sessionTitle: "Bài học 1: Giới thiệu quốc gia và quốc tịch",
      sessionExpression: "Mẫu câu: 저는 N이에요/예요 (Tôi là N)",
      startLearn: "Bắt đầu học",
      progress: "Tiến độ học tập: 45%",
      description: "Màn hình chính hiển thị các phiên học của Bài 1 'Tôi là Hương' (trang p16, p20~21). Gồm 6 bài học nhỏ với bài học đầu tiên được mở khóa.",
      devNotes: "Sử dụng vòng lặp map để render danh sách SESSIONS, xử lý icon khóa và thuộc tính pointer-events: none dựa trên trạng thái locked.",
      designNotes: "Bố trí banner 'Lớp học (Classroom)' ở phần đầu màn hình, sử dụng hiệu ứng gradient cho thanh tiến trình và nút bắt đầu để tăng độ sống động.",
    },
    mission: {
      screenTitle: "Nhiệm vụ học tập (Mission)",
      badgeFormat: "Nhiệm vụ học tập bài",
      titleText: "Học cách diễn đạt về quốc gia và quốc tịch để giới thiệu bản thân bằng tiếng Hàn.",
      subtitles: [
        "Học từ vựng về tên các quốc gia bằng tiếng Hàn",
        "Học cấu trúc ngữ pháp giới thiệu quốc tịch",
        "Thực hành đặt câu giới thiệu bản thân Việt - Hàn"
      ],
      nextBtn: "Tiếp theo",
      description: "Hoạt động mới hiển thị trực quan các mục tiêu và nhiệm vụ học viên cần đạt được khi bắt đầu bài học.",
      devNotes: "Được phát triển dựa trên cấu trúc PreviewIntro4.tsx trong C:\\dev\\kcho-dev. Dữ liệu tiêu đề chính và phụ được liên kết với trạng thái dịch của react-i18next. Các phụ đề được căn chỉnh tự động xuống dòng theo dạng bullet list.",
      designNotes: "Áp dụng huy hiệu màu Teal thương hiệu K-Chao (#00a8a6) và bo tròn các góc thẻ. Nội dung chữ giới hạn tối đa 2 dòng (line-clamp-2) để đảm bảo hiển thị tối ưu trên thiết bị di động."
    },
    lang: {
      screenTitle: "Cài đặt ngôn ngữ",
      screenSub: "Vui lòng chọn ngôn ngữ để sử dụng trong ứng dụng.",
      koLang: "Tiếng Hàn",
      viLang: "Tiếng Việt",
      saveBtn: "Lưu lại",
      description: "Trang cài đặt môi trường đa ngôn ngữ cho phép người dùng chỉ định ngôn ngữ mục tiêu (Tiếng Hàn hoặc Tiếng Việt) trên toàn ứng dụng.",
      devNotes: "Liên kết hoạt động với thư viện I18n. Khi thay đổi ngôn ngữ, trạng thái locale của Context sẽ được cập nhật để kích hoạt re-render toàn bộ.",
      designNotes: "Áp dụng hoạt ảnh spinner mượt mà và màu viền hoạt động (Teal-500) tại vùng chọn để tăng hiệu ứng phản hồi người dùng.",
    },
    quiz: {
      screenTitle: "Trắc nghiệm từ vựng (Vocab Quiz)",
      quizPrompt: "Từ tiếng Hàn nào phù hợp với từ tiếng Việt sau đây?",
      questionWord: "Trung Quốc",
      opt1: "중국 (Trung Quốc)",
      opt2: "한국 (Hàn Quốc)",
      opt3: "태국 (Thái Lan)",
      opt4: "베트남 (Việt Nam)",
      answer: "중국",
      description: "Màn hình trắc nghiệm từ vựng được xây dựng dựa trên dữ liệu thực tế câu hỏi (vi-to-ko) của Bài 1 học phần 1.",
      devNotes: "Khi chọn đáp án, dùng Vibration API để phản hồi rung trên thiết bị và cập nhật State để chuyển sang câu hỏi tiếp theo.",
      designNotes: "Thẻ câu hỏi được thiết kế phẳng và tinh tế, tích hợp hiệu ứng hiển thị kết quả đúng/sai trên nền giao diện sáng.",
    }
  }
};

// 1과 세션 데이터 목록 (저장소 데이터 기반)
const sessionsList = [
  { id: 1, title: "1차시: 나라와 국적 소개", titleVi: "Bài 1: Giới thiệu quốc gia", expression: "저는 N이에요/예요", locked: false },
  { id: 2, title: "2차시: 직업 묻고 답하기", titleVi: "Bài 2: Hỏi đáp nghề nghiệp", expression: "N이에요/예요?", locked: true },
  { id: 3, title: "3차시: 국적 문장 만들기", titleVi: "Bài 3: Đặt câu quốc tịch", expression: "N은/는", locked: true },
  { id: 4, title: "4차시: 틀린 정보 정정하기", titleVi: "Bài 4: Sửa thông tin sai", expression: "N이/가 아니에요", locked: true }
];

let currentLang = 'ko';
let currentDevice = 'aos';
let currentScreen = 'main';
let selectedWidth = 360;
let selectedHeight = 740;
let currentMissionSession = 1; // 1~6차시 동적 조절용 변수

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
    let sessionsHtml = '';
    sessionsList.forEach(session => {
      const title = currentLang === 'ko' ? session.title : session.titleVi;
      sessionsHtml += `
        <div class="proto-card" style="display: flex; justify-content: space-between; align-items: center; background-color: ${session.locked ? 'var(--bg-accent)' : '#ffffff'}; opacity: ${session.locked ? 0.6 : 1};">
          <div>
            <p style="font-weight: 800; font-size: 0.95rem; color: ${session.locked ? 'var(--text-secondary)' : 'var(--text-primary)'};">${title}</p>
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 2px;">${session.expression}</p>
          </div>
          <div>
            ${session.locked ? '<span style="font-size: 14px; color: var(--text-secondary);">🔒</span>' : '<span style="font-size: 14px; color: var(--color-brand);">▶</span>'}
          </div>
        </div>
      `;
    });

    screenHtml = `
      <div class="proto-app-bar">
        <span style="font-weight: 800; color: var(--text-primary);">${data.lessonNumber}: ${data.lessonTitle}</span>
        <span style="font-size: 12px; opacity: 0.8;">KO/VI</span>
      </div>
      <div class="proto-content" style="padding-bottom: 30px;">
        <div style="background-color: var(--color-brand-soft); padding: 16px; border-radius: 14px; border: 1px solid var(--border-color);">
          <p style="font-weight: 850; color: var(--color-brand-hover); font-size: 0.95rem;">${data.sessionTitle}</p>
          <p style="font-size: 0.8rem; color: var(--text-primary); margin-top: 4px; line-height: 1.4;">${data.lessonSummary}</p>
        </div>
        
        <div class="proto-card" style="background: var(--color-brand-soft); border-color: var(--border-color);">
          <p style="font-weight: 850; color: var(--color-brand-hover); font-size: 0.9rem;">${data.progress}</p>
          <div style="background-color: var(--border-color); height: 7px; border-radius: 999px; margin-top: 8px; overflow:hidden;">
            <div style="background-color: var(--color-brand); width: 45%; height: 100%;"></div>
          </div>
        </div>

        <button class="proto-button">${data.startLearn}</button>

        <div style="margin-top: 10px;">
          <p style="font-size: 0.85rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">Sessions</p>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${sessionsHtml}
          </div>
        </div>
      </div>
    `;
  } else if (currentScreen === 'mission') {
    // N개의 서브타이틀 리스트 마크업
    let subHtml = '';
    data.subtitles.forEach(sub => {
      subHtml += `
        <div style="display: flex; align-items: flex-start; gap: 8px; margin-top: 8px;">
          <span style="color: var(--color-brand); font-weight: bold; font-size: 14px; line-height: 1.4;">•</span>
          <span style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.4; font-weight: 500;">${sub}</span>
        </div>
      `;
    });

    // 콤보박스 차시 변경에 따른 다국어 배지 타이틀 구성
    const badgeText = currentLang === 'ko' 
      ? `${currentMissionSession}차시 ${data.badgeFormat}`
      : `${data.badgeFormat} ${currentMissionSession}`;

    screenHtml = `
      <div class="proto-app-bar">
        <span style="font-size: 18px; color: var(--text-primary); cursor: pointer;" onclick="setScreen('main')">←</span>
        <span style="font-weight: 800; font-size: 1rem; color: var(--text-primary);">1과 · 1차시 나라와 국적 소개</span>
        <span style="font-size: 16px; color: var(--color-brand);">✓</span>
      </div>
      <div style="padding: 7px 16px 8px; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; background-color: var(--bg-secondary);">
        <div style="background-color: var(--border-color); height: 4px; border-radius: 999px; width: 60%; overflow: hidden;">
          <div style="background-color: var(--color-brand); width: 15%; height: 100%;"></div>
        </div>
        <div style="display: flex; border: 1px solid var(--border-color); border-radius: 6px; overflow: hidden;">
          <button style="padding: 4px 8px; border: 0; background-color: ${currentLang === 'ko' ? 'var(--color-brand)' : 'transparent'}; color: ${currentLang === 'ko' ? '#fff' : 'var(--text-secondary)'}; font-size: 10px; font-weight: bold;" onclick="setLanguage('ko')">KR</button>
          <button style="padding: 4px 8px; border: 0; background-color: ${currentLang === 'vi' ? 'var(--color-brand)' : 'transparent'}; color: ${currentLang === 'vi' ? '#fff' : 'var(--text-secondary)'}; font-size: 10px; font-weight: bold;" onclick="setLanguage('vi')">VT</button>
        </div>
      </div>
      
      <div class="proto-content" style="padding-bottom: 40px; background-color: #ffffff; flex: 1;">
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 10px;">
          <!-- 1~6차시 동적 변경 배지 -->
          <div style="display: inline-block; width: fit-content; background-color: var(--color-brand-soft); color: var(--color-brand-hover); font-weight: 800; font-size: 0.75rem; padding: 5px 10px; border-radius: 6px; border: 1px solid var(--border-color);">
            ${badgeText}
          </div>
          
          <!-- 최대 2줄 타이틀 -->
          <h1 style="font-size: 1.15rem; font-weight: 850; color: var(--text-primary); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-top: 4px;">
            ${data.titleText}
          </h1>
          
          <!-- 이미지 -->
          <div style="width: 100%; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-color); margin-top: 8px;">
            <svg viewBox="0 0 320 180" style="background-color: var(--bg-accent); width: 100%; display: block;">
              <rect width="100%" height="100%" fill="#e9fafa"/>
              <!-- 교실 컨셉 벡터 일러스트 목업 드로잉 -->
              <rect x="30" y="20" width="260" height="110" rx="6" fill="#008e8d" opacity="0.8"/>
              <text x="160" y="80" fill="#ffffff" font-size="16" font-weight="bold" text-anchor="middle">Classroom Banner</text>
              <rect x="50" y="140" width="60" height="20" rx="4" fill="#61727a" opacity="0.5"/>
              <rect x="130" y="140" width="60" height="20" rx="4" fill="#61727a" opacity="0.5"/>
              <rect x="210" y="140" width="60" height="20" rx="4" fill="#61727a" opacity="0.5"/>
            </svg>
          </div>
          
          <!-- 서브타이틀 목록 (블릿 포함) -->
          <div style="margin-top: 8px; border-top: 1px solid var(--border-color); padding-top: 12px;">
            <p style="font-size: 0.8rem; font-weight: bold; color: var(--text-primary); text-transform: uppercase;">학습 상세 미션</p>
            ${subHtml}
          </div>
        </div>
        
        <!-- 하단 다음 버튼 -->
        <button class="proto-button" style="margin-top: 24px; display: flex; align-items: center; justify-content: center; gap: 8px;" onclick="alert('다음 화면으로 이동합니다.')">
          <span>${data.nextBtn}</span>
          <span>➔</span>
        </button>
      </div>
    `;
  } else if (currentScreen === 'lang') {
    screenHtml = `
      <div class="proto-app-bar">
        <span>${data.screenTitle}</span>
      </div>
      <div class="proto-content">
        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.4;">${data.screenSub}</p>
        <label class="proto-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
          <span style="font-weight: 800;">${data.koLang}</span>
          <input type="radio" name="lang-select" value="ko" ${currentLang === 'ko' ? 'checked' : ''} onchange="setLanguage('ko')">
        </label>
        <label class="proto-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
          <span style="font-weight: 800;">${data.viLang}</span>
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
        <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.4;">${data.quizPrompt}</p>
        <div class="proto-card" style="text-align: center; padding: 24px 10px; background-color: var(--bg-accent); border: 2px dashed var(--border-color);">
          <span style="font-size: 1.8rem; font-weight: 850; color: var(--text-primary);">"${data.questionWord}"</span>
        </div>
        <button class="proto-button" style="background-color: white; color: var(--text-primary); border: 1px solid var(--border-color); text-align: left;" onclick="checkAnswer(this.textContent, '${data.answer}')">${data.opt1}</button>
        <button class="proto-button" style="background-color: white; color: var(--text-primary); border: 1px solid var(--border-color); text-align: left;" onclick="checkAnswer(this.textContent, '${data.answer}')">${data.opt2}</button>
        <button class="proto-button" style="background-color: white; color: var(--text-primary); border: 1px solid var(--border-color); text-align: left;" onclick="checkAnswer(this.textContent, '${data.answer}')">${data.opt3}</button>
        <button class="proto-button" style="background-color: white; color: var(--text-primary); border: 1px solid var(--border-color); text-align: left;" onclick="checkAnswer(this.textContent, '${data.answer}')">${data.opt4}</button>
      </div>
    `;
  }
  contentEl.innerHTML = screenHtml;

  // 2. 우측 3분할 참고 카드 렌더링
  descEl.innerHTML = `<p>${data.description}</p>`;
  
  // 신규 미션 화면인 경우에 한하여 차시 제어 셀렉터 추가 및 3분할 데이터 바인딩
  if (currentScreen === 'mission') {
    let selectorHtml = `
      <p style="margin-bottom: 8px;"><strong>차시 미션 렌더링 제어:</strong></p>
      <select class="combo-box" style="margin-bottom: 12px;" onchange="setMissionSession(this.value)">
        <option value="1" ${currentMissionSession === 1 ? 'selected' : ''}>1차시 학습 미션</option>
        <option value="2" ${currentMissionSession === 2 ? 'selected' : ''}>2차시 학습 미션</option>
        <option value="3" ${currentMissionSession === 3 ? 'selected' : ''}>3차시 학습 미션</option>
        <option value="4" ${currentMissionSession === 4 ? 'selected' : ''}>4차시 학습 미션</option>
        <option value="5" ${currentMissionSession === 5 ? 'selected' : ''}>5차시 학습 미션</option>
        <option value="6" ${currentMissionSession === 6 ? 'selected' : ''}>6차시 학습 미션</option>
      </select>
      <p>${data.devNotes}</p>
    `;
    devEl.innerHTML = selectorHtml;
  } else {
    devEl.innerHTML = `<p>${data.devNotes}</p>`;
  }
  
  designEl.innerHTML = `<p>${data.designNotes}</p>`;
}

// 신규 미션 차시 변경 함수
function setMissionSession(val) {
  currentMissionSession = parseInt(val);
  render();
}

// 퀴즈 정답 검증 함수
function checkAnswer(chosen, answer) {
  const cleanChosen = chosen.split(' ')[0].trim();
  if (cleanChosen === answer) {
    alert("정답입니다! 🎉");
  } else {
    alert("오답입니다. 다시 시도해 보세요. ❌");
  }
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

  populateResolutions();
}

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

  setResolution(0);
}

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
    selectEl.options[1].text = "2. 학습 미션 [신규]";
    selectEl.options[2].text = "3. 언어 설정";
    selectEl.options[3].text = "4. 단어 퀴즈";
  } else {
    btnKo.classList.remove('active');
    btnVi.classList.add('active');
    selectEl.options[0].text = "1. Trang chủ học tập";
    selectEl.options[1].text = "2. Nhiệm vụ học tập [Mới]";
    selectEl.options[2].text = "3. Cài đặt ngôn ngữ";
    selectEl.options[3].text = "4. Trắc nghiệm từ vựng";
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
