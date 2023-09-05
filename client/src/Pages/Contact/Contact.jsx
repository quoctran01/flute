import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Header from "../../Components/Header/Header";
import { Button } from "react-bootstrap";

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Header />
      <MDBContainer className="py-5">
        {/* <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow> */}

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1680199380/d6yhe7mm5ral21trcpjy.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">SÁO TRÚC HẢI TRẦN </p>
                <p className="text-muted mb-4">
                  SẴN SÀNG HỖ TRỢ MỌI NGƯỜI CÁC VẤN ĐỀ VỀ SÁO
                </p>
                <div>
                  <Button variant="outline-success">Follow</Button>
                  <Button variant="outline-success" className="ms-1">
                    Message
                  </Button>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBCardImage
                  src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1684289911/kn6dfrm8ntunuwowrrvu.jpg"
                  alt="avatar"
                  // className="rounded-circle"

                  fluid
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Chủ cửa hàng</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Trần Như Hải
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      anh123vvv@gmail.com
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Số điện thoại</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      (035) 956-8818
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>{" "}
                <hr></hr>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Địa chỉ</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Hạ Long-Quảng Ninh
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol>
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <h2
                        // className="text-primary font-italic me-1"
                        style={{ textAlign: "center", color:"green"}}
                      >
                        ĐÔI NÉT VỀ SÁO TRÚC HẢI TRẦN
                      </h2>{" "}
                    </MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: "18px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp; Ngày nay âm nhạc là một liều
                      thuốc bổ tinh thần tốt nhất để giúp cho đời sống con người
                      luôn được vui vẻ và thoải mái. Để tạo ra những âm thanh
                      đẹp, thu hút người nghe thì không thể nào thiếu những nhạc
                      cụ tốt. Với những người chơi nhạc, nhạc cụ tốt quyết định
                      đến việc có chơi nhạc hay hay không. Do đó chọn mua cho
                      mình một sản phẩm nhạc cụ chất lượng uy tín là rất cần
                      thiết. Chính vì vậy với kinh nghiệm chơi sáo lâu năm của
                      mình , nhắm giúp mọi người có thể tìm kiếm và chọn lựa sản
                      phẩm phù hợp mình đã tạo nên website này giúp việc mua
                      hàng cũng như để chia sẻ kiến thức tới mọi người. Khách
                      hàng khi mua sáo sẽ được tặng kèm sản phẩm về sáo như dây
                      treo, túi đựng sáo ...
                    </MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: "18px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp; Nếu bạn là một người đam mê sáo trúc nhưng chưa có kinh nghiệm trong việc chọn sáo hay chơi sáo. Hãy liên hệ ngay với sáo trúc Hải Trần.
                      Với phương trâm TẬN TÂM - UY TÍN - TRÁCH NHIỆM. Sáo trúc Hải Trần sẽ đem lại cho bạn những giá trị hữu ích nhất.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
