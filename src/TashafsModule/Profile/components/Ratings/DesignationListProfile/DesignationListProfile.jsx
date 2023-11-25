const DesignationListProfileForRatings = ({ designation, maxWidth}) => {
  const designations = designation?.map((item) => item?.value);

  const displayDesignations = () => {
    if (designations?.length === 0) {
      return "";
    } else if (designations?.length === 1) {
      return designations?.[0];
    }else if(designation?.length===2){
     
      if(designations?.[1].length * 12 <= maxWidth){
        return  `${designations?.[0]} | ${designations?.[1]} `;

      }else{
        return  `${designations?.[0]} | +${designations.length-1} `;
      }
     
    } else if(designation?.length===3){
      if(designations?.[0].length * 12 > maxWidth){
        return  `${designations?.[0]} | +${designations.length-1} `;
      }else{
        if(designations?.[1].length * 12 > maxWidth){
          return  `${designations?.[0]} | ${designations?.[1]} | +${designations.length-2}`;
        }else{
          if(`${designations?.[0]} | ${designations?.[1]}`.length * 12 > maxWidth){
            return  `${designations?.[0]} | ${designations?.[1]} |  +${designations.length-2}`;
          }else{
            if(designations?.[2].length * 12 > maxWidth){
              return  `${designations?.[0]} | ${designations?.[1]} | ${designations?.[2].slice(0, Math.floor(maxWidth / 12))}...`;
            }else{
              return  `${designations?.[0]} | ${designations?.[1]} | ${designations?.[2]} `;
            }
          }
         

        }
      }
    
    } 
    
    else {
      let display = "";
      let remainingDesignationsCount = 0;
      let currentWidth = 0;



      // Handle the first designation if it's too long
      if (designations?.[0].length * 15> maxWidth) {
        display += `${designations?.[0]} | `;
        return display + `+${designations?.length - 1}`;
      }


        for (let i = 0; i < designations?.length; i++) {
          const designationWidth = designations?.[i]?.length * 15; // Approximating width based on characters (adjust as needed)
          if (currentWidth + designationWidth < maxWidth) {
            // Include the designation in the display
            display += `${designations?.[i]} | `;
            currentWidth += designationWidth;
          } else {
            // Designation doesn't fit, increment the count of remaining designations
            remainingDesignationsCount = designations?.length - i;
            break;
          }
        }
      
   
      
      if (remainingDesignationsCount > 0) {
        display += `+ ${remainingDesignationsCount}`;
      } else {
        // Remove the trailing ' | ' if all designations fit
        display = display?.slice(0, -3);
      }
      return display;
    }
  };
  return displayDesignations();
};

export default DesignationListProfileForRatings;
