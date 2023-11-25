export const openProfile = (user) => {
  const time = new Date().getTime().toString().slice(-6)
  const url = `https://test.elred.io/shareProfile?userCode=${user}&t=${time}`;
  window.open(url, "_blank");
};

export const searchRatinghandler = (e, setSearchText, setLoading, searchHandler, type, makeLoad) => {
  setSearchText(e)
  if (makeLoad) {
    setLoading({ ethical: type === 'ethical' ? true : false, Meet: type === 'ethical' ? false : true })
    searchHandler(e)
  }

}

export const closePopUphandler = (close, setSearchText, closePopUp) => {
  close(false);
  setSearchText("")
  closePopUp()
}
export const SearchHandler = (e, setSearchText, setLoading, searchHandler, type, searchText) => {
  
  let reg = /^[a-zA-Z]+$/;
  if (!e.nativeEvent.data|| e?.nativeEvent?.data?.match(reg) || e?.nativeEvent.inputType === "deleteContentBackward" || e?.nativeEvent?.data === " "||e.nativeEvent.data==='-') {
    let text=e.target.value.replace(/[&\/\\#,+()$~%.'":+*?<>{}\d+]/g,'')
    searchRatinghandler(text, setSearchText, setLoading, searchHandler, type, true)
  } else {
    searchRatinghandler(searchText, setSearchText, setLoading, searchHandler, type, false)
  }
}