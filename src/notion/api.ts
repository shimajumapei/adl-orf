import { PopupContent } from "./types";

// ORF2026 展示作品データ
// 番号と配置: 2026年の平面図（orf2026_haiti.dxf）
// タイトル・学年・説明: ORFキャプション.pdf
// 画像・リンク: 提出フォーム「ADL ORF2026 展示データ提出」。画像は public/works/ に置く（サーバー上の build/works/）
const W = (file: string) => `${process.env.PUBLIC_URL}/works/${file}`;

export const EXHIBITS_2026: PopupContent[] = [
  // 1F
  {
    id: 1, booth: "00", floor: "1F", name: "松川昌平研究室", grade: "",
    modalTitle: "Algorithmic Design Lab",
    modalContent: "",
    modalImage: "",
    position: { x: 44.8, y: 67.6 },
  },
  {
    id: 2, booth: "01", floor: "1F", name: "北野想汰", grade: "B3",
    modalTitle: "壁のあいだの路地",
    modalContent: "路地とは、隣り合う家同士のプライバシーの為のバッファーであり、そして家を繋ぎ留め、人と人との関係を生む場所でもある。そのような路地の性質を内側に取り入れた住宅。",
    modalImage: W("01.jpg"),
    position: { x: 59.5, y: 67.6 },
  },
  {
    id: 3, booth: "02", floor: "1F", name: "大箭明日香", grade: "B4",
    modalTitle: "ANIMAL MOUNTAIN HOUSE",
    modalContent: "犬や猫と暮らす人が多い一方で平坦な道が続く地に、動物好きの夫婦が営む民宿を兼ねた住宅を計画する。人と動物、住人と旅人、地域の人が出会う山のような住まい。",
    modalImage: W("02.jpg"),
    contentUrl: "https://app.notion.com/p/algorithmic-design-lab/ANIMAL-MOUNTAIN-HOUSE-3b09770b7e3b80c7a1f1e49c8f8d3e01",
    position: { x: 59.5, y: 57.0 },
  },
  {
    id: 4, booth: "03", floor: "1F", name: "池田悠依", grade: "B2",
    modalTitle: "持ち寄る路地",
    modalContent: "密集住宅街における建物と路地の関係性を操作し、内外・公私・住商が混ざり合う新たな住宅プロトタイプの展開可能性を示す。",
    modalImage: W("03.jpg"),
    contentUrl: "https://app.notion.com/p/algorithmic-design-lab/3ae9770b7e3b808189a7ccd6fcaa7b9f",
    position: { x: 59.5, y: 46.4 },
  },
  {
    id: 5, booth: "04", floor: "1F", name: "杉山日渚", grade: "B3",
    modalTitle: "渋谷路地CORE",
    modalContent: "ノンベイ横丁をはじめとして様々なスケールの路地にあふれる街、渋谷。2032年までの計画を踏まえ、新たな渋谷のコアとして水平垂直方向の回遊性に寄与する商業複合施設を提案。多様な路地寸法を参考にした路地が立体的に編みあがり、渋谷の多彩なシーンを映し出す。\n2025年デザインスタジオ「都市と建築」課題",
    modalImage: W("04.jpg"),
    position: { x: 59.5, y: 35.8 },
  },
  {
    id: 6, booth: "05", floor: "1F", name: "小栗章太郎", grade: "M2",
    modalTitle: "自律的思考停止という蒐集\n――意味を問うことを先送りしながら生きるための手引き",
    modalContent: "個人のやりたいことが問われる社会では、絶えず自分と向き合うことが要請される。自分の行動原理や性格特性について考え続けてしまう。しかし、いつか見つかるという希望は持ち続けたまま、渦のような思考だけを自律的に止められるとしたらどうだろうか。本研究では、蒐集によって自律的に思考停止し、あらゆる行動に意味が問われる社会を前向きにやり過ごすための方法を提案する。",
    modalImage: "",
    position: { x: 59.5, y: 25.2 },
  },
  // 2F
  {
    id: 7, booth: "06", floor: "2F", name: "オコーネルオーエン竜", grade: "B3",
    modalTitle: "かたちの変わる家",
    modalContent: "住人が入れ替わるたびに、敷地を覆う土の3Dプリンターが次の住人のために家を建て直すシェアハウスの提案である。積層でしか建てられない制約から天井は尖頭アーチとし、土の曲面が、画面や白い壁に疲れた身体を休ませる。粘土の3Dプリンターを自作して形を確かめ、遺伝的アルゴリズムで住人それぞれに合う家の大きさと配置を探った。",
    modalImage: "",
    position: { x: 50.7, y: 22.2 },
  },
  {
    id: 8, booth: "07", floor: "2F", name: "藤原彰大", grade: "M2",
    modalTitle: "L-CREATURES",
    modalContent: "L-CREATURESは、単一モーターの回転を歯車列で全モジュールに伝えて動くモジュール型ロボットによる人工生命システムである。モジュール構成はL-system文字列（遺伝子）と1対1で対応し、明示的な適応度を与えず、光を探して充電できた個体だけが交配し子孫を残す。本展では来場者が実機を組み替え、その構成を遺伝子に書き戻すことで、獲得形質の遺伝（ラマルク型進化）が世代を経て子孫に残るかを検証する。",
    modalImage: "",
    position: { x: 50.7, y: 53.5 },
  },
  {
    id: 9, booth: "08", floor: "2F", name: "志磨純平", grade: "M2",
    modalTitle: "編集としての設計",
    modalContent: "本研究は、編集と建築を架橋する方法を探求する。ある地域で記録・写真・解体材といった一次情報を集め、すべてを同じ面に並べる。そこに見方を置くと、物が選ばれ、つながり、小さな体系ができる。見方を替えれば、同じ材料から別の体系が生まれる。その体系から、雑誌の記事と什器という二つのかたちを、同じ手順でつくる。",
    modalImage: "",
    position: { x: 50.7, y: 81.0 },
  },
  // 1F
  {
    id: 10, booth: "09", floor: "1F", name: "宮丸万葉", grade: "B4",
    modalTitle: "フレクサゴンの立体化に関する研究",
    modalContent: "「フレクサゴン」を知っていますか？四角形や六角形の不思議な折り紙です。パタパタと折り返すと、隠れていた別の面が次々と現れます。表と裏の二つしかないはずの紙に、第三、第四の面が生まれるのです。では、この紙に厚みをつけたらどうなるでしょう。私は、フレクサゴンに厚みをつけることで立体にする研究をしています。紙製の平面のものから、プラスチック製の立体のものまで、実際に動かしながら体験してください。",
    modalImage: W("09.jpg"),
    position: { x: 44.8, y: 25.2 },
  },
  {
    id: 11, booth: "10", floor: "1F", name: "陳煥然", grade: "M1",
    modalTitle: "プレストレス膜のテント",
    modalContent: "本研究は、プレストレス膜の収縮力を利用したテントの工法である。まず、共形写像を用いて目標曲面を平面の三角形メッシュに展開し、三角形の角度をできるだけ保ちながら、ロッドと接合部の配置を決める。次に、平面上で折りたたみ式のロッドを組み立て、膜を段階的に張り、ピンでロッドを固定する。組み立て後にロックを解除すると、膜が縮もうとする力でロッドが折れ曲がり、両端の距離が短くなる。こうして平面から目標の曲面が形成される。成形後も膜は張力を保つ。",
    modalImage: W("10.jpg"),
    position: { x: 44.8, y: 38.5 },
  },
  {
    id: 12, booth: "11", floor: "1F", name: "森本結暉ルーク", grade: "M2",
    modalTitle: "樹木の形状に応じた什器を設計する\nAIエージェントの開発",
    modalContent: "本研究では、木の三次元スキャンデータを読み取り、その木に合う合板製の什器を設計するAIエージェントを開発する。エージェントは幹や枝で支持できる位置と、人が移動したり休んだりできる空間を見いだし、足場や腰掛けの形状と配置を生成する。CNCルーターによる切削加工を前提に、構造性能と合板の歩留まりの両面から設計案を評価し、その結果に基づいて案を再生成する。",
    modalImage: "",
    position: { x: 44.8, y: 54.4 },
  },
  {
    id: 13, booth: "12", floor: "1F", name: "桑原健", grade: "M2",
    modalTitle: "管理者なしの管理\n── 場所のキャラクターによる共有の場の管理",
    modalContent: "",
    modalImage: W("12.png"),
    position: { x: 8.5, y: 82.0 },
  },
  // Atelier 1（エリカラボ）: floor: "A1"。位置は src/image/atelier1_detail.png に対する %
];

export const fetchModalContents = async (): Promise<PopupContent[]> =>
  Promise.resolve(EXHIBITS_2026);
