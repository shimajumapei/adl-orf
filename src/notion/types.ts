export type Floor = '1F' | '2F';

export type Grade = 'B1' | 'B2' | 'B3' | 'B4' | 'M1' | 'M2' | 'D' | '';

export interface PopupContent {
  /** 1から順番。0は「閉じている」の意味で使うので使わない */
  id: number;
  /** 平面図の番号（00〜12） */
  booth: string;
  floor: Floor;
  modalTitle: string;
  name: string;
  modalContent: string;
  grade: Grade;
  /** 画像のURL。src/image/works/ に置いて import しても良い。空なら非表示 */
  modalImage: string;
  contentUrl?: string;
  /** 各階の詳細図（src/image/1f_detail.png / 2f_detail.png）上の位置。左上からの % */
  position: { x: number; y: number };
}
