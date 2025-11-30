import React from 'react';
import { teamMembers } from 'data';

const Team = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-8">
      {teamMembers.map((item) => (
        <div className="col-md-6 col-lg-4" key={item.id}>
          <div className="team-card card shadow-lg h-100 border-0">
            <div className="card-body p-5 d-flex flex-column justify-content-center align-items-center text-center">
              
              {/* İsim ve Ünvan (Her zaman görünür) */}
              <div className="static-info">
                <div className="icon-box bg-primary text-white rounded-circle mb-4 fs-4" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="uil uil-user"></i>
                </div>
                <h4 className="mb-1">{item.name}</h4>
                <p className="mb-0 text-muted fw-bold text-uppercase fs-14">{item.role}</p>
              </div>

              {/* Biyografi (Sadece hover yapınca görünür) */}
              <div className="hover-info mt-3">
                <hr className="w-50 mx-auto border-primary my-3" style={{ opacity: 1 }} />
                <p className="mb-0 fs-16">{item.bio}</p>
              </div>

            </div>
          </div>
        </div>
      ))}

      {/* Stil Bloğu (Bu bileşene özel CSS) */}
      <style jsx>{`
        .team-card {
          transition: all 0.3s ease;
          background: #fff;
          overflow: hidden;
        }

        .team-card:hover {
          transform: translateY(-5px);
          background: #f8f9fa; /* Hafif gri arka plan hover'da */
        }

        .hover-info {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .team-card:hover .hover-info {
          max-height: 200px; /* Yeterli bir yükseklik */
          opacity: 1;
        }

        .icon-box {
            transition: all 0.3s ease;
        }
        
        .team-card:hover .icon-box {
            background-color: #D4AF37 !important; /* Altın sarısına dönüş */
            transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Team;