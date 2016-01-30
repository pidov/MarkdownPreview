export default function(file) {
  let myPromise = new Promise(function(resolve, reject) {

    let reader = new FileReader();

    reader.onload = (function(file) {
      return function(e) {
        resolve(e.target.result);
      }
    })(file)

    reader.readAsText(file);
  });
  return myPromise;
}
