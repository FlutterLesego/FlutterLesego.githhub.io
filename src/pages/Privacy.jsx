import styled from "styled-components";

const StyledPrivacy = styled.div`
  height: 100vh;
  width: min(88%, 128rem);
  margin: 0 auto;
  display: grid;
  padding: 4rem 0;

  h1 {
    line-height: 1.24;
  }

  h2 {
    line-height: 1.24;
  }

  p {
    line-height: 1.5;
  }

  li {
    line-height: 1.5;
  }
`;

export function Privacy() {
  return (
    <StyledPrivacy>
      <h1>JamiiDrive Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> 04/03/2024
      </p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to JamiiDrive (the "App"). This Privacy Policy is designed to
        inform you about the types of information we collect, how we use it, and
        your rights regarding your personal data. By using the App, you consent
        to the practices described in this Privacy Policy.
      </p>

      <h2>2. Information We Collect</h2>
      <ul>
        <li>
          <strong>2.1 Personal Information:</strong> We may collect certain
          personally identifiable information ("Personal Information") that you
          provide to us when using the App. This may include but is not limited
          to Device information (e.g., device model, operating system, browser
          type).
        </li>
        <li>
          <strong>2.2 Non-Personal Information:</strong> We may also collect
          non-personal information ("Non-Personal Information") when you
          interact with the App. This may include Device information (e.g.,
          device model, operating system, browser type).
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>
          <strong>3.1 Personal Information:</strong> We may use your Personal
          Information to Device information (e.g., device model, operating
          system, browser type) for notifications.
        </li>
        <li>
          <strong>3.2 Non-Personal Information:</strong> The Non-Personal
          Information we collect is used to Device information (e.g., device
          model, operating system, browser type) for notifications.
        </li>
      </ul>
      <h2>4. Cookies and Similar Technologies</h2>
      <p>
        <strong>4.1 Cookies:</strong> The App may use cookies and similar
        tracking technologies to enhance user experience and collect information
        about how the App is used. You can manage your cookie preferences.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        <strong>5.1 Third-Party Providers:</strong> We may engage third-party
        companies or individuals to facilitate the App's functionality, provide
        services on our behalf, or assist us in analyzing how the App is used.
        These third parties will have access to your information only to perform
        these tasks and are obligated not to disclose or use it for any other
        purpose.
      </p>

      <h2>6. Data Security</h2>
      <p>
        <strong>6.1 Security Measures:</strong> We take reasonable steps to
        protect your information from unauthorized access, disclosure,
        alteration, or destruction. However, no data transmission or storage
        system can be guaranteed to be 100% secure.
      </p>

      <h2>7. Your Rights</h2>
      <ul>
        <li>
          <strong>7.1 Access and Correction:</strong> You have the right to
          access and correct your Personal Information held by us. If you wish
          to do so, please contact us info@savvyrad.com.
        </li>
        <li>
          <strong>7.2 Data Deletion:</strong> You can request the deletion of
          your Personal Information from our systems. We will comply with such
          requests unless there is a legitimate reason to retain the data, as
          required by law or for other legitimate purposes.
        </li>
      </ul>
      <h2>8. Changes to this Privacy Policy</h2>
      <p>
        <strong>8.1 Updates:</strong> We may update this Privacy Policy from
        time to time. The most current version will be posted on the App, and
        the "Effective Date" at the top will indicate when it was last revised.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        <strong>9.1</strong> If you have any questions or concerns about this
        Privacy Policy or our data practices, please contact us at
        info@jamiidrive.co.za.
      </p>
    </StyledPrivacy>
  );
}
