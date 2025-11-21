import MainHeader from "./components/mainHeader/MainHeader";
import MainFooter from "./components/MainFooter/MainFooter";
import MainRoute from "./app/MainRoute";
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />

      <main className="flex-1">
        <MainRoute />
      </main>
      <MainFooter />
    </div>
  );
};

export default App;
