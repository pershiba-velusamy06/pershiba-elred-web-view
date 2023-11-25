const DesignationListProfile = ({ designation, maxWidth}) => {
  const designations = designation?.map((item) => item?.value);

  const displayDesignations = () => {
    if (designations?.length === 0) {
      return "";
    } else if (designations?.length === 1) {
      return designations?.[0];
    } else {
      let display = "";
      let remainingDesignationsCount = 0;
      let currentWidth = 0;

      // Handle the first designation if it's too long
      if (designations?.[0].length * 8 > maxWidth) {
        display += `${designations?.[0].slice(0, Math.floor(maxWidth / 8))}... | `;
        return display + `+${designations?.length - 1}`;
      }
      for (let i = 0; i < designations?.length; i++) {
        const designationWidth = designations?.[i]?.length * 8; // Approximating width based on characters (adjust as needed)
        if (currentWidth + designationWidth < maxWidth) {
          // Include the designation in the display
          display += `${designations?.[i]} | `;
          if(currentWidth > 128){
            currentWidth += designationWidth;
          }else{
            currentWidth += designationWidth + 10;
          }   
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

export default DesignationListProfile;
