export default (item) => {
  const { id, avatar, name } = item;

  return `<div class="eachUser" data="${id}">
  <div class="eachUserPhoto">
      <img src="src/assets/images/${avatar}" alt="${name}"/>
  </div>
  <div class="eachUserInfo">
      <h2>${name}</h2>
  </div>
</div>`;
};
