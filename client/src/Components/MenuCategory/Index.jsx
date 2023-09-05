import React from 'react'
import './Index.css'
const Index = () => {
  return (
    <div class="col-md-3">
    <section class="panel">
        <div class="panel-body">
            <input type="text" placeholder="Keyword Search" class="form-control" />
        </div>
    </section>
    <section class="panel">
        <header class="panel-heading">
            Category
        </header>
        <div class="panel-body">
            <ul class="nav prod-cat">
                <li>
                    <a href="#"><i class="fa fa-angle-right"></i> Bags &amp; Purses</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-angle-right"></i> Beauty</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-angle-right"></i> Coat &amp; Jacket</a>
                </li>
            </ul>
        </div>
    </section>
    <section class="panel">
        <header class="panel-heading">
            Price Range
        </header>
        <div class="panel-body sliders">
            <div id="slider-range" class="slider"></div>
            <div class="slider-info">
                <span id="slider-range-amount"></span>
            </div>
        </div>
    </section>
    <section class="panel">
        <header class="panel-heading">
            Best Seller
        </header>
        <div class="panel-body">
            <div class="best-seller">
                <article class="media">
                    <a class="pull-left thumb p-thumb">
                        <img src="https://www.bootdey.com/image/250x220/FFB6C1/000000" />
                    </a>
                    <div class="media-body">
                        <a href="#" class="p-head">Item One Tittle</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </article>
                <article class="media">
                    <a class="pull-left thumb p-thumb">
                        <img src="https://www.bootdey.com/image/250x220/A2BE2/000000" />
                    </a>
                    <div class="media-body">
                        <a href="#" class="p-head">Item Two Tittle</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </article>
                <article class="media">
                    <a class="pull-left thumb p-thumb">
                        <img src="https://www.bootdey.com/image/250x220/6495ED/000000" />
                    </a>
                    <div class="media-body">
                        <a href="#" class="p-head">Item Three Tittle</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</div>
  )
}

export default Index