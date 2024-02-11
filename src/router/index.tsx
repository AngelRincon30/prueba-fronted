import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../page/auth";
import { LibraryBookPage } from "../page/library-book";
import { ReadingListPage } from "../page/reading-list";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/library-book" element={<LibraryBookPage />} />
      <Route path="/reading-list" element={<ReadingListPage />} />
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );
};
