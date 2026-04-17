export default function OpenHouse() {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      background: "#f8f8f8",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <div style={{
        maxWidth: "500px",
        margin: "auto",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center" }}>Open House Sign-In</h2>

        <form action="https://formspree.io/f/myknooen" method="POST">

          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />

          <select name="timeline">
            <option value="">Buying Timeline</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>1 year+</option>
            <option>Just looking</option>
          </select>

          <select name="source">
            <option value="">How did you hear about this?</option>
            <option>Sign</option>
            <option>Advertising</option>
            <option>Internet</option>
            <option>Facebook</option>
            <option>Instagram</option>
          </select>

          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
}