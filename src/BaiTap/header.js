export default function Header(){
    return(
        <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <title>Heroic Features - Start Bootstrap Template</title>
  {/* Favicon*/}
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  {/* Bootstrap icons*/}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
  {/* Core theme CSS (includes Bootstrap)*/}
  <link href="css/styles.css" rel="stylesheet" />
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container px-lg-5">
      <a className="navbar-brand" href="#!">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</div>

    )
}