export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Sophia Lee",
      feedback:
        "The session was life-changing! I got so much clarity about my career path.",
      imageUrl: "/images/client1.png",
    },
    {
      name: "David Kim",
      feedback:
        "Accurate predictions and very professional. Highly recommended.",
      imageUrl: "/images/client2.png",
    },
    {
      name: "Emma Watson",
      feedback:
        "I feel more confident about my future now. Amazing experience!",
      imageUrl: "/images/client3.png",
    },
    {
      name: "Emma Watson",
      feedback:
        "I feel more confident about my future now. Amazing experience!",
      imageUrl: "/images/client4.png",
    },
  ]);
}
