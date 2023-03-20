import Alert from "../components/alert";
import Meta from "../components/meta";
import MainNav from "../components/MainNav";
import LayoutFooter from "../components/LayoutFooter";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <MainNav />
        <main> {children} </main>
      </div>
      <LayoutFooter />
    </>
  );
}
