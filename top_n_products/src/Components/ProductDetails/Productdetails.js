import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Maincontent, Imagelist, ImagelistImage, Mainimage,
    Description, HeadingDesc, SizeText, Sizedesc, Sizetext
} from "./Productdetails.styles";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Productdetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [showFullDescription, setShowFullDescription] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`http://localhost:8081/product/${productId}`);
            const data = await response.json();
            setProduct(data?.data);
            setSelectedImage(data?.data.image_urls[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const renderDescription = () => {
        const linesToShow = showFullDescription ? product.description.split('\n') : product.description.split('\n').slice(0, 4);
        return (
            <>
                {linesToShow.map((item, index) => (
                    <SizeText style={{ fontSize: "15px" }} key={index}>{item}</SizeText>
                ))}
                {product.description.split('\n').length > 4 && (
                    <span onClick={toggleDescription} style={{ color: "#007bff", cursor: "pointer" }}>
                        {showFullDescription ? "Read Less" : "...Read More"}
                    </span>
                )}
            </>
        );
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ background: "#FFF4FB", padding: "20px" }}>
            <div onClick={() => navigate('/product/listing')} style={{ cursor: "pointer" }}>
                <ArrowForwardIosIcon
                    style={{
                        color: "#AA19FF",
                        transform: "rotate(180deg)"
                    }}
                />
            </div>
            <Maincontent>
                <Imagelist>
                    {product.image_urls.map((url, index) => (
                        <ImagelistImage src={url} key={index} onClick={() => setSelectedImage(url)} />
                    ))}
                </Imagelist>
                <Mainimage src={selectedImage} />
                <Description>
                    <HeadingDesc>{product.name}</HeadingDesc>
                    <SizeText style={{ fontWeight: "bolder" }}>Product Details:</SizeText>
                    {renderDescription()}
                    <br /><br />
                    <HeadingDesc>{product.currency} {product.price}</HeadingDesc>
                </Description>
            </Maincontent>
        </div>
    );
};

export default Productdetails;
