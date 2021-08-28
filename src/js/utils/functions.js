export function order(columns = 4) {
  const cols = columns;
  let col = 0;
  let out = [];
  while (col < cols) {
    for (let i = 0; i < paintings.length; i += cols) {
      const _val = paintings[i + col];
      _val != undefined ? out.push(_val) : "";
    }
    col++;
  }
  return out;
}

export function createSlug(string) {
  return string.toLowerCase().replace(/\s/g, "-");
}

export function makeAbsolutePath(path) {
  return path.replace(/\.\//i, "/");
}

export function animate(node, animation) {
  node.classList.add(animation);
  node.addEventListener('animationend', function() {
    node.classList.remove(animation);
  }, {once: true})
}