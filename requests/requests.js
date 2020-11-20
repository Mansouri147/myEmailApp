app.get("/", (req, res) => res.status(200).send("API activated"));

app.post("/sendEmail", (req, res) => {
  console.log(req);
});

// app.post("/sendingEmail", (req, res) => {
//   if (
//     ((res) => {
//       console.log(res);
//     },
//     (err) => {
//       console.log(err);
//     })
//   );
// });
