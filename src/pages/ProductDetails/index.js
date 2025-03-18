import { Breadcrumbs, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dashbord from "../Dashbord";
import Products from "../Products";
import { Link } from "react-router-dom"; 
import Slider from "react-slick";
import { MdBrandingWatermark } from 'react-icons/md';
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsTagsFill } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";
import img from '../../assets/image/img1.jpg'
import UserAvatarImg from "../../components/UserAvatarImg/indix";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MdOutlineReply } from "react-icons/md";
import { MdPublishedWithChanges } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaWindowRestore } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { IoMdResize } from "react-icons/io";


const ProductDetails = () => {

    var ProductSliderOption = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    var ProductSliderSmalOption = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // arrows: false
    };


    return (
        <>
        <div className="right-content w-100" style={{paddingBottom : '20px', paddingRight : '5px', paddingLeft : '5px'}}>
            <div className="card shadow border-0 w-100 flex-row p-4 m-0">
                <h5 className="mb-0">Product View</h5>
                <Breadcrumbs 
                    aria-label="breadcrumb" 
                    className="ml-auto breadcrumbs_">
                    <Link to="/Dashbord" color="inherit"  className="dash" style={{ color: "inherit", textDecoration: "none" }}>
                        <HomeIcon fontSize="small" /> Dashboard 
                    </Link>

                    <Link to="/Products" color="inherit"  className="dash" style={{ color: "inherit", textDecoration: "none" }}>
                        Products
                    </Link>

                    <Typography color="text.primary">
                        Product <ExpandMoreIcon fontSize="small" />
                    </Typography>
                </Breadcrumbs>
            </div>
        </div>


        <div className="card productDetailsSection">
            <div className="row">
                 <div className="col-md-5 ">
                    <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                        <h6 className="mb-3">Product Gallery</h6>
                        <Slider {...ProductSliderOption} className="sliderBig mb-2">
                            <div className="item">
                                <img src="https://i.pinimg.com/736x/ac/52/69/ac52690b931375b8a5d678529a16ebbf.jpg" 
                                className="product-image"/>
                            </div>
                        </Slider>


                        <Slider {...ProductSliderSmalOption} className="sliderSmall">
                            {[
                                "https://i.pinimg.com/736x/11/28/42/11284236380a759f99711b16b9954fbb.jpg",
                                "https://i.pinimg.com/736x/46/e1/82/46e18285f13cf5f1d0bfee7d11aaf685.jpg",
                                "https://i.pinimg.com/736x/bf/2f/36/bf2f36465dc2a45514507728884ed3ba.jpg",
                                "https://i.pinimg.com/736x/0a/51/10/0a511036737d25013c27f69209276ba5.jpg",
                                "https://i.pinimg.com/736x/06/fb/7e/06fb7e783e6c13098d7275b087d48aae.jpg",
                                "https://i.pinimg.com/736x/66/9a/0e/669a0e8b948c10115aad6f37a5a25d31.jpg",
                                "https://i.pinimg.com/736x/31/e6/bd/31e6bd25ff3ff351c010874e132e3d91.jpg",
                            ].map((src, index) => (
                                <div className="item" key={index}>
                                    <img src={src} className="thumbnail" />
                                </div>
                            ))}
                        </Slider>

                    </div>

                </div>



                <div className="col-md-7">
                    <div className="pt-3 pb-3 pl-4 pr-4">
                        <h6 className="mb-4">Product details</h6>

                        <h4>Formal suits for men wedding slim fit 3 piece dress
                            business party jacket
                        </h4>

                        <div className="productInfo mt-3">
                            <div className="row mb-2">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"> <MdBrandingWatermark /> </span>
                                    <span className="name">Brand</span>
                                </div>

                                <div className="col-sm-7">
                                    :   <span>Ecstasy</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"> <BiSolidCategoryAlt /> </span>
                                    <span className="name">Category</span>
                                </div>

                                <div className="col-sm-7">
                                    :   <span>Man's</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"> <BsTagsFill /> </span>
                                    <span className="name">Tags</span>
                                </div>

                                <div className="col-sm-9">
                                    :   <span>
                                            <ul className="list list_inline tags sml" style={{paddingLeft : '0.5rem'}}>
                                                <li className="list-inline-item">
                                                    <span>SUITE</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>PARTY</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>SUITE</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>SUITE</span>
                                                </li>
                                            </ul>
                                        </span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"> <IoMdColorPalette /> </span>
                                    <span className="name">Color</span>
                                </div>

                                <div className="col-sm-9">
                                   : <span>    
                                        <ul className="list list_inline tags sml" style={{paddingLeft : '0.5rem'}}>
                                                <li className="list-inline-item">
                                                    <span>RED</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>BLUE</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>BLACK</span>
                                                </li>
                                        </ul>
                                    </span>                                
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"> <IoMdResize /> </span>
                                    <span className="name">Size</span>
                                </div>

                                <div className="col-sm-9">
                                   : <span>    
                                        <ul className="list list_inline tags sml" style={{paddingLeft : '0.5rem'}}>
                                                <li className="list-inline-item">
                                                    <span>SM</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>MD</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>LG</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span>XL</span>
                                                </li>
                                        </ul>
                                    </span>                                
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"><IoMdPricetag /> </span>
                                    <span className="name">Price</span>
                                </div>

                                <div className="col-sm-7">
                                   : <span>Ecstasy</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"> <FaWindowRestore /> </span>
                                    <span className="name">Stock</span>
                                </div>

                                <div className="col-sm-7">
                                   : <span>(68) Piece</span>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"> <IoMdEye />  </span>
                                    <span className="name">Review</span>
                                </div>

                                <div className="col-sm-7">
                                   : <span>(03) Review</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3 d-flex align-items-center">
                                    <span className="icon"> <MdPublishedWithChanges />  </span>
                                    <span className="name">Published</span>
                                </div>

                                <div className="col-sm-7">
                                   : <span>02 Feb 2024</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="p-4">
                <h6 className="mt-4 mb-3">Product Description</h6>
                <p className="mb-3">This is a stylish women's blouse in an elegant olive green color. It features a wrap-style design with a flattering V-neckline and a structured collar. The long, puffed sleeves add 
                    a sophisticated touch, while the cinched waist with a side-tie detail enhances the silhouette. Made from a soft, textured fabric,
                     this blouse is perfect for both casual and formal occasions, offering a chic and modern look. Ideal for pairing with high-waisted trousers or skirts for a polished outfit.
                </p>

                <br />
                <hr />

                {/* Rating Analytics */}
                <h6 className="mt-5 mb-4">Rating Analytics</h6>

                <div className="ratingSection ">
                    <div className="ratingrow d-flex align-items-center">
                        <span className="col1">
                            5 Start
                        </span>

                        <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'80%'}}></div>
                            </div>
                        </div>

                        <span className="col3">
                            (22)
                        </span>
                    </div>

                    <div className="ratingrow d-flex align-items-center">
                        <span className="col1">
                            4 Start
                        </span>

                        <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'59%'}}></div>
                            </div>
                        </div>

                        <span className="col3">
                            (26)
                        </span>
                    </div>

                    <div className="ratingrow d-flex align-items-center">
                        <span className="col1">
                            3 Start
                        </span>

                        <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'35%'}}></div>
                            </div>
                        </div>

                        <span className="col3">
                            (13)
                        </span>
                    </div>

                    <div className="ratingrow d-flex align-items-center">
                        <span className="col1">
                            2 Start
                        </span>

                        <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'20%'}}></div>
                            </div>
                        </div>

                        <span className="col3">
                            (03)
                        </span>
                    </div>

                    <div className="ratingrow d-flex align-items-center">
                        <span className="col1">
                            1 Start
                        </span>

                        <div className="col2">
                            <div className="progress">
                                <div className="progress-bar" style={{width:'10%'}}></div>
                            </div>
                        </div>

                        <span className="col3">
                            (02)
                        </span>
                    </div>

                </div>

                <br/>


                {/* Customer reviews */}
                <h6 className="mt-4 mb-4">Customer reviews</h6>

                <div className="reviewsSection">
                    <div className="reviewsRow">
                        <div className="row align-items-center">
                            {/* user information */}
                            <div className="col-sm-7 d-flex flex-wrap">
                                <div className="d-flex align-items-center flex-column">
                                    <div className="userInfo d-flex align-items-center mb-3" style={{gap: '10px'}}>
                                        <UserAvatarImg img={img} lg={true} />

                                        <div className="info pl-2" >
                                            <h5>Nada Khader</h5>
                                            <span>25 minutes ago</span>
                                        </div>

                                    </div>

                                    <Rating className="rating"name="read-only" value={4.5} precision={0.5} readOnly />

                                </div>
                            </div>   

                            {/* reply button */}
                            <div className="col-md-5 d-flex ">
                                <div className="ml-auto">
                                    <Button className="btn-blue btn-big btn-lg ml-auto">
                                        <MdOutlineReply className="mb-2"/>
                                        Reply
                                    </Button>
                                </div>
                            </div> 

                            {/* comment */}
                            <div className="col-12">
                                <p className="mt-3">
                                Elegant and stylish! This olive green wrap blouse features a flattering silhouette, 
                                puffed sleeves, and a chic side-tie detail—perfect 
                                for a sophisticated look. A must-have for any wardrobe! 💚✨
                                </p>
                            </div>
                            

                        </div>
                    </div>
                </div>

            </div>
        </div>

        </>

    );
};

export default ProductDetails;
