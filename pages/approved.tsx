
export default function Approved() {

  return (
    <div>

<h1>Logged in!</h1>
    </div>
  )
}
export function getServerSideProps({req,res}){

  if (req.cookies.sessionId !== "") {
    return {
      redirect: {
        destination: '/account',
        permanent: false,
      },
    }
  }

  return {props: {
    token: req.cookies.token || "",
    id: req.cookies.sessionId || "",
    account_id: req.cookies.account_id || "",
    name: req.cookies.name || "",
    avatar : req.cookies.avatar || "",
  }
  
  }
}
