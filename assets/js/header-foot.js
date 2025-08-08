let header=`
                <div class="container-fluid bg-light p-3 sticky-top" style="width: 100%;">
                <a class="navbar-brand" href="index.html">
                    <i class="bi bi-emoji-sunglasses"></i>
                    <span class="fw-semibold">Suning Un</span>
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="#about-me">About Me</a>
                    </li>
                    <li class="nav-item dropdown fw-semibold"><a class="nav-link dropdown-toggle" href="" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Resume</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#my-volunteering">Volunteering</a></li>
                        <li><a class="dropdown-item" href="#my-achievement">Achievements</a></li>
                        <li><a class="dropdown-item" href="#my-education">Educations</a></li>
                        <li><a class="dropdown-item" href="my-experiences">Experiences</a></li>
                        <li><a class="dropdown-item" href="#skills">Skills</a></li>
                    </ul>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold" href="contact.html">Contact</a>
                    </li>
                    </ul>
                </div>
            </div>`;

document.getElementById("header").innerHTML = header;

let footer = `<div class="container-fluid bg-light">
        <div class=" container-fluid py-4 px-5">
        <div class="row">
            <div class="col-sm-5 mb-5 mb-sm-0 contact-info">
                <p class="fw-bold fs-5">Let's Get To Know ME</p>
                <p class="text-muted">Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                <p class="text-muted">Keep Rising 🚀. Connect with me over live chat!</p>
            </div>
            <div class="col-sm-4 mb-4 mb-sm-0 contact-info">
                <p class="fw-bold fs-5">Contact</p>
                <div class="footer-icons">
                    <div class="d-flex align-items-center mb-1"><i class="bi bi-telephone me-2"></i><span>   070833235 </span></div>
                    <div class="d-flex align-items-center mb-1"><i class="bi bi-envelope me-2"></i><span>   suningun55555@gmail.com</span></div>
                    <div class="d-flex align-items-center mb-1"><i class="bi bi-geo-alt me-2"></i><span>   Phnom Penh City</span></div>
            </div>
            </div>

            <div class="col-sm-3 mb-3 mb-sm-0 text-sm-start contact-info">
                <p class="fw-bold fs-5">Follow</p>
                <div class="footer-icons d-flex justify-content-sm-start fs-5">
                    <a href="https://github.com/suningun" target="_blank"><i class="bi bi-github"></i></a>
                    <a href="https://web.facebook.com/suning0.0" target="_blank"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/suning-un-85a439344/" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a href="https://www.instagram.com/suning_un/" target="_blank"><i class="bi bi-instagram"></i></a>
                    <a href="https://x.com/ing_un66197" target="_blank"><i class="bi bi-twitter"></i></a>
                </div>
            </div>
            </div>
            <div class="col-12 d-flex justify-content-center text-center contact-info fw-semibold">© 2025 by Suning Un. All Rights Reserved</div>
        </div>
    </div>`;

document.getElementById("footer").innerHTML = footer;

