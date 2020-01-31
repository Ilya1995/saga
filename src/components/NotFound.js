import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mtb-3">
      Страница не найдена. Вернуться на <Link to="/">главную</Link>?
    </div>
  );
}

export default NotFound;
