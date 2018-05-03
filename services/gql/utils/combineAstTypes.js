export default types => {
  return types.reduce(
    (p, n) => Object.assign(p, n, { fields: n.fields.concat(p.fields || []) }),
    {}
  );
};
