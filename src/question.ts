interface Question {
  question: string;
  choices: string[];
  playSound?: boolean;
}

const questions: Question[] = [
  {
    question: 'สุขสันต์วันเกิด คุณ AquaM 🌊',
    choices: ['ต่อไป'],
  },
  {
    question: 'ขอให้มีความสุข... 💙',
    choices: ['ต่อไป'],
  },
  {
    question: 'แต่ถ้าดิบ ก็อย่าไปกินนะ 😅',
    choices: ['OK...'],
  },
  {
    question: 'แล้วก็ ขอให้สุขภาพแข็งแรง 💪',
    choices: ['ต่อไป'],
  },
  {
    question: 'ประสบความสำเร็จในสิ่งที่หวัง... ✨',
    choices: ['ต่อไป'],
  },
  {
    question: 'หวังว่าคุณ จะมีผมอยู่ในใจ ❤️',
    choices: ['🤮'],
    playSound: true,
  },
  {
    question: 'ขอให้พบเจอแต่เรื่องราวดีๆ... 🥰',
    choices: ['ต่อไป'],
  },
  {
    question: 'และหวังว่าผมจะเป็นหนึ่งในเรื่องราวดีๆ ของคุณ 😘',
    choices: ['ต่อไป'],
    playSound: true,
  },
  {
    question: 'สุดท้ายนี้...',
    choices: ['ต่อไป'],
  },
  {
    question: 'ถึงจะแก่ขึ้นอีกหนึ่งปี 👩‍🦳',
    choices: ['ต่อไป'],
  },
  {
    question: 'แต่คุณก็ยัง น่ารัก ตลอดไป 💙',
    choices: ['ต่อไป'],
    playSound: true,
  },
  {
    question: '🫣 เขินเลยครับ',
    choices: ['ต่อไป'],
  },
  {
    question: '...',
    choices: ['ต่อไป'],
  },
  {
    question: '... ...',
    choices: ['ต่อไป'],
  },
  {
    question: 'หยุดได้แล้ว',
    choices: ['ต่อไป'],
  },
  {
    question: 'หยุดใจ ไม่ให้รักเธอ ไม่ได้เลย 😍',
    choices: ['ต่อไป'],
    playSound: true,
  },
  {
    question: 'ขอบคุณครับ',
    choices: ['จบ'],
  },
];

export default questions;
