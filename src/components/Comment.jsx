export default function Customer() {
  const feedbacks = [
    {
      title: "“Tuyệt vời để phân tích kết quả”",
      content:
        "Tính năng xem lại lịch sử trận đấu trên bảng điểm Arena thật sự rất tiện lợi. Tôi có thể nhanh chóng xem lại kết quả của từng trận đấu và những chi tiết quan trọng như tỷ số,…",
    },
    {
      title: "“Thực sự tiện lợi và tiết kiệm thời gian”",
      content:
        "Trước kia tôi phải ghi chú thủ công kết quả mỗi trận đấu, nhưng giờ thì tất cả đã có thể xem lại chỉ với một vài cú nhấp trên màn hình. Thật tuyệt vời!",
    },
    {
      title: "“Tích hợp Camera giúp tôi xem lại các pha thi đấu đáng nhớ”",
      content:
        "Tính năng camera trong bảng điểm Arena là một điểm cộng tuyệt vời! Tôi có thể xem lại các pha thi đấu quan trọng để phân tích. Đặc biệt là khi có những cú đánh quyết định, tôi không muốn bỏ lỡ một khoảnh khắc nào.",
    },
  ];

  return (
    <section id="customer" className="bg-black text-white py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Một số chia sẻ từ khách hàng đã sử dụng bảng điểm Arena
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {feedbacks.map((fb, idx) => (
          <div
            key={idx}
            className="bg-[#111] border border-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition text-left"
          >
            <h3 className="text-lg font-semibold text-teal-400 mb-3">{fb.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{fb.content}</p>
            <p className="mt-4 italic text-gray-500">– Người chơi</p>
          </div>
        ))}
      </div>
    </section>
  );
}
