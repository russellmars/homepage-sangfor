export default function hasOwnProperties(target, props = []) {
  if (!target || typeof target !== "object") return false;
  return props.every(item => target.hasOwnProperty(item));
}
