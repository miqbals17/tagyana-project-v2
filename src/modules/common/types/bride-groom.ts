export interface IEvent {
  hour: string;
  day: string;
  date: string;
  month: string;
  year: string;
  place: string;
  map: string;
}

export interface IGalleryImage {
  src: string;
  width?: number;
  height?: number;
}

export interface IGallery {
  galleryImages: IGalleryImage[];
  handleImageLoad: () => void;
}

interface IGift {
  no: string;
  name: string;
}

export interface IPresent {
  name: string;
  address: string;
}

type TWeddingGift = {
  mandiri?: IGift;
  bri?: IGift;
  bsi?: IGift;
  seabank?: IGift;
  shopeepay?: IGift;
  dana?: IGift;
  ovo?: IGift;
  present?: IPresent;
};

export interface IWedding {
  brideGroomName: string;
  groomFullname: string;
  groomThChild: string;
  groomFather: string;
  groomMother: string;
  groomInstagram: string;
  brideFullname: string;
  brideThChild: string;
  brideFather: string;
  brideMother: string;
  brideInstagram: string;
  weddingDate: string;
  weddingDateFormat: string;
  contractData: IEvent;
  receptionData: IEvent;
  gallery: IGallery[];
  weddingGift: TWeddingGift;
}

type IGuestData = {
  name: string;
  from?: string;
};

export interface IBrideGroomData {
  brideGroomData: IWedding;
  brideName?: string;
  groomName?: string;
  guest?: IGuestData;
}

export interface ITime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface IPrayer {
  name: string;
  date: number;
  relationship: string;
  desc: string;
  isAttend: boolean;
}
