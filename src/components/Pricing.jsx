export default function Pricing() {
  const plans = [
    {
      name: "Cơ bản",
      price: "11.000.000₫",
      features: [
        "Hiển thị điểm số tự động",
        "Kết nối Bluetooth",
        "Màn hình LED nhỏ",
        "Bảo hành 6 tháng",
      ],
      popular: false,
    },
    {
      name: "Nâng cao",
      price: "20.500.000₫",
      features: [
        "Tất cả tính năng của bản Cơ bản",
        "Kết nối Wi-Fi",
        "Màn hình LED lớn",
        "Bảo hành 12 tháng",
      ],
      popular: true,
    },
    {
      name: "Doanh nghiệp",
      price: "Liên hệ",
      features: [
        "Tùy chỉnh giao diện",
        "Tích hợp phần mềm quản lý",
        "Hỗ trợ kỹ thuật 24/7",
        "Bảo hành 24 tháng",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-black text-white text-center py-20 px-4"
    >
      <h2 className="text-3xl font-bold mb-10">Bảng giá</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-lg border border-gray-700 p-6 shadow-lg transition transform hover:-translate-y-1 ${
              plan.popular
                ? "bg-white text-black scale-105"
                : "bg-[#111] text-white"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="text-sm space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button
              className={`px-5 py-2 rounded font-semibold transition ${
                plan.popular
                  ? "bg-black text-teal-400 hover:bg-blue-600"
                  : "bg-blue-600 text-black hover:bg-gray-200"
              }`}
            >
              {plan.price === "Liên hệ" ? "Liên hệ ngay" : "Mua ngay"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
