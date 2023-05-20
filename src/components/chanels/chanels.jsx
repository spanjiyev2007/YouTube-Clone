import { useParams } from "react-router-dom"

function Chanels() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      Chanels
    </div>
  )
}

export default Chanels
