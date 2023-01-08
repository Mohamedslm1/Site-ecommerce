import React from 'react';
import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export default function App() {
 
  return (
    <div className="app">
      
        <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
          <div class="container text-light">
              <div class="w-100 d-flex justify-content-between">
                  <div>
                      <i class="fa fa-envelope mx-2"></i>
                      <a class="navbar-sm-brand text-light text-decoration-none" href="#">atntparis@gmail.com</a>
                      <i class="fa fa-phone mx-2"></i>
                      <a class="navbar-sm-brand text-light text-decoration-none" href="#">0615055353</a>
                  </div>
                  <div>
                      <a class="text-light" href="#" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
                  </div>
              </div>
          </div>
        </nav>
       
        <nav class="navbar navbar-expand-lg navbar-light shadow">
          <div class="container d-flex justify-content-between align-items-center">
              <a class="navbar-brand text-success logo h1 align-self-center" href="#">
                  ATNT PARIS
              </a>
              <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                  <div class="flex-fill">
                      <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                          <li class="nav-item">
                              <a class="nav-link" href="#template-mo-jassa-hero-carousel">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#about">About</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#shop">Shop</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#tempaltemo_footer">Contact</a>
                          </li>
                      </ul>
                  </div>
                  <div class="navbar align-self-center d-flex">
                      <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                          <div class="input-group">
                              <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..." />
                              <div class="input-group-text">
                                  <i class="fa fa-fw fa-search"></i>
                              </div>
                          </div>
                      </div>
                      <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                          <i class="fa fa-fw fa-search text-dark mr-2"></i>
                      </a>
                      <a class="nav-icon position-relative text-decoration-none" href="#">
                          <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                      </a>
                      <a class="nav-icon position-relative text-decoration-none" href="#">
                          <i class="fa fa-fw fa-user text-dark mr-3"></i>
                          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                      </a>
                  </div>
              </div>
          </div>
        </nav>
       
        <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
              <div class="w-100 pt-1 mb-5 text-right">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form action="" method="get" class="modal-content modal-body border-0 p-0">
                  <div class="input-group mb-2">
                      <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                      <button type="submit" class="input-group-text bg-success text-light">
                          <i class="fa fa-fw fa-search text-white"></i>
                      </button>
                  </div>
              </form>
          </div>
        </div>
      
        <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src="https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg?w=996&t=st=1673177481~exp=1673178081~hmac=1318a548ed144a0ace4354b3d96e137316526154be48836deb8985afe82eadbf" alt="" />
                          </div>
                          <div class="col-lg-6 mb-0 d-flex align-items-center">
                              <div class="text-align-left align-self-center">
                                  <h1 class="h1 text-success"><b>ATNT</b> SHOP</h1>
                                  <h3 class="h2">CHECK OUT ALL THE TRENDS</h3>
                                  <p>
                                  Paris-based collective VETEMENTS grew out of a desire to escape the continual rebranding and reinvention of the fashion cycle. The brand presents refined alternatives to overthought design, focusing on singular, impactful pieces with immediate appeal rather than thematic seasonal collections. 
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src="https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg?w=996&t=st=1673177557~exp=1673178157~hmac=cd304a660df0ba5f1452eeb55cf6edbe694f77b47332dbc1830bec1d14ddc8a7" alt="" />
                          </div>
                          <div class="col-lg-6 mb-0 d-flex align-items-center">
                              <div class="text-align-left">
                                  <h1 class="h1">NEW SEASON ARRIVALS</h1>
                                  <h3 class="h2">CHECK OUT ALL THE TRENDS</h3>
                                  <p>
                                  Paris-based collective VETEMENTS grew out of a desire to escape the continual rebranding and reinvention of the fashion cycle. The brand presents refined alternatives to overthought design, focusing on singular, impactful pieces with immediate appeal rather than thematic seasonal collections. 
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man-wearing-sunglasses_158538-5011.jpg?w=826&t=st=1673177601~exp=1673178201~hmac=3c504b6ebdeed34a016632f36e22b861bcd68d64144ad199c42c42a47a059293" alt="" />
                          </div>
                          <div class="col-lg-6 mb-0 d-flex align-items-center">
                              <div class="text-align-left">
                                  <h1 class="h1">NEW SEASON ARRIVALS</h1>
                                  <h3 class="h2">CHECK OUT ALL THE TRENDS</h3>
                                  <p>
                                  Paris-based collective VETEMENTS grew out of a desire to escape the continual rebranding and reinvention of the fashion cycle. The brand presents refined alternatives to overthought design, focusing on singular, impactful pieces with immediate appeal rather than thematic seasonal collections. 
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
              <i class="fas fa-chevron-left"></i>
          </a>
          <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
              <i class="fas fa-chevron-right"></i>
          </a>
        </div>
        
        <section id="about" class="container py-5">
          <div class="row text-center pt-3">
              <div class="col-lg-6 m-auto">
                  <h1 class="h1">THIS IS SLOW FASHION.</h1>
                  <p>
                  our mission: to make investment pieces just for petites that last you through the years.
                  </p>
              </div>
          </div>
          <div class="row">
              <div class="col-12 col-md-4 p-5 mt-3">
                  <a href="#"><img src="https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2022/10/28/goods-img/1669341094110244970.jpg" class="rounded-circle img-fluid border" /></a>
                  <h5 class="text-center mt-3 mb-3">Pulls</h5>
                  <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
              </div>
              <div class="col-12 col-md-4 p-5 mt-3">
                  <a href="#"><img src="https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2022/05/13/goods-img/1671746725547560553.jpg" class="rounded-circle img-fluid border" /></a>
                  <h2 class="h5 text-center mt-3 mb-3">Robes</h2>
                  <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
              </div>
              <div class="col-12 col-md-4 p-5 mt-3">
                  <a href="#"><img src="https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2022/12/12/goods-img/1670971591437425130.jpg" class="rounded-circle img-fluid border" /></a>
                  <h2 class="h5 text-center mt-3 mb-3">CHAUSSURES & ACCS</h2>
                  <p class="text-center"><a class="btn btn-success">Go Shop</a></p>
              </div>
          </div>
        </section>
        
        <section id="shop" class="bg-light">
          <div class="container py-5">
              <div class="row text-center py-3">
                  <div class="col-lg-6 m-auto">
                      <h1 class="h1">OUR SELECTION</h1>
                      <p>
                        
                      </p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://ae01.alicdn.com/kf/S44356fd229f2498398d994f915747186B/Pull-tricot-col-montant-pour-homme-d-contract-Slim-Fit-basique-automne-printemps.jpg_Q90.jpg_.webp" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-muted fa fa-star"></i>
                                      <i class="text-muted fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">$24.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark"> 10% de réduction bonus</a>
                              <p class="card-text">
                              Mens Stand Collar Knitted Sweater Casual Slim Fit Basic Autumn Spring Pullover Sweater
                              </p>
                              <p class="text-muted">Reviews (24)</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://ae01.alicdn.com/kf/HTB1uRtQQXXXXXaAXpXXq6xXFXXXe/Mini-Jupe-crayon-moulante-pour-femmes-longueur-aux-genoux-taille-haute-extensible-Sexy-nouvelle-collection-2022.jpg_Q90.jpg_.webp" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-muted fa fa-star"></i>
                                      <i class="text-muted fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">$48.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">20% de réduction</a>
                              <p class="card-text">
                              2022 New Women Bodycon Mini Pencil Skirt Knee Length High Waist Stretchy Sexy Mini Skirt
                              </p>
                              <p class="text-muted">Reviews (48)</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://ae01.alicdn.com/kf/Sce3f98c00eac479fbcf51e14536914e5H/Sweat-shirt-capuche-pour-homme-mod-le-Original-et-surdimensionn-en-tissu-style-rappeur-indien.jpg_Q90.jpg_.webp" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">$36.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">20% de réduction</a>
                              <p class="card-text">
                              Original Oversized Men's Hooded Sweatshirt Cloth Indian Rapper Sweatshirt.
                              </p>
                              <p class="text-muted">Reviews (74)</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://ae01.alicdn.com/kf/S96214e17546b426f9b022e792db7633d9/Sweat-shirt-capuche-pour-femme-col-rond-style-Harajuku-dr-le-mode-Mochi-Kawaii-Y2k.jpg_Q90.jpg_.webp" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">$36.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">20% de réduction</a>
                              <p class="card-text">
                              Original Oversized Men's Hooded Sweatshirt Cloth Indian Rapper Sweatshirt.
                              </p>
                              <p class="text-muted">Reviews (74)</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://ae01.alicdn.com/kf/Sc78bd13d341c4b82adfc0fbcb87d7dedP/Veste-paisse-brod-e-en-duvet-de-coton-pour-hommes-et-femmes-pour-adolescents-2022.jpg_Q90.jpg_.webp" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">$50.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">15% de réduction</a>
                              <p class="card-text">
                              Embroidered cotton down thick jacket, for men and women, for teenagers.
                              </p>
                              <p class="text-muted">Reviews (50)</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://ae01.alicdn.com/kf/Scb19893807eb48d08c0d6bbd4a4ba483G/Chemise-manches-longues-pour-hommes-classique-ray-e-nouvelle-mode-d-affaires-Slim-Fit-marque-v.jpg_Q90.jpg_.webp" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">$50.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">15% de réduction</a>
                              <p class="card-text">
                              Men's Long Sleeve Shirt Classic Striped New Fashion Business Slim Fit Brand Spring Casual Clothing
                              </p>
                              <p class="text-muted">Reviews (50)</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-4 mb-4">
                      <div class="card h-100">
                          <a href="#">
                              <img src="https://ae01.alicdn.com/kf/Sb3889939b4b841beac931cbf4e4df0f5E/Hauts-en-tissu-de-coton-col-rond-pour-femmes-Streetwear-de-Style-d-contract-Simple-et.jpg_Q90.jpg_.webp" class="card-img-top" alt="..." />
                          </a>
                          <div class="card-body">
                              <ul class="list-unstyled d-flex justify-content-between">
                                  <li>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                      <i class="text-warning fa fa-star"></i>
                                  </li>
                                  <li class="text-muted text-right">$15.00</li>
                              </ul>
                              <a href="#" class="h2 text-decoration-none text-dark">5% de réduction</a>
                              <p class="card-text">
                              Women's Round Neck Cotton Cloth Tops Simple Fashion Casual Style Youth Streetwear
                              </p>
                              <p class="text-muted">Reviews (100)</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
       
        <footer  class="bg-dark" id="tempaltemo_footer">
          <div class="container">
              <div class="row">
                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-success border-bottom pb-3 border-light logo">Atnt Paris</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li>
                              <i class="fas fa-map-marker-alt fa-fw"></i>
                              France
                          </li>
                          <li>
                              <i class="fa fa-phone fa-fw"></i>
                              <a class="text-decoration-none" href="#">0615055353</a>
                          </li>
                          <li>
                              <i class="fa fa-envelope fa-fw"></i>
                              <a class="text-decoration-none" href="#">atntparis@gmail.com</a>
                          </li>
                      </ul>
                  </div>
                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li><a class="text-decoration-none" href="#">Sport Wear</a></li>
                          <li><a class="text-decoration-none" href="#">Men's Shoes</a></li>
                          <li><a class="text-decoration-none" href="#">Women's Shoes</a></li>
                          <li><a class="text-decoration-none" href="#">Popular Dress</a></li>
                          <li><a class="text-decoration-none" href="#">Gym Accessories</a></li>
                          <li><a class="text-decoration-none" href="#">Sport Shoes</a></li>
                      </ul>
                  </div>
                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li><a class="text-decoration-none" href="#">Home</a></li>
                          <li><a class="text-decoration-none" href="#">About Us</a></li>
                          <li><a class="text-decoration-none" href="#">Shop Locations</a></li>
                          <li><a class="text-decoration-none" href="#">FAQs</a></li>
                          <li><a class="text-decoration-none" href="#">Contact</a></li>
                      </ul>
                  </div>
              </div>
              <div class="row text-light mb-4">
                  <div class="col-12 mb-3">
                      <div class="w-100 my-3 border-top border-light"></div>
                  </div>
                  <div class="col-auto me-auto">
                      <ul class="list-inline text-left footer-icons">
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                          </li>
                      </ul>
                  </div>
                  <div class="col-auto">
                      <label class="sr-only" for="subscribeEmail">Email address</label>
                      <div class="input-group mb-2">
                          <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                          <div class="input-group-text btn-success text-light">Subscribe</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="w-100 bg-black py-3">
              <div class="container">
                  <div class="row pt-2">
                      <div class="col-12">
                          <p class="text-left text-light">
                              Copyright &copy; 2021 Atnt Paris
                              | Designed by <a rel="sponsored" href="#" target="_blank">Atnt</a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </footer>
    </div>
  );
}