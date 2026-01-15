import { useEffect, useState } from "react";
import api from "../services/api";

function TestConnection() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    api.get("/test")
      .then(res => setMsg(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return <h2>{msg}</h2>;
}

export default TestConnection;
