import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./AppContainer.module.scss";
import HomePage from "../../pages/HomePage/HomePage";
import EmployeePage from "../../pages/EmployeePage/EmployeePage";
import AddEmployeePage from "./../../pages/AddEmployeePage/AddEmployeePage";
import EditEmployeePage from "../../pages/EditEmployeePage/EditEmployeePage";

const AppContainer = () => {
  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<EmployeePage />} />
            <Route path="/:id/edit" element={<EditEmployeePage />} />
            <Route path="/add" element={<AddEmployeePage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppContainer;
