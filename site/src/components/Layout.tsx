import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
