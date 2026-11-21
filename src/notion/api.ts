import { PopupContent } from "./types";

// ORF2026 展示作品データ
// 番号と配置は 2026年の平面図（orf2026_haiti.dxf）から。
// タイトル・学年・説明・画像は集まり次第ここを埋める。
const TBD = "（準備中）";

export const EXHIBITS_2026: PopupContent[] = [
  // 1F
  { id: 1, booth: "00", floor: "1F", name: "ADL", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 44.8, y: 67.6 } },
  { id: 2, booth: "01", floor: "1F", name: "北野", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 59.5, y: 67.6 } },
  { id: 3, booth: "02", floor: "1F", name: "大箭", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 59.5, y: 57.0 } },
  { id: 4, booth: "03", floor: "1F", name: "池田", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 59.5, y: 46.4 } },
  { id: 5, booth: "04", floor: "1F", name: "杉山", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 59.5, y: 35.8 } },
  { id: 6, booth: "05", floor: "1F", name: "小栗", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 59.5, y: 25.2 } },
  // 2F
  { id: 7, booth: "06", floor: "2F", name: "オコーネル", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 50.7, y: 22.2 } },
  { id: 8, booth: "07", floor: "2F", name: "藤原", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 50.7, y: 53.5 } },
  { id: 9, booth: "08", floor: "2F", name: "志磨", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 50.7, y: 81.0 } },
  // 1F
  { id: 10, booth: "09", floor: "1F", name: "宮丸", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 44.8, y: 25.2 } },
  { id: 11, booth: "10", floor: "1F", name: "陳", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 44.8, y: 38.5 } },
  { id: 12, booth: "11", floor: "1F", name: "森本", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 44.8, y: 54.4 } },
  { id: 13, booth: "12", floor: "1F", name: "桑原", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 8.5, y: 82.0 } },
];

export const fetchModalContents = async (): Promise<PopupContent[]> =>
  Promise.resolve(EXHIBITS_2026);
