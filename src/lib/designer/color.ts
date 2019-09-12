// values range from 0 to 1
export class Color {
  public r: number = 0.0;
  public g: number = 0.0;
  public b: number = 0.0;
  public a: number = 1.0;

  public constructor() {}

  public static parse(hex: string): Color {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      var c = new Color();
      c.r = parseInt(result[1], 16) / 255;
      c.g = parseInt(result[2], 16) / 255;
      c.b = parseInt(result[3], 16) / 255;
      return c;
    } else {
      return new Color();
    }
  }

  public toHex(): string {
    //https://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript
    var r = ~~(this.r * 255);
    var g = ~~(this.g * 255);
    var b = ~~(this.b * 255);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}