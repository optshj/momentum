const quotes = [
    {
        quote :"사랑에 의해 행해지는 것은 언제나 선악을 초월한다.",
        author : "프레드리히 니체"
    },
    {
        quote :"마음에 대해 논할 때, 자기 기만에 대해서는 할 말이 많다.",
        author :"다이앤 프롤로브"
    },
    {
        quote:"인생의 목적은 성숙하지 않기 위해 싸우는 것이다.",
        author:"딕 워트하이머"
    },
    {
        quote:"모두가 오래 살고 싶어 하지만 아무도 늙고 싶어 하지는 않는다.",
        author:"벤자민 프랭클린"
    },
    {
        quote:"젊었을 때 배움을 게을리 한 사람은 과거를 상실하며 미래도 없다.",
        author:"에우리피데스"
    },
    {
        quote:"성공만큼 큰 실패는 없다.",
        author:"제럴드 내크먼"
    },
    {
        quote:"벗이 먼 곳에서 찾아오면 또한 즐겁지 아니한가 (有朋自遠方來 不亦樂乎 / 유붕자원방래 불역락호)",
        author:"공자"
    },
    {
        quote:"모든 것을 가졌다 해도 친구가 없다면, 아무도 살길 원치 않을 것이다.",
        author:"아리스토텔레스"
    },
    {
        quote:"당신을 만나는 모든 사람이 당신과 헤어질 때는 더 나아지고 더 행복해질 수 있도록 하라.",
        author:"마더 테레사"
    },
    {
        quote:"도전은 인생을 흥미롭게 만들며, 도전의 극복이 인생을 의미있게 한다.",
        author:"조슈아 J. 마린"
    }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
