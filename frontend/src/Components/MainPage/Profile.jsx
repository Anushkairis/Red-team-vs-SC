import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './Profile.css';

export default function Profile() {
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="8" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3 card-custom" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5 avatar-custom" fluid />
                  <MDBTypography tag="h5">Name of the player</MDBTypography>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                        </MDBTypography>
                      </MDBCol>
                    </MDBRow>  
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Tournaments played</MDBTypography>
                        <MDBCardText className="text-muted">123</MDBCardText>
                      </MDBCol>
                    
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Tournaments won</MDBTypography>
                        <MDBCardText className="text-muted">12</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
 