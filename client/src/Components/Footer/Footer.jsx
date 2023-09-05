import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div>
          <NavLink href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </NavLink>
          <NavLink href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </NavLink>
          <NavLink href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </NavLink>
          <NavLink href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </NavLink>
          <NavLink href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </NavLink>
          <NavLink href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </NavLink>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                SÁO TRÚC HẢI TRẦN
              </h6>
              <p>
                Tự hào là thương hiệu sáo trúc uy tín, trách nhiệm với khách
                hàng.{" "}
                <b>
                  <i>Cam kêt chuẩn âm trên từng phím bấm</i>
                </b>
              </p>
              <p>
                Luôn luôn hỗ trợ khách hàng về sản phẩm tốt nhất, phù hợp với
                mục đích của khách hàng.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">VỀ CHÚNG TÔI</h6>
              <p>
                <NavLink href="#!" className="text-reset">
                  Trang Chủ
                </NavLink>
              </p>
              <p>
                <NavLink href="#!" className="text-reset">
                  Giới Thiệu
                </NavLink>
              </p>
              <p>
                <NavLink href="#!" className="text-reset">
                  Tin Tức
                </NavLink>
              </p>
              <p>
                <NavLink href="#!" className="text-reset">
                  Chính Sách
                </NavLink>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">LIÊN HỆ</h6>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p> */}
              <p style={{ padding: "0 10px" }}>
                <NavLink
                  target="_blank"
                  href="https://www.facebook.com/"
                  style={{ fontSize: "1.5rem", color: "black" }}
                  rel="noreferrer"
                >
                  <Facebook />
                </NavLink>
              </p>
              <p style={{ padding: "0 10px" }}>
                <NavLink
                  target="_blank"
                  href="https://www.facebook.com/"
                  style={{ fontSize: "1.5rem", color: "black" }}
                  rel="noreferrer"
                >
                  <Instagram />
                </NavLink>
              </p>
              <p style={{ padding: "0 10px" }}>
                <NavLink
                  target="_blank"
                  href="https://www.facebook.com/"
                  style={{ fontSize: "1.5rem", color: "black" }}
                  rel="noreferrer"
                >
                  <Youtube />
                </NavLink>
              </p>
            </MDBCol>

            {/* <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <NavLink
          className="text-reset fw-bold"
          href="https://www.facebook.com/trannhu.hai.3"
        >
          DESIGN BY: <b>Hai Tran</b>
        </NavLink>
      </div>
    </MDBFooter>
  );
}
