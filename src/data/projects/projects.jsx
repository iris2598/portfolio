import NineGram from "./NineGram/NineGram";
import Willit from "./Willit/Willit";
import Rebloom from "./Rebloom/Rebloom";
import ColorDiagram from "./ColorDiagram/ColorDiagram";
import Portfolio from "./Portfolio/Portfolio";
import Scout from "./Scout/Scout";

export const projects = [
  {
    id: 0,
    mainImg: "",
    title: "히",
    subtitle: "숨은 인재를 더 빠르고 편리하게",
    period: "2024.03 - 2024.04",
    contribution: "후보자 관리 페이지 70%, ",
    tag: "Web",
    detail: <Scout />,
  },
  {
    id: 1,
    mainImg: "",
    title: "마이크로 인터랙션으로 자연스러운 챗봇 설계",
    subtitle: "바쁜 당신을 위한 AI 영양사",
    period: "2023.12 - 2024.01",
    contribution: "",
    tag: "Moblie",
    detail: <NineGram />,
  },
  {
    id: 2,
    mainImg: "",
    title: "",
    subtitle: "합리적 소비를 트렌디한 습관으로",
    period: "2022.09 - 2022.12",
    contribution: "",
    tag: "Moblie",
    detail: <Willit />,
  },
  {
    id: 3,
    mainImg: "",
    title: "",
    subtitle: "",
    period: "2023.06 - 2024.06",
    contribution: "",
    tag: "Web",
    detail: <ColorDiagram />,
  },
  {
    id: 4,
    mainImg: "",
    title: "",
    subtitle: "당신의 인생 제 2막을 꽃피워보세요",
    period: "2022.03 - 2022.09",
    contribution: "",
    tag: "Moblie",
    detail: <Rebloom />,
  },
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
