import { categories } from "../data";
import styled from "styled-components";
import { CategoryItem } from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0", flexDirection: "column" })}
`;

export const Categories = ({ item }) => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};
