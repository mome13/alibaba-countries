export enum Themes {
  Dark = 'Dark',
  Light = 'Light',
}

export interface ICountry {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: Array<string>;
  currencies: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  languages: Array<{
    name: string;
    nativeName: string;
  }>;
  borders: Array<string> | undefined;
  alpha3Code: string;
}
