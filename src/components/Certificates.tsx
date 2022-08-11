// Vendors
import React, { useMemo } from "react";
// Data
import certificatesData from "../data/certificates.json";

type CertificateType = {
  title: string;
  description?: string | null;
  link?: string | null;
  expirationDate?: number | null;
  expeditionDate?: number | null;
  id?: string | null;
  organization?: string | null;
};

const Certificate: React.FC<CertificateType> = ({ title, description }) => (
  <div className="certificate__container">
    <div className="certificate card">
      <p
        className="certificate__title"
        style={{
          fontWeight: "bold",
          fontSize: "1.25rem",
          textAlign: "center",
        }}
      >
        {title}
      </p>
      <br />
      {description && (
        <span className="certificate__description">{description}</span>
      )}
    </div>
  </div>
);

const renderCertificate: (
  certificate: CertificateType,
  index: number
) => JSX.Element = (certificate, index) => (
  <Certificate {...certificate} key={`certificate_${index}`} />
);

const Certificates: React.FC<{
  certificates?: CertificateType[];
}> = ({ certificates = certificatesData as CertificateType[] }) => {
  const preparedCertificates = useMemo(() => {
    let newCertificates = [...certificates];
    newCertificates = newCertificates.filter((certificate, _) => true);
    return newCertificates;
  }, [certificates]);

  return (
    <div className="certificates__container">
      <div className="certificates__title">Certificates</div>
      <div className="certificates">
        {Array.isArray(preparedCertificates) &&
          preparedCertificates?.map(renderCertificate)}
      </div>
    </div>
  );
};

export default Certificates;
