/**
 * ReservedArea.js
 * 
 * Component that contains all the routes and components 
 * to display after user log in to the app
 */

import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import QuestionDetails from "./QuestionDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Navigation from "./Navigation";

const ReservedArea = () => {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route
          exact
          path="/questions/:question_id"
          element={<QuestionDetails />}
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/add" element={<NewPoll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pageNotFound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default ReservedArea;
