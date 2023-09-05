import React from 'react'
import { Col } from 'react-bootstrap'

const SideBar = () => {
    const itemServices = [
        {
          urlImg:  "https://res.cloudinary.com/uploadimgvvv/image/upload/v1678631170/jxmrtpp1ovwjpu1edbqp.png",
          title: "Miễn phí vận chuyển",
          content: "Giao hàng tại nhà trong bán kính 10km"
        },
        {
          urlImg:  "https://res.cloudinary.com/uploadimgvvv/image/upload/v1678631172/nzmjhs7ugq16s9nvypyx.png",
          title: "Hoàn tiền 100%",
          content: "Nếu sản phẩm lỗi hoặc hư hỏng"
        },
        {
          urlImg:  "https://res.cloudinary.com/uploadimgvvv/image/upload/v1678631172/zfyh8bxnbpyqgtryjtg3.png",
          title: "Thanh toán tận nhà ",
          content: "Không cần cọc trước"
        },
        
      ]
  return (
    <Col xs md="3" className="gg">
    <div style={{border:"1px solid #f0f0f0"}}>
        {
          itemServices.map((service,index) => (
            <ul className="service" key ={index}>
                <li style={{display:"flex"}} >
                  <img src={service.urlImg} alt="" style={{width:"50px"}}/>
                  <div>
                    <p>{service.title}</p>
                      <span>{service.content}</span>
                  </div>
                </li>
            </ul>
          ))
        }
    </div>
  </Col>
  )
}

export default SideBar