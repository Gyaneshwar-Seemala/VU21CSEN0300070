import styled from "styled-components";

export const ProductHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F5F5F5;
  height: 90px; 
  padding: 30px;
`;

export const ProductMain = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: start;
  padding: 30px;
  height: 150%;
  width: 100%;
  background: linear-gradient(180deg, #FFF4FB 0%, #F3DBFE 13.5%, #CFECF8 81.5%, #E8F7FC 100%);
  border-radius: 0px 0px 500px 500px;
`;

export const ProdcutNav = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 2rem;
`;

export const ProductCategory = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 0.8px solid black;
`;

export const CategoryName = styled.span`
  font-size: 25px;
  font-weight: 500;
  line-height: 48.36px;
  color: #545454;
`;

export const ProductDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  gap: 4rem;
`;

export const FiltersDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 30px;
  background: white;
  border-radius: 15px;
  height: 100%;
`;

export const FiltersHeading = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 32.98px;
  text-align: right;
  padding: 10px;
  color: #545454;
  cursor: pointer;
`;

export const Categories = styled.a`
  font-size: 18px;
  font-weight: 400;
  line-height: 32.98px;
  text-align: right;
  color: #545454;
  cursor: pointer;
  
  &:active {
    color: #693BD7;
  }
`;

export const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 5rem;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const ProductImage = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  background-image: ${(props) => `url(${props.productimage})`};
  background-size: cover; 
  background-position: center;
  width: 320px;
  height: 450px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.6);
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  z-index: 2;
`;

export const CartButton = styled.button`
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 90px;
  height: 40px;
  border-radius: 25px;
  background-color: #693BD7;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const ProListDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 300px;
  cursor: pointer;
  gap: 1rem;
`;

export const LikeButton = styled.button`
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 10px;
  background-color: #F5F5F5;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 5px;
`;

export const DescText = styled.span`
  width: 100%;
  height: 100%;
  padding: 10px;
  color: ${(props) => props.color || "black"};
  align-items: center;
  font-weight: ${(props) => props.weight};
  font-size: 20px;
  margin: -10px;
`;

export const PaginationDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const FilterButtonDiv = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 30px;
  width: 100%;
  justify-content: end;
  align-items: center;
`;

export const ApplyFilterButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #693BD7;
  color: white;
  cursor: pointer;
  box-shadow: none;
  border: none;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const DeleteFilterButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 9px;
  border: 1px solid #64647669;
  justify-content: center;
  display: flex;
  align-items: center;
  transition: box-shadow 0.3s ease;
  background: white;
  color: #5454548A;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const FilterHeadDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  justify-content: space-between;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
