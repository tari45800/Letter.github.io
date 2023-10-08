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
  font-size: 7vw;
  line-height: 12vw;
  display: flex;
  flex-direction: column;
  gap: 10vw;
  font-family: "GangwonEdu_OTFBoldA";
  color: #292929;

  .title {
    font-size: 14vw;
    margin-bottom: 10vw;
  }
`;

const AppDiv = styled.div``;

function App() {
  return (
    <AppContainer>
      <div className="title"> 다은이에게</div>
      <Observer delay={1}>
        <div>
          <div>벌써 코가 시큰거리는 게</div>
          <div>다은이의 따뜻한 품이</div>
          <div>필요한 계절이 돌아왔어.</div>
        </div>
      </Observer>
      <Observer delay={1}>
        <div>
          <div>올해를 회상하자면,</div>
          <div>더 잘해주지 못한 아쉬움과</div>
          <div>곁에서 함께 해준 고마움이</div>
          <div>내 사랑의 모양일 거야.</div>
        </div>
      </Observer>
      <Observer delay={1}>
        <div>
          <div>걸음이 바빠 자주 보지 못하고,</div>
          <div>각자의 짐을 짊어지며,</div>
          <div>작년보다 힘든 일상을 보냈지만</div>
          <div>분명 우리는 서로에게 더</div>
          <div>성숙한 사랑을 보여줬다고 생각해.</div>
        </div>
      </Observer>
      <Observer delay={1}>
        <div>
          <div>아직 몇 가지 일이 더 남았지만</div>
          <div>이처럼 잘 헤쳐 나갈 수 있을 거야.</div>
        </div>
      </Observer>
      <Observer delay={1}>
        <div>
          <div>사랑하는 아내 다은아</div>
          <div>우리가 함께한 순간보다 </div>
          <div>아닐 때가 더 길었지만,</div>
          <div>이제는 지난 2년이란 시간이</div>
          <div>나에게 전부 같이 느껴져.</div>
        </div>
      </Observer>
      <Observer delay={1}>
        <div>
          <div>우리에게 남은 날들을</div>
          <div>더 아름답고 감사한 시간으로</div>
          <div>서로를 귀하게 여기며 함께 가자</div>
          <div>생일 축하해.</div>
        </div>
      </Observer>
      <Observer delay={1.5}>
        <div>제윤이가.</div>
      </Observer>
    </AppContainer>
  );
}

export default App;
