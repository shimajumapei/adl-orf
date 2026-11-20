import { PopupContent } from "./types";

// ORF2026 展示作品データ
// 番号と配置は 2026年の平面図（orf2026_haiti.dxf）から。
// タイトル・学年・説明・画像は集まり次第ここを埋める。
const TBD = "（準備中）";

export const EXHIBITS_2026: PopupContent[] = [
  // 1F
  { id: 1, booth: "00", floor: "1F", name: "ADL", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 31.9, y: 49.7 } },
  { id: 2, booth: "01", floor: "1F", name: "北野", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 31.9, y: 62.7 } },
  { id: 3, booth: "02", floor: "1F", name: "大箭", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 41.0, y: 62.7 } },
  { id: 4, booth: "03", floor: "1F", name: "池田", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 50.1, y: 62.7 } },
  { id: 5, booth: "04", floor: "1F", name: "杉山", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 59.2, y: 62.7 } },
  { id: 6, booth: "05", floor: "1F", name: "小栗", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 68.3, y: 62.7 } },
  // 2F
  { id: 7, booth: "06", floor: "2F", name: "オコーネル", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 60.0, y: 50.6 } },
  { id: 8, booth: "07", floor: "2F", name: "藤原", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 37.7, y: 50.6 } },
  { id: 9, booth: "08", floor: "2F", name: "志磨", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 18.0, y: 50.6 } },
  // 1F
  { id: 10, booth: "09", floor: "1F", name: "宮丸", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 68.3, y: 49.7 } },
  { id: 11, booth: "10", floor: "1F", name: "陳", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 56.9, y: 49.7 } },
  { id: 12, booth: "11", floor: "1F", name: "森本", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 43.2, y: 49.7 } },
  { id: 13, booth: "12", floor: "1F", name: "桑原", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 19.5, y: 16.5 } },
];

export const fetchModalContents = async (): Promise<PopupContent[]> =>
  Promise.resolve(EXHIBITS_2026);
