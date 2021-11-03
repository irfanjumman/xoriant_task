export const actionTypes = {
    USER_DATA: 'USER_DATA'
}

export const UsersData = (data:any) => {
    return {
      type: actionTypes.USER_DATA,
      payload: data,
    };
  };