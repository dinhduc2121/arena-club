// BrandAmbassadorsSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const doiTacData = [
    {
      img: "dt1.jpg",
      desc: `Arena chính thức hợp tác cùng Dương Quốc Hoàng – Cơ thủ số 1 Việt Nam với vai trò đại sứ thương hiệu:

      Arena Platform tự hào công bố mối quan hệ hợp tác chiến lược cùng Dương Quốc Hoàng – cơ thủ số 1 Việt Nam, biểu tượng của tài năng và bản lĩnh trên đấu trường billiards quốc tế. Với vai trò đại sứ thương hiệu, Dương Quốc Hoàng sẽ đồng hành cùng Arena trong hành trình nâng tầm trải nghiệm billiards bằng công nghệ tiên tiến.

      Arena Platform mang đến hệ sinh thái công nghệ dành riêng cho billiards:

      Bảng điểm thông minh giúp tự động hóa việc cập nhật và chia sẻ điểm số.
      Livestream giải đấu chuyên nghiệp, nâng tầm trải nghiệm khán giả.
      Hệ thống giải đấu & cộng đồng người chơi, mang lại sự kết nối liên tục giữa câu lạc bộ, cơ thủ và người hâm mộ.
      Dẫn dắt phong trào billiards hiện đại tại Việt Nam
      Với vai trò đại sứ thương hiệu, Dương Quốc Hoàng không chỉ đại diện cho đẳng cấp thi đấu, mà còn là cầu nối để công nghệ Arena tiếp cận gần hơn đến các câu lạc bộ và người chơi trên toàn quốc. Sự kết hợp này hứa hẹn sẽ góp phần thúc đẩy phong trào billiards hiện đại, chuyên nghiệp và sáng tạo tại Việt Nam.

      Phát biểu từ Dương Quốc Hoàng:

      “Tôi rất hào hứng khi được đồng hành cùng Arena – một nền tảng công nghệ đang thay đổi cách người chơi tiếp cận và trải nghiệm billiards. Đây là bước đi cần thiết để phát triển mạnh mẽ hơn nữa cộng đồng cơ thủ Việt Nam” – Dương Quốc Hoàng chia sẻ.`,
          },
    {
      img: "dt2.jpg",
      desc: `Sự kết hợp giữa đẳng cấp và công nghệ

            Sở hữu thành tích ấn tượng cùng phong cách thi đấu cuốn hút, Seo Seo A không chỉ là biểu tượng của sự chuyên nghiệp mà còn là hình mẫu truyền cảm hứng cho cộng đồng billiards trẻ tại châu Á. Việc cô đồng hành cùng Arena Platform thể hiện cam kết mạnh mẽ trong việc mang đến trải nghiệm công nghệ billiard đỉnh cao, kết nối đam mê và hiệu suất thi đấu thực tế.

            Tăng cường trải nghiệm billiard tại Việt Nam
            Arena tự hào là nền tảng công nghệ dành riêng cho cộng đồng billiards, tích hợp:

            - Bảng điểm thông minh cập nhật tự động.

            - Livestream giải đấu chất lượng cao.

            - Gamification và hệ thống cộng đồng người chơi.

            Sự đồng hành của Seo Seo A sẽ góp phần lan tỏa giá trị thương hiệu Arena đến gần hơn với người chơi Việt Nam, đặc biệt trong các giải đấu, sự kiện cộng đồng và chiến dịch truyền thông sắp tới.

            Chia sẻ từ đại diện Arena:

            “Chúng tôi tin rằng sự kết hợp giữa một vận động viên đỉnh cao như Seo Seo A và nền tảng công nghệ hàng đầu của Arena sẽ tạo ra bước ngoặt mới cho sự phát triển của cộng đồng billiards tại Việt Nam” – đại diện Arena chia sẻ.`,
                },
    {
      img: "dt3.jpg",
      desc: `Hollywood mở showroom bàn billiards dưới sự vận hành của Arena tại Việt Nam:
      
      
              Showroom của Hollywood tại Việt Nam được vận hành bởi Arena. Doanh nghiệp này thành lập vào đầu năm 2023 với hai nhà sáng lập kỹ thuật viên từ Big Data. Theo đơn vị, mục tiêu là giúp người chơi tại Việt Nam tiếp cận sản phẩm chuẩn quốc tế, qua đó cải thiện chất lượng, phát triển bộ môn billiards trong nước

              Việc đưa vào vận hành showroom được Arena kỳ vọng giúp đưa các mẫu sản phẩm bàn chính hãng đến tay người dùng, cung cấp cho các giải đấu ở nhiều cấp độ. Theo đơn vị, nhà sản xuất Hollywood là cái tên nổi tiếng tại Hàn Quốc với gần 40 năm hoạt động. Sản phẩm của doanh nghiệp này được thị trường chuộng nhờ chất lượng ổn định và liên tục cập nhật mẫu mã

              Showroom đưa vào sử dụng trong năm 2023, có diện tích hơn 700 m2 là nơi Arena trưng bày, bán các sản phẩm bàn billiards của nhà sản xuất từ Hàn Quốc. Các mẫu nổi bật được trưng bày như bàn đá cẩm thạch Pantheon, bàn Olympique vừa sử dụng giải chung kết ba băng World Cup năm 2023, bàn lỗ mới ra mắt Ikon,…`,
    },
    {
      img: "dt4.jpg",
      desc: `Arena chính thức hợp tác cùng Chiêm Hồng Thái – nhà vô địch quốc gia Carom 3 băng 2024 với vai trò đại sứ thương hiệu: 
      

      Tài năng trẻ Chiêm Hồng Thái là nhà vô địch quốc gia Carom 3 băng 2024 ở Đà Nẵng. Mới đây, anh đã ký thoả thuận tài trợ đối tác cùng Hollywood và Arena.

              Chiêm Hồng Thái có thành tích ấn tượng trong năm vừa qua, khi tăng 80 hạng trên bảng xếp hạng UMB và hiện đang xếp hạng 23 thế giới. Cơ thủ này có nhiều tiềm năng sẽ tạo đột phá trong năm 2024 với mùa giải World Cup sắp tới, bắt đầu bằng giải World Cup ở TPHCM.

              Được biết, Hollywood có nhiều chiến lược đầu tư vào các hoạt động Billiard của Việt Nam bằng việc tài trợ các giải đấu lớn trong nước và quốc tế bao gồm: giải vô địch quốc gia Carom, giải World Cup Billiard ở TP.HCM, World Championship.

              Arena là đơn vị phân phối bàn bida Hollywood chính hãng, là đối tác phát triển chiến lược ở thị trường bida Việt Nam, có nhiều đóng góp cho phong trào billiard trong nước bằng việc cùng hỗ trợ cho đội tuyển Bình Dương và hiện tại cho Chiêm Hồng Thái trong việc nâng cao và phát triển thành tích của các cơ thủ Việt Nam trong và ngoài nước`,
    },
];

export default function BrandAmbassadorsSlider() {
  return (
    <section id="ambassadors" className="bg-black text-white w-screen h-screen py-10 px-[60px]">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Đại sứ thương hiệu
      </h2>

      <Swiper
        modules={[Pagination, A11y]}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[calc(100%-6rem)]"
      >
        {doiTacData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-start gap-8 w-full h-full"
            >
              <div className="w-full lg:w-1/2 h-full">
                <img
                  src={`/images/${item.img}`}
                  alt={`Đối tác ${idx + 1}`}
                  className="w-full h-full object-cover rounded-xl border border-gray-800"
                  draggable={false}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 text-sm text-gray-200 leading-relaxed text-justify overflow-y-auto pr-2 h-full"
              >
                {item.desc
                  .replace(/\n[ \t]+/g, '\n')
                  .split('\n\n')
                  .map((paragraph, i) => {
                    const isTitleLike =
                      paragraph.trim().length < 150 &&
                      /^[A-ZÁÀÂĂĐÉÈÊÍÌÎÓÒÔƠÚÙƯÝ]/.test(paragraph.trim());

                    return isTitleLike ? (
                      <p key={i} className="mb-4 text-lg font-semibold text-white">
                        {paragraph}
                      </p>
                    ) : (
                      <p key={i} className="mb-4 indent-6">
                        {paragraph}
                      </p>
                    );
                  })}
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
