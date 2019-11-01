export const ACTION_CONSTANT = 'ACTION_CONSTANT';

export const mapStateToProps = (state) => {
  return state
};

export const mapDispatchToProps = (dispatch) => ({
  onBtnClicked: (data) => {
    dispatch({
      type: ACTION_CONSTANT,
      data
    })
  } 
})