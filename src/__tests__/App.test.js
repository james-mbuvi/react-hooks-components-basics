test("Test passing", () => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
});
function Article() {
  return (
    <div>Dear Reader: Bjarne Stroustrup has the perfect lecture oration.</div>
  );
}
function Comment() {
  return <div>Naturally, I agree with this article.</div>;
}