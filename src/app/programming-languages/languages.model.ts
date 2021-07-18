import { Languages } from "../shared/features.model";

export class LanguagesModel {
  public name: string;
  public description: string;
  public imagePath: string;
  public languages: Languages[]

  constructor(name: string, desc: string, imgPath: string, languages: Languages[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.languages = languages;
  }
}
