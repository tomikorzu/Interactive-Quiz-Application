const userButton = () => {
  const userBtn = document.createElement("button");
  userBtn.classList.add("user-btn");
  userBtn.innerHTML = '<i class="fa-solid fa-user user-icon"></i>';
  document.body.appendChild(userBtn);
};

export default userButton;
