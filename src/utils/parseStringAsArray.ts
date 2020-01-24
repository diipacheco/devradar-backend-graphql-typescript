export default function (str: string): Array<string> {
  return str.split(',').map((tech) => tech.trim().toLowerCase());
}
