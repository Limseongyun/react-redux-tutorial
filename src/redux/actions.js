//action creator : 액션을 동적으로 만들어주는 함수
export const updateUser = (name) => ({
  type : 'updateUser',
  payload : name,
})