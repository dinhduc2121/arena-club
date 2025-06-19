export default function Features() {
  const features = [
    {
      title: "Thiết lập trận đấu nhanh chóng",
      desc: (
        <>
          <p className="mb-2">Arena giúp thiết lập trận đấu đơn giản chỉ với vài thao tác:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Lựa chọn số lượng người chơi: 1v1, 2v2 hoặc nhiều hơn.</li>
            <li>Cài đặt thể loại thi đấu: Pool hoặc Carom.</li>
            <li>Tuỳ chỉnh quy tắc: Giới hạn thời gian và điểm mục tiêu.</li>
          </ul>
        </>
      ),
      image: "tn1.jpg",
    },
    {
      title: "Hiển thị thông tin chi tiết trận đấu",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-1">
            <li>Hiển thị tên người chơi rõ ràng.</li>
            <li>Điểm số cập nhật theo thời gian thực.</li>
            <li>Thời gian thi đấu: thời gian lượt cơ và tổng trận.</li>
            <li>Thông tin thể loại thi đấu kèm hiển thị camera.</li>
          </ul>
        </>
      ),
      image: "tn2.jpg",
    },
    {
      title: "Tích hợp Camera",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-1">
            <li>Ghi lại toàn bộ trận đấu để lưu giữ và xem lại.</li>
            <li>Hỗ trợ tua lại những tình huống quan trọng.</li>
          </ul>
        </>
      ),
      image: "tn3.jpg",
    },
    {
      title: "Bảng xếp hạng",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-1">
            <li>Hiển thị thứ hạng, số trận, điểm tích lũy.</li>
            <li>Ghi lại thành tích cá nhân.</li>
            <li>Công khai thông tin để tăng động lực thi đấu.</li>
          </ul>
        </>
      ),
      image: "tn4.jpg",
    },
    {
      title: "Lịch sử các trận đấu",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-1">
            <li>Danh sách trận đấu theo thời gian.</li>
            <li>Thông tin gồm tên người chơi, thời gian, kết quả.</li>
          </ul>
        </>
      ),
      image: "tn5.jpg",
    },
  ];

  return (
    <section id="features" className="bg-black text-white text-center py-20 px-4">
      <h2 className="text-3xl font-bold mb-10">
        Bảng điểm thông minh Arena – Đồng hành chuyên nghiệp cho mọi trận đấu billiards
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-[#111] border border-gray-700 p-6 rounded-lg shadow-md text-left">
            <img
              src={`/images/${feature.image}`}
              alt={feature.title}
              className="w-full h-48 object-cover mb-4 rounded"
              draggable={false}
            />
            <h3 className="text-xl font-bold mb-2 text-teal-400">{feature.title}</h3>
            <div className="text-sm text-gray-300 leading-relaxed">{feature.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
