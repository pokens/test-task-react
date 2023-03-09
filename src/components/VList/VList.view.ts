import styled from "@emotion/styled";

const VListContainerView = styled.div`
   display: grid;
   text-align: center;
   justify-content: space-between;

   width: 90%;
   margin: 10px 0px;

   grid-template-columns: repeat(6, 250px);
   grid-row-gap: 15px;

   p {
      border: 1px solid black;
   }
`;

export default VListContainerView;
