import { PopupContent } from "./types";

// ORF2026 展示作品データ
// 番号と配置は 2026年の平面図（orf2026_haiti.dxf）から。
// タイトル・学年・説明・画像は集まり次第ここを埋める。
const TBD = "（準備中）";

export const EXHIBITS_2026: PopupContent[] = [
  // 1F
  { id: 1, booth: "00", floor: "1F", name: "ADL", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 46.8, y: 68.1 } },
  { id: 2, booth: "01", floor: "1F", name: "北野", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 60.1, y: 68.1 } },
  { id: 3, booth: "02", floor: "1F", name: "大箭", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 60.1, y: 59.0 } },
  { id: 4, booth: "03", floor: "1F", name: "池田", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 60.1, y: 49.9 } },
  { id: 5, booth: "04", floor: "1F", name: "杉山", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 60.1, y: 40.8 } },
  { id: 6, booth: "05", floor: "1F", name: "小栗", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 60.1, y: 31.7 } },
  // 2F
  { id: 7, booth: "06", floor: "2F", name: "オコーネル", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 50.6, y: 40.7 } },
  { id: 8, booth: "07", floor: "2F", name: "藤原", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 50.6, y: 61.5 } },
  { id: 9, booth: "08", floor: "2F", name: "志磨", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 50.6, y: 79.9 } },
  // 1F
  { id: 10, booth: "09", floor: "1F", name: "宮丸", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 46.8, y: 31.7 } },
  { id: 11, booth: "10", floor: "1F", name: "陳", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 46.8, y: 43.1 } },
  { id: 12, booth: "11", floor: "1F", name: "森本", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 46.8, y: 56.8 } },
  { id: 13, booth: "12", floor: "1F", name: "桑原", grade: "", modalTitle: TBD, modalContent: "", modalImage: "", position: { x: 12.6, y: 80.5 } },
];

export const fetchModalContents = async (): Promise<PopupContent[]> =>
  Promise.resolve(EXHIBITS_2026);
