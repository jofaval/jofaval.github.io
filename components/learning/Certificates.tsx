// Vendors
import React, { useMemo } from "react";
// Data
import certificatesData from "../../data/certificates.json";

type CertificateType = {
  title: string;
  description?: string | null;
  link?: string | null;
  expirationDate?: number | null;
  expeditionDate?: number | null;
  id?: string | null;
  organization?: string | null;
};

const Certificate: React.FC<CertificateType> = () => (
  <div className="certificate__container">
    <div className="certificate"></div>
  </div>
);

const renderCertificate: (certificate: CertificateType) => JSX.Element = (
  certificate
) => <Certificate {...certificate} />;

const Certificates: React.FC<{
  certificates?: CertificateType[];
}> = ({ certificates = certificatesData as CertificateType[] }) => {
  const preparedCertificates = useMemo(() => {
    return certificates;
  }, [certificates]);

  return (
    <div className="certificates__container">
      <div className="certificates">
        {preparedCertificates && preparedCertificates.map(renderCertificate)}
      </div>
    </div>
  );
};

export default Certificates;
