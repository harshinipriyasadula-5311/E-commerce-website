import React from "react";
import "./home.css"
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <div className="image-container">
                <div className="img">
                    <h2>iphone 9</h2> 
                    <img 
                        className="default-image"
                        src="https://fdn.gsmarena.com/imgroot/static/headers/makers/apple-2023-1.jpg"
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://t2.tudocdn.net/592508?w=567&h=340"
                        alt="Hover Image"
                    /> 
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>

                </div>
                <div className="img">
                    <h2>iphone x</h2>
                    <img
                        className="default-image"
                        src="https://www.apple.com/ge/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png"
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQol0YjdEl1IGTJMcx4rBHr-QeDwTIyJpiSkA&usqp=CAU"
                        alt="Hover Image"
                       
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                    

                </div>
                
                <div className="img">
                <h2>3D Embellishment Art Lamp</h2>
                    <img
                        className="default-image"
                       
                        src="https://www.ameede.com/wp-content/uploads/2019/12/3D-illusion-led-lamp-Mountain-free-vector-download-for-laser-engraving-machines_ACD_0.jpg"
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://m.media-amazon.com/images/I/711DQlX8mmL._AC_UF1000,1000_QL80_.jpg"
                        alt="Hover Image"
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                </div>
                <div className="img">
                <h2>Hyaluronic Acid Serum</h2>
                    <img
                        className="default-image"
                       
                    src="https://static-01.daraz.pk/p/6fe28e10a06d5c859b42fa0752aa1d52.jpg"
                        
                    alt="Default Image"
                    />
                    <img
                        className="hover-image"
                    src="https://www.shape.com/thmb/zypSw9Ql-J33ndfW6SQlJd8jg9k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Hyaluronic-Acid-Serums-SHP-tout-224c386830cd4f55a127c4877847da3e.jpg"

                    alt="Hover Image"
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                </div>   
                 <div className="img">
                <h2>Fog Scent Xpressio Perfume</h2>
                    <img
                        className="default-image"
                       
                        src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/aplus-media-library-service-media/9715152d-3522-4a63-beb6-61f74e0bdc37.__CR0,0,970,600_PT0_SX970_V1___.jpg"
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://images.meesho.com/images/products/112543850/xo9ts_512.webp"
                        alt="Hover Image"
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                </div> 
                   <div className="img">
                <h2>Flying Wooden Bird</h2>
                    <img
                        className="default-image"
                       
                        src="https://img.freepik.com/premium-photo/open-birdhouse-made-light-wood-with-flying-birds_124507-41605.jpg"
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://img.freepik.com/premium-photo/small-wooden-birdhouse-with-one-large-tree-branch-it_124507-41655.jpg"
                        alt="Hover Image"
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                   

                </div>
                <div className="img">
                <h2>Microsoft Surface Laptop 4</h2>
                    <img
                        className="default-image"
                       
                        src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LGwr?ver=d856&q=60&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=80&y=0&s=1062&d=597&aim=true"
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://thewincentral.com/wp-content/uploads/2019/01/Surface-Laptop-2.jpg"
                        alt="Hover Image"
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                    

                </div>
                <div className="img">
                <h2>Samsung Universe 9</h2>
                    <img
                        className="default-image"
                       
                        src="https://cdn.neowin.com/news/images/uploaded/2023/03/1679520808_samsung-odyssey-universe-level-g7.jpg"
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://www.gizmochina.com/wp-content/uploads/2017/04/Galaxy-Note-8-Concept.jpg"
                        alt="Hover Image"
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                   

                </div>
                <div className="img">
                <h2>Plant Hanger For Home</h2>
                    <img
                        className="default-image"
                       
                        src="https://www.jiomart.com/images/product/original/rvwywe8rty/zazza-home-decor-model-ss11-wood-handmade-macrame-boho-indoor-rope-plant-hanger-wall-hanging-shelf-product-images-orvwywe8rty-p602893939-0-202307031058.jpg?im=Resize=(420,420)"
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://sc04.alicdn.com/kf/Hcd4d10e789104eb0a1745685f98d1119O/234765189/Hcd4d10e789104eb0a1745685f98d1119O.jpg"
                        alt="Hover Image"
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                   

                </div>
                <div className="img">
                <h2>Cosmetics</h2>
                    <img
                        className="default-image"
                       
                        src="https://png.pngtree.com/thumb_back/fh260/background/20230413/pngtree-makeup-skin-care-products-cosmetics-beauty-photography-advertising-background-image_2218552.jpg"
                        
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://c4.wallpaperflare.com/wallpaper/414/818/456/mascara-shadows-cosmetics-blush-wallpaper-preview.jpg"
                        alt="Hover Image"
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                    

                </div>

                <div className="img">
                <h2>Oil Free Moisturizer 100ml</h2>
                    <img
                        className="default-image"
                       
                        src="https://bhubotanicals.com/cdn/shop/files/WhatsAppImage2023-07-04at3.44.52PM_1024x.jpg?v=1688490284"
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://rukminim2.flixcart.com/image/850/1000/kyj0vbk0/moisturizer-cream/o/j/f/100-super-soak-oil-free-face-moisturizer-for-oily-to-normal-skin-original-imagaqpmg8drcvgf.jpeg?q=20"
                        alt="Hover Image"
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                    

                </div>  
                  <div className="img">
                <h2>Skin Beauty Serum</h2>
                    <img
                        className="default-image"
                       
                        src="https://aaranyaa.in/cdn/shop/articles/facial-serums-which-ones-to-use-and-when-aaranyaa-skincare.png?v=1691221389"
                        alt="Default Image"
                    />
                    <img
                        className="hover-image"
                        src="https://www.pinkvilla.com/images/2023-09/1511468691_joggers-2023-09-15t151543-014.jpg"
                        alt="Hover Image"
                    />
                    <Link to="/login"><button id="click-btn">Click Here</button></Link>
                    

                </div> 
                     <Link className="back" to="/products"><button className="back-btn">Go to products  <i class="fa-solid fa-arrow-right fa-lg"></i></button></Link>&nbsp;&nbsp;
                </div>

        </>
    )
}
export default HomePage;

