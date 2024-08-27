import styled from "styled-components"

export const Logotext = styled.div`
width:78px;
height:51px;
padding-top:65px;
padding-left:162px;
`;

export const Logo = styled.div`
width:129px;
height:95px;
padding-top:43px;
padding-right:162px;
`;

export const Navcontainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
`;
export const Arrow = styled.div`
width:100%;
height:100%;
align-items:start;
padding-right:70px;
`;

export const Maincontent = styled.div`
width:100%;
height:100%;
padding:40px;
display:flex;
align-items:start;
justify-content:center;
gap:2rem;
`;

export const Imagelist = styled.div`
width:80px;
height:100%;
padding:10px;
display:flex;
flex-direction:column;
gap:3rem;
`;


export const ImagelistImage = styled.img`
width:100%;
height:100%;
`;

export const Mainimage = styled.img`
width:500px;
height:500px;

`;

export const Description = styled.div`
width:500px;
height:100%;
display:flex;
padding:20px;
flex-direction:column;
align-items:start;
`;

export const HeadingDesc = styled.span`
width:70%;
font-family: Noto Sans;
font-size: 30px;
font-weight: 800;
line-height: 50px;
// text-align: right;
color:black;

`;

export const Subheading = styled.div`
width:100%;
display:flex;
align-items:center;
padding:10px;
justify-content:space-evenly;
`;

export const Sizedesc = styled.div`
width:15%;
display:flex;
align-items:center;
justify-content:center;
gap:1rem;
`;

export const SizeText = styled.span`
font-size: 20px;
font-weight: 400;
line-height: 26.84px;
color:black;
width:80%;
height:100%;
`;

export const Sizetext = styled.span`
width:40px;
height:40px;
padding:10px;
border-radius:50%;
background:#D9D9D9;
text-align:center;
font-weight:500;
`;

export const ColorDiv = styled.span`
width:40px;
height:20px;
padding:10px;
border-radius:50%;
background-color:${(props) => props.color};
`;

export const CompanyInfo = styled.div`
height:400px;
align-items:center;
justify-content:space-between;
display:flex;
flex-direction:column;
`;

export const Brand = styled.div`
width:50px;
height:50px;
border-radius:50%;
background:${(props) => `url(${props.brand})`} center center;
background-size:cover;
`;

export const ButtonsDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
gap:20px;
`;

export const ButtonA = styled.button`
width:150px;
padding:10px;
border-radius:25px;
background: linear-gradient(90deg, #00F0FF 0%, #BD00FF 100%);
color:#F5F5F5;
box-shadow:none;
display:flex;
gap:10px;
font-weight:500;
align-items:center;
border:none;
`;

export const ButtonB = styled.button`
width:150px;
padding:10px;
border-radius:25px;
background: #693BD7;
justify-content:Center;
color:#F5F5F5;
box-shadow:none;
display:flex;
gap:10px;
font-weight:500;
align-items:center;
border:none;
`;

export const Subcontent = styled.div`
width:100%;
height:100%;
padding:40px;
`;

export const Buttonsubdiv = styled.div`
display:flex;
flex-direction:row;
padding-right:60px;
gap:10px;
`;

export const ButtonM = styled.button`
width:130px;
height:40px;
padding:10px;
border-radius:25px;
border: 1px solid #545454;
box-shadow:none;
display:flex;
justify-content:center;
gap:10px;
font-weight:500;
align-items:center;
`;

export const ButtonS = styled.button`
width:130px;
padding:10px;
border-radius:25px;
border: 1px solid #545454;
box-shadow:none;
display:flex;
gap:10px;
justify-content:center;
font-weight:500;
align-items:center;
`;

export const Matchdiv = styled.div`
width:100%;
height:100%;
padding:40px;
`;

export const Matchitems = styled.div`
width: 219px;
height: 255px;

display:flex;
gap:40px;
padding-right:40px;
`;

export const Simalardiv = styled.div`
width:100%;
height:100%;
padding:40px;
gap:20px;
display:flex;
`;

export const Similaritems = styled.div`
width: 100%;
height: 100%;

display:flex;
gap:40px;
padding-right:40px;
`;

export const ImageContainerr = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
    width: calc(25% - 20px);
    height:100%;
    margin: 10px;
    text-align: center;
`;

export const Descriptionn = styled.p`
    font-size: 14px;
    color: #333;
    margin-top: 5px;
`;

export const SimilaritemDesc = styled.div`
  font-size: 12px;
  color: #545454;
  margin-top: 8px;
`;


export const SimilarContainer = styled.div`
widht:100%;
height:100%;
display:flex;
flex-wrap:Wrap;
align-items:start;
  gap:5rem;
  justify-content:center;
  padding:20px;
`;

export const SimilarDesc=styled.div`
display:flex;
${'' /* flex: 1 0 calc(30% - 1rem); */}
flex-direction:column;
justify-content:start;
width:200px;
cursor:pointer;
gap:1rem;
`;

export const SimlarImage=styled.div`
display: flex;
  align-items: end;
  justify-content: flex-end;
  padding:10px;
  background-color:white;
  border-radius:15px;
  background-image: ${(props) => `url(${props.productimage})`};
  background-size: cover; /* Ensures the image covers the entire div */
  background-position: center; /* Centers the image within the div */
  width: 200px; /* Adjust as needed */
  height: 300px; /* Adjust as needed */
  cursor:pointer;
  transition:box-shadow 0.3s ease;
  &:hover{
    box-shadow:0px 4px 15px rgb(0,0,0,0.6);
  }
`;

export const SimilarText=styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
padding-top:5px;
`;

export const Similartext=styled.span`
width: 100%;
    height: 100%;
    padding: 10px;
    color:${(props)=>props.color||"black"};
    align-items: center;
    font-weight: ${(props) => props.weight};
    font-size: 15px;
    margin:-10px;
`;

export const PurchaseLink=styled.span`
display:flex;
justify-content:space-between;
width:100%;
align-items:center;
`;