# 소스 코드 분석 및 이식 스킬 (Source Analyzer Skill)
본 스킬은 기존 React Native(RN)로 작성된 앱의 레이아웃, 스타일, 비즈니스 로직을 신속하게 분석하고, 이를 React 웹 기반 프로토타입으로 변환하여 이식하는 기법을 안내합니다.

## 소스 분석 및 매핑 가이드
- **컴포넌트 매핑 규칙**:
  - `View` -> `div` (Flexbox 레이아웃 활용)
  - `Text` -> `span`, `p`, 또는 `h1`~`h6`
  - `Image` -> `img`
  - `TouchableOpacity`, `Pressable` -> `button`
- **스타일(StyleSheet) 추출**: RN의 `StyleSheet.create`로 정의된 스타일 속성을 Tailwind CSS 클래스 또는 Vanilla CSS로 1:1 대응하여 추출합니다.
- **비즈니스 로직 추출**: `useEffect`, `useState`, Axios/Fetch 통신 코드 등 플랫폼 비의존적인 Pure Javascript/Typescript 로직은 프로토타입 내부의 Hook 또는 API 헬퍼 함수로 직접 복사하여 재사용합니다.
- **다국어 매핑**: 기존 다국어 파일(예: `ko.json`, `vi.json`)을 그대로 읽어와 웹 프로토타입 다국어 토글 기능과 연동시킵니다.
