
const questionnaire = [
  {
    id: 1,
    previousId: null,
    nextId: 2,
    type: 'overview',
    content: {
      title: '컴퓨터공학부를 선택하는 당신에게 맞는 트랙은?',
      explanation: '뭐? 트랙이 4가지나 된다고? 그럼 난 어디로 가야하는데..?',
      tips: [
        '# 재미로 보는',
        '# 내 성향에 맞는 트랙',
      ],
    },
  },
  {
    id: 2,
    previousId: 1,
    nextId: 3,
    type: 'question',
    content: {
      title: 'Question1',
      question: '마법 학교에 입학하고 싶은 당신!  마법학교 입시를 준비하는 당신의 스타일은?',
      options: [
        { id: 1, title: '꼼꼼하게 알아보고 입시 순서를 정리하여 순서대로 수행' },
        { id: 2, title: '알고있는 입시 항목부터 일단 시작' },
      ],
    },
  },
  {
    id: 3,
    previousId: 2,
    nextId: 4,
    type: 'question',
    content: {
      title: 'Question2',
      question: '마법 학교에 입학 허가를 받은 당신!!!!마법 학교 교복을 구매했는데, 돈이 남아서 하나의 옷을 더 고를 수 있다. 당신의 선택은?',
      options: [
        { id: 1, title: '호그와트 티가 팍팍 나는 학교 망토' },
        { id: 2, title: '실용적인게 최고,,학교 운동복' },
      ],
    },
  },
  {
    id: 4,
    previousId: 3,
    nextId: 5,
    type: 'question',
    content: {
      title: 'Question3',
      question: '드디어 수강신청 당일!당신이 듣고 싶던 마법 주문 수업 강좌가 동시에 열려있다! 당신의 선택은?',
      options: [
        { id: 1, title: '고난이도 주문 수업!' },
        { id: 2, title: '기본 주문 수업!' },
      ],
    },
  },
  {
    id: 5,
    previousId: 4,
    nextId: 6,
    type: 'question',
    content: {
      title: 'Question4',
      question: '마법약 수업에서 지금보다 더 나은 지력 혹은 미모를 갖게 해줄 물약 선택권이 주어졌다. 당신의 선택은?',
      options: [
        { id: 1, title: '난 A+ 맞을테야, 지력!' },
        { id: 2, title: '난 미모를 택할래!' },
      ],
    },
  },
  {
    id: 6,
    previousId: 5,
    nextId: 7,
    type: 'question',
    content: {
      title: 'Question5',
      question: '불사조 기사단에 들어간 당신!어떠한 사건을 해결하기 위해 당신의 역할을 정해야한다. 어떤 역할을 고를 것인가?',
      options: [
        { id: 1, title: '가르치거나 설득하는 일' },
        { id: 2, title: '오래 걸리거나 반복적인 일' },
      ],
    },
  },
  {
    id: 7,
    previousId: 6,
    nextId: 8,
    type: 'question',
    content: {
      title: 'Question6',
      question: '당신에게 불사조 기사단 제의가 들어왔다! 당신의 반응은? (아직 신입생이라 학교 적응 하고 있는 상황)',
      options: [
        { id: 1, title: '다양한 경험 좋아! 새로운 기회 드루와~!!' },
        { id: 2, title: '아직 학교 적응도 힘들어... 잘 할 수 있는 거 아니면 반갑지 않아 ㅠㅠ' },
      ],
    },
  },
  {
    id: 8,
    previousId: 7,
    nextId: null,
    type: 'question',
    content: {
      title: 'Question7',
      question: '열심히 준비한 마법 과제 발표! 계획대로 수행하다가 갑작스러운 변수와 맞딱뜨렸다! 당신의 반응은?',
      options: [
        { id: 1, title: '나에게 왜 이런 시련이... 사고가 정지된다.' },
        { id: 2, title: '마법이라 그럴 수 있어! 살짝 당황했지만 빠르게 받아들인다.' },
      ],
    },
  },
  {
    id: 9,
    previousId: 8,
    nextId: 10,
    type: 'question',
    content: {
      title: 'Question8',
      question: '옆 짝꿍인 론이 "그거 있잖아" 라고 말을 걸었다. 당신의 반응은?',
      options: [
        { id: 1, title: '개떡같이 말했지만 찰떡같이 알아듣는다.' },
        { id: 2, title: ' 개떡같이 받아친다..' },
      ],
    },
  },
  {
    id: 10,
    previousId: 9,
    nextId: 11,
    type: 'question',
    content: {
      title: 'Question8',
      question: '당신이 공부에 집중하고 있는데 갑자기 해리가 말을 건다. 당신의 반응은??',
      options: [
        { id: 1, title: '오랜만에 사람과의 대화! 반갑고 신난다.' },
        { id: 2, title: '하고 있던 공부의 흐름이 끊겨 살짝 짜증난다.' },
      ],
    },
  },

  {
    id: 11,
    previousId: 10,
    nextId: 12,
    type: 'question',
    content: {
      title: 'Question9',
      question: '해리와 같이 있다가 나쁜 마법사를 만났다.학교 규정을 어기고 나쁜 마법사를 함께 무찌른 당신! 이 상황을 교장선생님께 전달해야한다. 당신의 말하는 스타일은?',
      options: [
        { id: 1, title: '객관적인 사실 중심의 보고' },
        { id: 2, title: '나쁜 마법사를 무찌른 대단했던 우리의 경험 중심의 보고' },
      ],
    },
  },
];

export default questionnaire;
