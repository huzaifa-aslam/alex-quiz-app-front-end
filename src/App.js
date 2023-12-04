import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/header";
import AdminMain from "./Components/Main/Admin/adminMain";
import AdminQuiz from "./Components/Quiz/adminQuiz";
import AdminQuestions from "./Components/Question/adminQuestions";
import UserMain from "./Components/Main/User/userMain";
import UserQuiz from "./Components/Main/User/userQuiz";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/admin" element={<Header />}>
          <Route exact index path="categories" element={<AdminMain />} />
          <Route
            exact
            path="/admin/categories/:categoryid/quiz"
            element={<AdminQuiz />}
          />
          <Route
            exact
            path="/admin/categories/:categoryid/quiz/:quizid/questions"
            element={<AdminQuestions />}
          />
        </Route>
        <Route exact path="/" element={<UserMain />} />
        <Route exact path="/quiz/:id" element={<UserQuiz />} />
      </Routes>
    </Box>
  );
};

export default App;
