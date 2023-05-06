interface Options {
  [key: string]: string[];
}

export const options: Options = {
  difficulty: ['쉬움', '보통', '어려움', '매우 어려움'],
  recommend: ['아쉬움', '보통', '추천', '매우 추천'],
  activity: ['없음', '보통', '높음', '매우 높음'],
  horror: ['없음', '낮음', '보통', '높음', '매우 높음'],
};
