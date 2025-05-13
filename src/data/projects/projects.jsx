import NineGram from "./NineGram/NineGram";
import NineMainImg from "./NineGram/MainImg.png";
import Willit from "./Willit/Willit";
import WillitMainImg from "./Willit/MainImg.png";
import Rebloom from "./Rebloom/Rebloom";
import RebloomMainImg from "./Rebloom/MainImg.png";
import ColorDiagram from "./ColorDiagram/ColorDiagram";
import ColorMainImg from "./ColorDiagram/MainImg.png";
import Scout from "./Scout/Scout";

export const projects = [
  {
    id: 0,
    mainImg: NineMainImg,
    title: "마이크로 인터랙션으로 더 자연스러운 챗봇",
    subtitle: "바쁜 당신을 위한 AI 영양사",
    period: "2023.12 - 2024.01",
    contribution: "UX 설계 80%, UI 디자인 90%, 프론트 개발 50%",
    tag: "Moblie",
    detail: <NineGram />,
  },
  {
    id: 1,
    mainImg: WillitMainImg,
    title: "위시리스트로 관리하는 나를 위한 소비 습관",
    subtitle: "합리적 소비를 트렌디한 습관으로",
    period: "2022.09 - 2022.12",
    contribution: "팀리딩 80%, UX 설계 40%, UI 디자인 100%",
    tag: "Moblie",
    detail: <Willit />,
  },
  {
    id: 2,
    mainImg: ColorMainImg,
    title: "더 편리한 탐색 환경을 위하여",
    subtitle: "키워드로 색상 조합을 손쉽게",
    period: "2023.06 - 2024.06",
    contribution: "UX 설계 80%, UI 디자인 80%, 전시 디자인 60%",
    tag: "Web",
    detail: <ColorDiagram />,
  },
  {
    id: 3,
    mainImg: RebloomMainImg,
    title: "검증된 콘텐츠와 증상 평가 기준으로 편리하게 관리",
    subtitle: "당신의 인생 제 2막을 꽃피워보세요",
    period: "2022.03 - 2022.09",
    contribution: "UX 설계 60%, UI 설계 40%",
    tag: "Moblie",
    detail: <Rebloom />,
  },
  // {
  //   id: 0,
  //   mainImg: "",
  //   title: "포지션 관리 기능 개선으로 평가신뢰도를 높인 성장 전략",
  //   subtitle: "숨은 인재를 더 빠르고 편리하게",
  //   period: "2024.03 - 2024.04",
  //   contribution:
  //     "UX 설계 60%, UI 디자인 70%, 디자인 가이드 40%, 인터랙션 설계 70%",
  //   tag: "Web",
  //   detail: <Scout />,
  // },
  // {
  //   id: 5,
  //   mainImg: "",
  //   title: "마이크로 인터랙션으로 자연스러운 챗봇 설계",
  //   subtitle: "합리적 소비를 트렌디한 습관으로",
  //   period: "2024.03 - 2024.04",
  //   contribution: "사용자 취향 기반 웹툰 큐레이션",
  //   tag: "Web",
  //   detail: <Portfolio />,
  // },
];
