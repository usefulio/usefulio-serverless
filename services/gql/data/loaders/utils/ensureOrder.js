export default options => {
  const {
    docs,
    keys,
    prop,
    error = key => `Document does not exist (${key})`
  } = options;
  // Put documents (docs) into a map where key is a document's ID or some
  // property (prop) of a document and value is a document.
  const docsMap = new Map();
  docs.forEach(doc => docsMap.set(doc[prop], doc));
  // Loop through the keys and for each one retrieve proper document. For not
  // existing documents generate an error.
  return keys.map(key => {
    return (
      docsMap.get(key) ||
      new Error(typeof error === "function" ? error(key) : error)
    );
  });
};
