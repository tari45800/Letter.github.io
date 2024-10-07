import Observer from "./components/Observer";
import styled from "styled-components";

const AppContainer = styled.div`
  @font-face {
    font-family: "GangwonEdu_OTFBoldA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  padding: 10vw 5vw;
  font-size: 6.5vw;
  line-height: 12vw;
  display: flex;
  flex-direction: column;
  gap: 10vw;
  font-family: "GangwonEdu_OTFBoldA";
  color: #292929;

  .end {
    font-size: 7vw;
    font-weight: bold;
  }
  .title {
    font-size: 12vw;
    margin-bottom: 10vw;
  }
`;

const AppDiv = styled.div``;

function App() {
  return (
    <AppContainer>
      <div className="title">사랑하는 아내에게</div>
      <Observer delay={1}>
        <div>
          <div>나는 가족을 만드는 일이</div>
          <div>인생의 목표고, 꿈이였어.</div>
          <div>그렇기 때문에 하추가 생기고</div>
          <div>삶에 더 바랄 게 없어졌어.</div>
        </div>
      </Observer>
      <Observer delay={1}>
        <div>
          <div>임신은 나에게 이 처럼 큰 의미야.</div>
          <div>그리고 한 동안, 어쩌면 평생은</div>
          <div>우리와 주변 사람들에게도</div>
          <div>하추는 기쁨이고, 기대가 될거야.</div>
        </div>
      </Observer>
      <Observer delay={1}>
        <div>
          <div>하지만 내가 진짜 하고 싶은 말은</div>
          <div>나에겐 여전히 다은이가</div>
          <div>가장 큰 기쁨이고, 축복이라는 거야.</div>
          <div>늘 건강하고 행복하게 곁을 지켜줘.</div>
        </div>
      </Observer>
      <Observer delay={1}>
        <div>
          <div>너로 인해 나의 삶은 완성되고</div>
          <div>사랑은 온전해져가. 고마워.</div>
        </div>
      </Observer>
      <Observer delay={1}>
        <div>
          <div>생일 축하해, 사랑해</div>
        </div>
      </Observer>
      <Observer delay={1.5}>
        <div className="end">- 사랑하는 남편이</div>
      </Observer>
    </AppContainer>
  );
}

export default App;
