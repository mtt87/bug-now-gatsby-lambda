module.exports = async (req, res) => {
  const locations = [
    {
      name: "hello",
    },
    {
      name: "world",
    },
  ];
  res.end(JSON.stringify(locations));
}
